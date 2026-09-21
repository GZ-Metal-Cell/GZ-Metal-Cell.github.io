# Dependencies: uv sync  (run: uv run python paddle.py)
import base64
import io
import os
import time

import fitz  # PyMuPDF
import requests
from tqdm import tqdm

API_URL = "https://yeqfvfa988bbcard.aistudio-app.com/layout-parsing"
TOKEN = "<access token>"

file_path = "./image/mindubieji.pdf"
PAGES_PER_CHUNK = 80
# 首次请求失败后最多再试次数（共 1 + API_RETRY_TIMES 次机会）
API_RETRY_TIMES = 3
RETRY_DELAY_BASE_SEC = 8.0

headers = {
    "Authorization": f"token {TOKEN}",
    "Content-Type": "application/json",
}

optional_payload = {
    "useDocOrientationClassify": False,
    "useDocUnwarping": False,
    "useChartRecognition": False,
}

# 忽略环境变量里的 HTTP(S)_PROXY，避免失效/不适用的系统代理导致 ProxyError
_http = requests.Session()
_http.trust_env = False


def build_chunk_pdf_bytes(src_doc: fitz.Document, start: int, end: int) -> bytes:
    """Extract pages [start, end) (0-based, end exclusive) into a PDF byte string."""
    new_doc = fitz.open()
    try:
        new_doc.insert_pdf(src_doc, from_page=start, to_page=end - 1)
        buf = io.BytesIO()
        new_doc.save(buf)
        return buf.getvalue()
    finally:
        new_doc.close()


def _post_layout_parse(payload: dict) -> tuple[bool, str | None, dict | None]:
    """
    Returns (ok, error_message, result_dict).
    result_dict is the API's `result` object when ok.
    """
    try:
        response = _http.post(API_URL, json=payload, headers=headers, timeout=600)
    except requests.RequestException as e:
        return False, f"请求异常: {e}", None

    if response.status_code == 200:
        try:
            body = response.json()
        except ValueError as e:
            return False, f"响应非 JSON: {e}", None
        if "result" not in body:
            return False, f"响应缺少 result: {str(body)[:400]}", None
        return True, None, body["result"]

    snippet = response.text[:500] if response.text else ""
    return False, f"HTTP {response.status_code}: {snippet}", None


def save_chunk_results(
    result: dict,
    output_dir: str,
    chunk_idx: int,
    page_from: int,
    page_to: int,
) -> None:
    """Write markdown and images for one API response under a per-chunk folder."""
    os.makedirs(output_dir, exist_ok=True)
    layout_results = result["layoutParsingResults"]
    for i, res in enumerate(
        tqdm(layout_results, desc=f"  保存 chunk {chunk_idx} (页 {page_from + 1}-{page_to})", leave=False)
    ):
        md_filename = os.path.join(output_dir, f"doc_{i}.md")
        with open(md_filename, "w", encoding="utf-8") as md_file:
            md_file.write(res["markdown"]["text"])

        for img_path, img_url in tqdm(
            res["markdown"]["images"].items(),
            desc=f"    md 图 doc_{i}",
            leave=False,
        ):
            full_img_path = os.path.join(output_dir, img_path)
            os.makedirs(os.path.dirname(full_img_path) or ".", exist_ok=True)
            img_bytes = _http.get(img_url, timeout=120).content
            with open(full_img_path, "wb") as img_file:
                img_file.write(img_bytes)

        for img_name, img_url in tqdm(
            res["outputImages"].items(),
            desc=f"    版面图 doc_{i}",
            leave=False,
        ):
            img_response = _http.get(img_url, timeout=120)
            if img_response.status_code == 200:
                filename = os.path.join(output_dir, f"{img_name}_{i}.jpg")
                with open(filename, "wb") as f:
                    f.write(img_response.content)
            else:
                print(f"Failed to download image {img_name}, status: {img_response.status_code}")


def main() -> None:
    output_root = "output"
    os.makedirs(output_root, exist_ok=True)

    src = fitz.open(file_path)
    try:
        total_pages = src.page_count
        chunk_ranges = [
            (s, min(s + PAGES_PER_CHUNK, total_pages))
            for s in range(0, total_pages, PAGES_PER_CHUNK)
        ]
        desc = f"PDF 分片 (每档 {PAGES_PER_CHUNK} 页) → API"
        for chunk_idx, (start, end) in enumerate(tqdm(chunk_ranges, desc=desc, unit="档")):
            chunk_bytes = build_chunk_pdf_bytes(src, start, end)
            file_data = base64.b64encode(chunk_bytes).decode("ascii")
            payload = {
                "file": file_data,
                "fileType": 0,
                **optional_payload,
            }

            last_err: str | None = None
            result: dict | None = None
            max_attempts = 1 + API_RETRY_TIMES

            for attempt in range(max_attempts):
                ok, err, res = _post_layout_parse(payload)
                if ok and res is not None:
                    result = res
                    break
                last_err = err or "unknown"
                if attempt >= max_attempts - 1:
                    break
                # 4xx（除 429）一般重试无意义，直接结束本档
                if err and err.startswith("HTTP "):
                    parts = err.split(None, 2)
                    try:
                        code = int(parts[1].rstrip(":")) if len(parts) > 1 else 0
                    except ValueError:
                        code = 0
                    if 400 <= code < 500 and code != 429:
                        break
                delay = RETRY_DELAY_BASE_SEC * (2**attempt)
                time.sleep(delay)

            if result is None:
                print(
                    f"\n[跳过] chunk {chunk_idx} 页 {start + 1}-{end}，已重试仍失败: {last_err}"
                )
                fail_note = os.path.join(
                    output_root,
                    f"FAILED_chunk_{chunk_idx:03d}_p{start + 1:05d}-{end:05d}.txt",
                )
                with open(fail_note, "w", encoding="utf-8") as f:
                    f.write(last_err or "")
                continue

            chunk_dir = os.path.join(output_root, f"chunk_{chunk_idx:03d}_p{start + 1:05d}-{end:05d}")
            save_chunk_results(result, chunk_dir, chunk_idx, start, end)
    finally:
        src.close()


if __name__ == "__main__":
    main()
