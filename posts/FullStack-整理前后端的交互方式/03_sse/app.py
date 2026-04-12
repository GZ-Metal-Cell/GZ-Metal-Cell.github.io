"""SSE：服务器单向流。运行:
  uvicorn app:app --app-dir 03_sse --reload --port 8003
"""
import asyncio
import sys
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.staticfiles import StaticFiles

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="03 SSE")
BASE = Path(__file__).resolve().parent


async def gen():
    for i in range(10):
        chunk = f"data: {i}\n\n"
        flow_send("03_sse", "SSE 推一条 default 消息", {"wire": chunk.replace(chr(10), "\\n")})
        yield chunk
        await asyncio.sleep(1)
    flow_send("03_sse", "SSE 流结束", "已发送 10 条，连接将关闭")


@app.get("/stream")
async def stream():
    flow_recv("03_sse", "GET /stream", "浏览器 EventSource 打开单向流")
    flow_send("03_sse", "200 text/event-stream", "开始 StreamingResponse 生成器")
    return StreamingResponse(gen(), media_type="text/event-stream")


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
