"""Screenshot extraction module using ffmpeg via imageio-ffmpeg.

Supports two modes:
  1. Fixed-interval screenshots (traditional)
  2. Scene-change detection keyframes (smart, for lecture/slide videos)
"""

import os
import re
import subprocess
import imageio_ffmpeg
import cv2
from tqdm import tqdm

FFMPEG_PATH = imageio_ffmpeg.get_ffmpeg_exe()


def get_duration(video_path: str) -> float | None:
    """Get video duration in seconds using OpenCV."""
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        return None
    fps = cap.get(cv2.CAP_PROP_FPS)
    fc = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    cap.release()
    return fc / fps if fps > 0 else None


# ---------------------------------------------------------------------------
# Mode 1: Fixed-interval screenshots
# ---------------------------------------------------------------------------

def extract_screenshots(
    video_path: str,
    output_dir: str,
    duration: float,
    interval: int = 120,
    quality: int = 2,
) -> int:
    """Extract screenshots every `interval` seconds.

    Args:
        video_path: Path to the video file.
        output_dir: Directory to save screenshots.
        duration: Video duration in seconds.
        interval: Screenshot interval in seconds (default 120 = 2 min).
        quality: ffmpeg -q:v quality (2 = ~90% JPEG quality).

    Returns:
        Number of screenshots captured.
    """
    os.makedirs(output_dir, exist_ok=True)
    count = 0
    times = list(range(interval, int(duration), interval))

    for t in tqdm(times, desc="  Screenshots", unit="img", leave=False):
        fname = f"{t // 60:02d}_{t % 60:02d}.jpg"
        fpath = os.path.join(output_dir, fname)
        if os.path.exists(fpath):
            count += 1
            continue

        subprocess.run(
            [
                FFMPEG_PATH, "-y",
                "-ss", str(t),
                "-i", video_path,
                "-vframes", "1",
                "-q:v", str(quality),
                "-f", "image2",
                fpath,
            ],
            capture_output=True,
            timeout=60,
        )
        if os.path.exists(fpath):
            count += 1

    return count


# ---------------------------------------------------------------------------
# Mode 2: Scene-change detection keyframes
# ---------------------------------------------------------------------------

def extract_keyframes_scenedetect(
    video_path: str,
    output_dir: str,
    threshold: float = 0.1,
    fmt: str = "jpg",
    quality: int = 2,
) -> int:
    """Extract keyframes based on scene change detection.

    Uses ffmpeg's built-in ``scene`` filter to detect frame-to-frame
    differences and pick representative frames when the scene changes
    (e.g. slide transitions in lecture videos).

    The select expression ``eq(n,0)+gt(scene,threshold)`` ensures the
    very first frame (n=0) is always captured, in addition to all
    scene-change frames.

    Args:
        video_path: Path to the video file.
        output_dir: Directory to save keyframes.
        threshold: Scene change sensitivity (0.0 – 1.0).
            Lower  → more sensitive, more frames (e.g. 0.1).
            Higher → less sensitive, fewer frames (e.g. 0.3).
            0.1 is a good default for most course / slide videos.
        fmt: Output image format – ``"jpg"`` or ``"png"``.
        quality: JPEG quality (2–31, lower = better). Only used when fmt="jpg".

    Returns:
        Number of keyframe images saved.
    """
    os.makedirs(output_dir, exist_ok=True)
    fmt = fmt.lower()
    if fmt not in ("jpg", "jpeg", "png"):
        raise ValueError(f"Unsupported format: {fmt}")
    if fmt == "jpeg":
        fmt = "jpg"

    # --- skip if already done ---
    existing = [f for f in os.listdir(output_dir)
                if f.lower().endswith(f".{fmt}") and not f.startswith("scene_")]
    if existing:
        return len(existing)

    # --- 1. run ffmpeg with scene filter ---
    temp_pattern = os.path.join(output_dir, f"scene_%04d.{fmt}")

    cmd = [
        FFMPEG_PATH, "-y",
        "-i", video_path,
        "-vf", f"select='eq(n,0)+gt(scene,{threshold})',showinfo",
        "-vsync", "vfr",
    ]
    if fmt == "jpg":
        cmd += ["-q:v", str(quality)]
    cmd += ["-f", "image2", temp_pattern]

    print(f"    Scene threshold: {threshold}")
    result = subprocess.run(cmd, capture_output=True, timeout=3600)

    # --- 2. parse timestamps from showinfo (written to stderr) ---
    # Decode stderr as UTF-8 (ffmpeg output), tolerate encoding errors
    stderr_text = result.stderr.decode("utf-8", errors="replace")
    times: list[float] = []
    for line in stderr_text.splitlines():
        if "showinfo" in line and "pts_time:" in line:
            m = re.search(r"pts_time:([\d.]+)", line)
            if m:
                times.append(float(m.group(1)))

    # --- 3. rename scene_0001.jpg → HH_MM_SS.jpg ---
    frames = sorted(
        f for f in os.listdir(output_dir)
        if f.startswith("scene_") and f.lower().endswith(f".{fmt}")
    )

    if len(times) == len(frames):
        for frame_file, sec in zip(frames, times):
            h = int(sec // 3600)
            m = int((sec % 3600) // 60)
            s = int(sec % 60)
            ms = int(round((sec - int(sec)) * 1000))
            # Include milliseconds to avoid name collisions when multiple
            # scene changes happen within the same second.
            new_name = f"{h:02d}_{m:02d}_{s:02d}_{ms:03d}.{fmt}"
            os.rename(
                os.path.join(output_dir, frame_file),
                os.path.join(output_dir, new_name),
            )
    else:
        tqdm.write(
            f"    [WARN] timestamp count ({len(times)}) != frame count ({len(frames)}); "
            f"keeping scene_*.{fmt} names"
        )

    return len([f for f in os.listdir(output_dir)
                if f.lower().endswith(f".{fmt}")])
