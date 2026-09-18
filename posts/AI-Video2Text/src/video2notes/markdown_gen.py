"""Markdown generation: merge SRT subtitles with screenshots.

Supports two screenshot modes:
  1. Fixed-interval  → filenames like ``MM_SS.jpg``
  2. Scene-detection → filenames like ``HH_MM_SS.jpg``

The generator auto-detects the mode from the screenshot filenames.
"""

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


def _format_time(seconds: float) -> str:
    """Format seconds as HH:MM:SS or MM:SS (whichever is shorter)."""
    seconds = int(seconds)
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    if h > 0:
        return f"{h:02d}:{m:02d}:{s:02d}"
    return f"{m:02d}:{s:02d}"


def _parse_screenshot_name(name: str) -> float:
    """Parse screenshot filename to total seconds.

    Supports three formats:
      - ``MM_SS.jpg``          → fixed-interval mode
      - ``HH_MM_SS.jpg``       → scene-detection mode (seconds precision)
      - ``HH_MM_SS_MS.jpg``    → scene-detection mode (milliseconds precision)
    """
    base = os.path.splitext(name)[0]
    parts = base.split("_")
    try:
        if len(parts) == 2:
            return int(parts[0]) * 60 + int(parts[1])
        if len(parts) == 3:
            return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
        if len(parts) == 4:
            return (int(parts[0]) * 3600
                    + int(parts[1]) * 60
                    + int(parts[2])
                    + int(parts[3]) / 1000.0)
    except ValueError:
        pass
    return 0.0


def _detect_screenshot_mode(screenshots: list[str]) -> str:
    """Return 'scene' or 'interval' based on filename pattern."""
    if not screenshots:
        return "interval"
    first = screenshots[0]
    base = os.path.splitext(first)[0]
    parts = base.split("_")
    # 3 or 4 parts → scene-detection mode; 2 parts → fixed-interval mode
    return "scene" if len(parts) >= 3 else "interval"


# ---------------------------------------------------------------------------
# Mode 1: fixed-interval markdown (original behaviour)
# ---------------------------------------------------------------------------

def _generate_markdown_interval(
    video_name: str,
    segments: list[tuple[float, float, str]],
    screenshots: list[str],
    ss_dir: str,
) -> str:
    """Generate markdown for fixed-interval screenshots (every N seconds)."""
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


# ---------------------------------------------------------------------------
# Mode 2: scene-detection markdown (new behaviour)
# ---------------------------------------------------------------------------

def _generate_markdown_scene(
    video_name: str,
    segments: list[tuple[float, float, str]],
    screenshots: list[str],
    ss_dir: str,
) -> str:
    """Generate markdown for scene-detection keyframes.

    Each keyframe becomes a section.  The section covers the time span from
    this keyframe to the next keyframe (or end-of-video for the last one).
    All subtitle segments that fall within that span are grouped under the
    keyframe image.
    """
    screenshot_times = [_parse_screenshot_name(f) for f in screenshots]
    n = len(screenshot_times)

    # Estimate video end from the last subtitle
    video_end = segments[-1][1] if segments else screenshot_times[-1] + 60
    # Section end times: next keyframe's time, or video_end for the last
    section_ends = screenshot_times[1:] + [video_end]

    lines = [f"# {video_name}\n"]

    seg_idx = 0  # pointer into segments

    for i, (ss_time, ss_end) in enumerate(zip(screenshot_times, section_ends)):
        # First section starts at 0 (not at the first keyframe time),
        # otherwise we'd miss all subtitles before the first scene change.
        section_start = 0.0 if i == 0 else ss_time

        # Section header with time range
        lines.append(f"\n## {_format_time(section_start)} - {_format_time(ss_end)}\n")

        # Insert the keyframe image
        ss_rel = os.path.join("screenshots", screenshots[i])
        lines.append(f"![Keyframe at {_format_time(ss_time)}]({ss_rel})\n")

        # Collect all subtitle segments that overlap this section
        section_texts: list[str] = []
        while seg_idx < len(segments):
            seg_start, seg_end, text = segments[seg_idx]
            # Include if the segment overlaps the section
            if seg_start < ss_end and seg_end >= section_start:
                section_texts.append(text)
                seg_idx += 1
            elif seg_start >= ss_end:
                # Past this section, stop for now
                break
            else:
                # Before this section – skip (only possible if section_start > 0
                # and there's a gap, which shouldn't happen for i > 0)
                seg_idx += 1

        if section_texts:
            lines.append("\n".join(section_texts) + "\n")
        else:
            lines.append("*(No speech in this section)*\n")

    # Any remaining subtitles after the last keyframe
    if seg_idx < len(segments):
        last_ss_end = screenshot_times[-1] if screenshot_times else 0
        lines.append(f"\n## {_format_time(last_ss_end)} - {_format_time(video_end)}\n")
        lines.append("*(No keyframe for this section)*\n\n")
        remaining = [text for _, _, text in segments[seg_idx:]]
        lines.append("\n".join(remaining) + "\n")

    return "".join(lines)


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def generate_markdown(video_folder: str) -> str:
    """Generate a notes.md string for one video folder.

    Auto-detects whether screenshots are fixed-interval or scene-detection
    based on the filename pattern, and picks the appropriate layout.
    """
    srt_path = os.path.join(video_folder, "subtitle.srt")
    ss_dir = os.path.join(video_folder, "screenshots")
    video_name = os.path.basename(video_folder)

    segments = parse_srt(srt_path)

    # Collect all image files (jpg / png) and sort by timestamp
    screenshots = sorted(
        [f for f in os.listdir(ss_dir)
         if f.lower().endswith((".jpg", ".jpeg", ".png"))],
        key=lambda f: _parse_screenshot_name(f),
    )

    if not segments:
        return f"# {video_name}\n\n*(No subtitle content)*\n"

    if not screenshots:
        lines = [f"# {video_name}\n"]
        for start, end, text in segments:
            lines.append(f"- **{_format_time(start)} - {_format_time(end)}**: {text}")
        return "\n".join(lines)

    mode = _detect_screenshot_mode(screenshots)
    if mode == "scene":
        return _generate_markdown_scene(video_name, segments, screenshots, ss_dir)
    return _generate_markdown_interval(video_name, segments, screenshots, ss_dir)


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
