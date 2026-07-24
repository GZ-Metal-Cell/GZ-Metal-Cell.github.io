"""Markdown generation: merge SRT subtitles with screenshots."""

import os
import re
from tqdm import tqdm


def _srt_time_to_seconds(ts: str) -> float:
    """Convert SRT timestamp (HH:MM:SS,mmm) to total seconds."""
    h, m, s = ts.replace(",", ".").split(":")
    return int(h) * 3600 + int(m) * 60 + float(s)


def parse_srt(srt_path: str) -> list[tuple[float, float, str]]:
    """Parse SRT file into list of (start_sec, end_sec, text) tuples."""
    segments = []
    with open(srt_path, "r", encoding="utf-8") as f:
        content = f.read()
    blocks = content.strip().split("\n\n")
    for block in blocks:
        lines = block.strip().split("\n")
        if len(lines) < 3:
            continue
        time_line = lines[1]
        if "-->" not in time_line:
            continue
        parts = time_line.split(" --> ")
        if len(parts) != 2:
            continue
        start = _srt_time_to_seconds(parts[0].strip())
        end = _srt_time_to_seconds(parts[1].strip())
        text = " ".join(l.strip() for l in lines[2:])
        segments.append((start, end, text))
    return segments


def _format_time(seconds: int) -> str:
    return f"{seconds // 60:02d}:{seconds % 60:02d}"


def _parse_screenshot_name(name: str) -> int:
    """Parse 'MM_SS.jpg' to total seconds."""
    base = os.path.splitext(name)[0]
    parts = base.split("_")
    return int(parts[0]) * 60 + int(parts[1]) if len(parts) == 2 else 0


def generate_markdown(video_folder: str) -> str:
    """Generate a notes.md string for one video folder.

    The markdown interleaves subtitle text with screenshots every 2-minute interval.
    """
    srt_path = os.path.join(video_folder, "subtitle.srt")
    ss_dir = os.path.join(video_folder, "screenshots")
    video_name = os.path.basename(video_folder)

    segments = parse_srt(srt_path)
    screenshots = sorted(
        [f for f in os.listdir(ss_dir) if f.endswith(".jpg")],
        key=lambda f: _parse_screenshot_name(f),
    )

    if not segments:
        return f"# {video_name}\n\n*(No subtitle content)*\n"
    if not screenshots:
        lines = [f"# {video_name}\n"]
        for start, end, text in segments:
            lines.append(f"- **{_format_time(int(start))} - {_format_time(int(end))}**: {text}")
        return "\n".join(lines)

    lines = [f"# {video_name}\n"]
    ss_index = 0
    screenshot_times = [_parse_screenshot_name(f) for f in screenshots]

    for start, end, text in segments:
        inserted = False
        while ss_index < len(screenshot_times):
            ss_time = screenshot_times[ss_index]
            interval_end = ss_time
            interval_start = ss_time - 120 if ss_time >= 120 else 0

            if start < interval_end and end > interval_start:
                lines.append(f"\n## {_format_time(interval_start)} - {_format_time(interval_end)}\n")
                lines.append(f"{text}\n")
                ss_rel = os.path.join("screenshots", screenshots[ss_index])
                lines.append(f"![Screenshot at {_format_time(ss_time)}]({ss_rel})\n")
                ss_index += 1
                inserted = True
                break
            elif ss_time <= start:
                interval_start = max(0, ss_time - 120)
                interval_end = ss_time
                lines.append(f"\n## {_format_time(interval_start)} - {_format_time(interval_end)}\n")
                lines.append("*(No speech in this interval)*\n")
                ss_rel = os.path.join("screenshots", screenshots[ss_index])
                lines.append(f"![Screenshot at {_format_time(ss_time)}]({ss_rel})\n")
                ss_index += 1
            else:
                break
        if not inserted:
            lines.append(f"{text}\n")

    while ss_index < len(screenshot_times):
        ss_time = screenshot_times[ss_index]
        interval_start = max(0, ss_time - 120)
        interval_end = ss_time
        lines.append(f"\n## {_format_time(interval_start)} - {_format_time(interval_end)}\n")
        lines.append("*(No speech in this interval)*\n")
        ss_rel = os.path.join("screenshots", screenshots[ss_index])
        lines.append(f"![Screenshot at {_format_time(ss_time)}]({ss_rel})\n")
        ss_index += 1

    return "".join(lines)


def generate_all(output_base: str):
    """Walk output_base and regenerate notes.md for every video folder."""
    folders = []
    for root, dirs, files in os.walk(output_base):
        if "subtitle.srt" in files and "screenshots" in dirs:
            folders.append(root)

    for folder in tqdm(sorted(folders), desc="Generating markdown", unit="folder"):
        md_path = os.path.join(folder, "notes.md")
        content = generate_markdown(folder)
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(content)
    tqdm.write(f"Done! Generated {len(folders)} markdown files")
