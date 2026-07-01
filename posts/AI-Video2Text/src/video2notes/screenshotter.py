"""Screenshot extraction module using ffmpeg via imageio-ffmpeg."""

import os
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
