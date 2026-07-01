"""video2notes CLI: batch transcribe and screenshot video courses."""

import argparse
import os
import sys
import time
from tqdm import tqdm


def _safe_folder_name(name: str) -> str:
    """Sanitize a string for use as a folder name."""
    return "".join(c if c.isalnum() or c in " -_().[]" else "_" for c in name).strip()


def _detect_cuda() -> str:
    try:
        import torch
        return "cuda" if torch.cuda.is_available() else "cpu"
    except Exception:
        return "cpu"


def process_video(
    video_path: str,
    output_dir: str,
    model_name: str = "tiny",
    device: str = "cpu",
    interval: int = 120,
    language: str | None = None,
    skip_existing: bool = True,
) -> bool:
    """Process a single video: transcribe + screenshot + markdown.

    Returns True if processing succeeded (or was skipped).
    """
    from .transcriber import transcribe, save_srt
    from .screenshotter import get_duration, extract_screenshots
    from .markdown_gen import generate_markdown

    vname = os.path.splitext(os.path.basename(video_path))[0]
    safe = _safe_folder_name(vname)
    out_dir = os.path.join(output_dir, safe)
    srt_file = os.path.join(out_dir, "subtitle.srt")
    ss_dir = os.path.join(out_dir, "screenshots")
    md_file = os.path.join(out_dir, "notes.md")

    print(f"\n{'=' * 60}")
    print(f"  Video: {vname}")
    print(f"  Out:   {out_dir}")
    os.makedirs(out_dir, exist_ok=True)

    srt_ok = os.path.isfile(srt_file) and os.path.getsize(srt_file) > 0
    ss_ok = os.path.isdir(ss_dir) and len(os.listdir(ss_dir)) > 0

    if skip_existing and srt_ok and ss_ok:
        print("  [SKIP] Already processed")
        return True

    # Step 1: Transcribe
    if not srt_ok:
        result = transcribe(video_path, model_name=model_name, device=device, language=language, verbose=False)
        save_srt(result, srt_file)
    else:
        print("  [1/2] SRT exists, skipping")

    # Step 2: Screenshots
    if not ss_ok:
        print(f"  [2/2] Extracting screenshots every {interval}s...")
        duration = get_duration(video_path)
        if duration:
            print(f"    Duration: {duration / 60:.1f} min")
            cnt = extract_screenshots(video_path, ss_dir, duration, interval=interval)
            print(f"    Captured {cnt} screenshots")
        else:
            print("    [WARN] Cannot determine duration, skipping screenshots")
    else:
        print("  [2/2] Screenshots exist, skipping")

    # Step 3: Generate markdown (always regenerate if both exist)
    if os.path.isfile(srt_file) and os.path.isdir(ss_dir):
        content = generate_markdown(out_dir)
        with open(md_file, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [3/3] notes.md generated ({len(content)} chars)")

    return True


def main():
    parser = argparse.ArgumentParser(
        description="video2notes - extract subtitles and screenshots from video courses",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=(
            "Examples:\n"
            "  # Process a single video directory\n"
            "  video2notes -i D:\\Videos\\course -o D:\\Output\\course\n\n"
            "  # Use GPU and medium model\n"
            "  video2notes -i D:\\Videos\\course -o D:\\Output\\course --device cuda --model medium\n\n"
            "  # Only regenerate markdown from existing SRT + screenshots\n"
            "  video2notes -o D:\\Output\\course --markdown-only\n"
        ),
    )

    parser.add_argument(
        "-i", "--input-dir",
        default=None,
        help="Directory containing video files",
    )
    parser.add_argument(
        "-o", "--output-dir",
        required=True,
        help="Root output directory (one subfolder per video)",
    )
    parser.add_argument(
        "--model",
        default="tiny",
        help="Whisper model name (tiny/base/small/medium/large) or path to a .pt model file (default: tiny)",
    )
    parser.add_argument(
        "--device",
        default=None,
        choices=["cpu", "cuda"],
        help=f"Compute device (default: auto-detect, currently: {_detect_cuda()})",
    )
    parser.add_argument(
        "--language",
        default=None,
        help="Language code (e.g. 'zh' for Chinese). Auto-detected for Chinese keywords",
    )
    parser.add_argument(
        "--interval",
        type=int,
        default=120,
        help="Screenshot interval in seconds (default: 120 = 2 minutes)",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-process all videos even if already done",
    )
    parser.add_argument(
        "--markdown-only",
        action="store_true",
        help="Only regenerate notes.md from existing SRT + screenshots (no -i needed)",
    )

    args = parser.parse_args()

    if args.markdown_only:
        from .markdown_gen import generate_all
        output_base = os.path.normpath(args.output_dir)
        if not os.path.isdir(output_base):
            print(f"ERROR: Output directory not found: {output_base}")
            sys.exit(1)
        print(f"Markdown-only mode: regenerating notes.md under {output_base}")
        generate_all(output_base)
        return

    # Normal mode: transcribe + screenshot
    if not args.input_dir:
        print("ERROR: --input-dir is required (or use --markdown-only)")
        sys.exit(1)
    if not os.path.isdir(args.input_dir):
        print(f"ERROR: Input directory not found: {args.input_dir}")
        sys.exit(1)

    import torch
    device = args.device or _detect_cuda()

    # Build output directory name from input dir
    dir_name = os.path.basename(os.path.normpath(args.input_dir))
    safe = _safe_folder_name(dir_name)
    output_base = os.path.join(args.output_dir, safe)
    os.makedirs(output_base, exist_ok=True)

    videos = sorted(
        f for f in os.listdir(args.input_dir)
        if f.lower().endswith((".mp4", ".mkv", ".avi", ".mov"))
    )

    print(f"\n{'=' * 60}")
    print(f"  Input:     {args.input_dir}")
    print(f"  Output:    {output_base}")
    print(f"  Videos:    {len(videos)} found")
    print(f"  Model:     {args.model}")
    print(f"  Device:    {device}")
    print(f"  Interval:  {args.interval}s")
    print(f"  Language:  {args.language or 'auto'}")
    print(f"{'=' * 60}\n")

    print(f"CUDA available: {torch.cuda.is_available()}")
    if torch.cuda.is_available():
        print(f"GPU: {torch.cuda.get_device_name(0)}")

    start_time = time.time()
    done = 0
    skip_existing = not args.force

    pbar = tqdm(videos, desc="Processing videos", unit="video")
    for idx, v in enumerate(pbar, 1):
        vp = os.path.join(args.input_dir, v)
        pbar.set_postfix_str(v)
        try:
            ok = process_video(
                video_path=vp,
                output_dir=output_base,
                model_name=args.model,
                device=device,
                interval=args.interval,
                language=args.language,
                skip_existing=skip_existing,
            )
            if ok:
                done += 1
        except Exception as ex:
            tqdm.write(f"  [ERROR] {ex}")
            import traceback
            traceback.print_exc()

        with open(os.path.join(output_base, "_progress.txt"), "w") as pf:
            pf.write(f"Completed: {idx}/{len(videos)}\nLast: {v}\n")

    elapsed = time.time() - start_time
    print(f"\n{'=' * 60}")
    print(f"  Done: {done}/{len(videos)} videos in {elapsed / 3600:.1f}h")
    print(f"  Output: {output_base}")


if __name__ == "__main__":
    main()
