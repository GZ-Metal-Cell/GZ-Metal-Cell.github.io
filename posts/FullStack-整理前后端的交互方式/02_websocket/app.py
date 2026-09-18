"""WebSocket：持久双向。运行:
  uvicorn app:app --app-dir 02_websocket --reload --port 8002
"""
import sys
from pathlib import Path

from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles
from starlette.websockets import WebSocketDisconnect

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="02 WebSocket")
BASE = Path(__file__).resolve().parent


@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    flow_recv("02_websocket", "WebSocket 握手 /ws", "浏览器发起连接")
    await ws.accept()
    flow_send("02_websocket", "WebSocket accept", "连接已建立，可双向收发文本帧")
    try:
        while True:
            data = await ws.receive_text()
            flow_recv("02_websocket", "WS 文本帧（前端→后端）", data)
            out = "echo: " + data
            await ws.send_text(out)
            flow_send("02_websocket", "WS 文本帧（后端→前端）", out)
    except WebSocketDisconnect:
        flow_recv("02_websocket", "WS 关闭", "浏览器/对端断开 (WebSocketDisconnect)")
    except Exception as exc:
        flow_recv("02_websocket", "WS 会话结束", type(exc).__name__)


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
