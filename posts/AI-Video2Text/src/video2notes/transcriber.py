"""Whisper transcription module with audio loading patches."""

import os
import subprocess
import time
import numpy as np
import whisper
import torch
import imageio_ffmpeg

# Patch whisper.audio.load_audio to use bundled ffmpeg
import whisper.audio

FFMPEG_PATH = imageio_ffmpeg.get_ffmpeg_exe()

def _patched_load_audio(file, sr=whisper.audio.SAMPLE_RATE):
    cmd = [
        FFMPEG_PATH, "-nostdin", "-threads", "0", "-i", file,
        "-f", "s16le", "-ac", "1", "-acodec", "pcm_s16le", "-ar", str(sr), "-",
    ]
    out = subprocess.run(cmd, capture_output=True, check=True, timeout=300).stdout
    return np.frombuffer(out, np.int16).flatten().astype(np.float32) / 32768.0

whisper.audio.load_audio = _patched_load_audio


def _detect_language(video_path: str) -> str | None:
    """Heuristic: return 'zh' if certain keywords in the path, else None (auto)."""
    lower = video_path.lower()
    if any(kw in lower for kw in ("南京", "操作系统", "蒋炎岩", "李宏毅", "ai agent", "stm32", "嵌入式")):
        return "zh"
    return None


def _format_srt_timestamp(sec: float) -> str:
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = int(sec % 60)
    ms = int((sec - int(sec)) * 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def transcribe(
    video_path: str,
    model_name: str = "tiny",
    device: str = "cuda" if torch.cuda.is_available() else "cpu",
    language: str | None = None,
    verbose: bool = False,
) -> dict:
    """Transcribe a video file with Whisper, return result dict."""
    if language is None:
        language = _detect_language(video_path)

    print(f"  Loading whisper model '{model_name}'...")
    t0 = time.time()
    model = whisper.load_model(model_name)
    if device == "cuda" and torch.cuda.is_available():
        model = model.cuda()
    print(f"    Loaded in {time.time() - t0:.1f}s")

    print(f"  Transcribing (device={device}, lang={language or 'auto'})...")
    ts = time.time()
    result = model.transcribe(
        video_path,
        language=language,
        verbose=verbose,
        fp16=(device == "cuda"),
    )
    elapsed = time.time() - ts
    print(f"    Done in {elapsed / 60:.1f} min, {len(result['segments'])} segments")
    return result


def save_srt(result: dict, srt_path: str):
    """Save transcription result as SRT file."""
    os.makedirs(os.path.dirname(srt_path), exist_ok=True)
    with open(srt_path, "w", encoding="utf-8") as f:
        for i, seg in enumerate(result["segments"], 1):
            f.write(f"{i}\n")
            f.write(f"{_format_srt_timestamp(seg['start'])} --> {_format_srt_timestamp(seg['end'])}\n")
            f.write(f"{seg['text'].strip()}\n\n")
    print(f"    SRT saved: {srt_path}")
