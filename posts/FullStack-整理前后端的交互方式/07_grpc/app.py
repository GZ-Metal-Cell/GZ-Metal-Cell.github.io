"""gRPC 为进程间/服务间 RPC；此处 FastAPI 只托管说明页。运行:
  uvicorn app:app --app-dir 07_grpc --reload --port 8007
"""
import sys
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.requests import Request

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="07 gRPC (static + notes)")
BASE = Path(__file__).resolve().parent


@app.middleware("http")
async def note_static_only(request: Request, call_next):
    if request.method == "GET" and request.url.path in ("/", "/index.html"):
        flow_recv(
            "07_grpc(HTTP)",
            f"{request.method} {request.url.path}",
            "仅静态说明页；二进制 gRPC 请看运行 grpc_server 的终端",
        )
    response = await call_next(request)
    if request.method == "GET" and request.url.path in ("/", "/index.html"):
        flow_send("07_grpc(HTTP)", f"HTTP {response.status_code}", "返回 HTML")
    return response


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
