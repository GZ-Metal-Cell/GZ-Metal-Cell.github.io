"""长轮询：请求挂起直到有数据或超时。运行:
  uvicorn app:app --app-dir 05_long_polling --reload --port 8005
"""
import asyncio
import sys
import time
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="05 Long Polling")
BASE = Path(__file__).resolve().parent

# 模拟：每 8 秒产生一次“新数据”
_seq = 0
_last_emit = time.monotonic()


async def wait_until_data_ready(since: int, max_wait: float = 25.0):
    global _seq, _last_emit
    deadline = time.monotonic() + max_wait
    while time.monotonic() < deadline:
        # 每 8 秒 bump 一次版本
        if time.monotonic() - _last_emit >= 8:
            _seq += 1
            _last_emit = time.monotonic()
        if _seq > since:
            return _seq
        await asyncio.sleep(0.3)
    return since


@app.get("/poll")
async def poll(since: int = 0):
    flow_recv("05_long_polling", "GET /poll（长连接等待中）", {"since": since})
    new_seq = await wait_until_data_ready(since)
    if new_seq > since:
        body = {"seq": new_seq, "msg": "new data"}
    else:
        body = {"seq": since, "msg": "timeout, no new data"}
    flow_send("05_long_polling", "200 application/json（长轮询返回）", body)
    return body


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
