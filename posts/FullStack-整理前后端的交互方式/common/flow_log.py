"""在终端打印「前后端数据流」，便于对照浏览器与 uvicorn 输出。"""
from __future__ import annotations

import json
from datetime import datetime, timezone
from typing import Any


def _ts() -> str:
    return datetime.now(timezone.utc).strftime("%H:%M:%S")


def _fmt(detail: Any, max_len: int = 2000) -> str:
    if detail is None:
        return ""
    if isinstance(detail, (dict, list, tuple)):
        s = json.dumps(detail, ensure_ascii=False, default=str)
    else:
        s = str(detail)
    if len(s) > max_len:
        return s[: max_len - 3] + "..."
    return s


def flow_recv(demo: str, summary: str, detail: Any = None) -> None:
    extra = f" | {_fmt(detail)}" if detail is not None else ""
    print(f"[数据流 {_ts()} | {demo}] 前端→后端 {summary}{extra}", flush=True)


def flow_send(demo: str, summary: str, detail: Any = None) -> None:
    extra = f" | {_fmt(detail)}" if detail is not None else ""
    print(f"[数据流 {_ts()} | {demo}] 后端→前端 {summary}{extra}", flush=True)
