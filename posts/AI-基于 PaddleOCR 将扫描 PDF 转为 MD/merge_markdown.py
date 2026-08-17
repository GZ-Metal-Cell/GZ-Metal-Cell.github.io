# uv run python merge_markdown.py
# 将 output/chunk_* 下 doc_*.md 按顺序拼接为一个文件；仅改写图片 src 路径，不插入其它文字。
from __future__ import annotations

import argparse
import os
import re
from pathlib import Path

from tqdm import tqdm

CHUNK_DIR_RE = re.compile(r"^chunk_(\d+)_p(\d+)-(\d+)$")
DOC_FILE_RE = re.compile(r"^doc_(\d+)\.md$")


def parse_chunk_dirs(output_root: Path) -> list[tuple[int, Path]]:
    """返回 (chunk_idx, 路径)，按 chunk_idx 排序。"""
    rows: list[tuple[int, Path]] = []
    for p in output_root.iterdir():
        if not p.is_dir():
            continue
        m = CHUNK_DIR_RE.match(p.name)
        if m:
            rows.append((int(m.group(1)), p))
    rows.sort(key=lambda x: x[0])
    return rows


def list_doc_files(chunk_dir: Path) -> list[Path]:
    found: list[tuple[int, Path]] = []
    for p in chunk_dir.glob("doc_*.md"):
        m = DOC_FILE_RE.match(p.name)
        if m:
            found.append((int(m.group(1)), p))
    found.sort(key=lambda x: x[0])
    return [p for _, p in found]


def rewrite_image_paths(md_text: str, chunk_dir: Path, merged_out: Path) -> str:
    """按合并文件所在目录，把 src=\"imgs/...\" 改为指向该分片目录下的 imgs/。"""
    base = merged_out.parent.resolve()
    chunk_resolved = chunk_dir.resolve()
    prefix = Path(os.path.relpath(chunk_resolved, base)).as_posix()

    def sub(m: re.Match[str]) -> str:
        q = m.group(1)
        return f"src={q}{prefix}/imgs/"

    return re.sub(r'src=(["\'])(\./)?imgs/', sub, md_text)


def starts_with_atx_heading(text: str) -> bool:
    """片段首部（允许前导空白）是否为 Markdown ATX 标题，如 ## 、 ### 等。"""
    return bool(re.match(r"\s*#{1,6}\s", text))


def main() -> None:
    parser = argparse.ArgumentParser(description="合并 output/chunk_* 下的 Markdown")
    parser.add_argument(
        "-i",
        "--input-dir",
        type=Path,
        default=Path("output"),
        help="paddle 输出目录（默认 ./output）",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=Path("output") / "merged_full.md",
        help="合并后的文件路径（默认 ./output/merged_full.md）",
    )
    args = parser.parse_args()

    output_root = args.input_dir.resolve()
    out_path = args.output.resolve()

    if not output_root.is_dir():
        raise SystemExit(f"输入目录不存在: {output_root}")

    chunk_rows = parse_chunk_dirs(output_root)
    if not chunk_rows:
        raise SystemExit(f"未找到 chunk_* 子目录: {output_root}")

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path_resolved = out_path

    parts: list[str] = []

    for _idx, chunk_path in tqdm(chunk_rows, desc="合并分片", unit="档"):
        for doc_path in list_doc_files(chunk_path):
            text = doc_path.read_text(encoding="utf-8")
            text = rewrite_image_paths(text, chunk_path, out_path_resolved)
            if parts and starts_with_atx_heading(text) and not parts[-1].endswith("\n"):
                parts.append("\n\n")
            parts.append(text)

    out_path.write_text("".join(parts), encoding="utf-8")
    print(f"已写入: {out_path}（{len(chunk_rows)} 个分片目录）")


if __name__ == "__main__":
    main()
