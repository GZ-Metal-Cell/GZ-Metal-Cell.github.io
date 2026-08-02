"""轮询：定时问服务器。运行:
  uvicorn app:app --app-dir 04_polling --reload --port 8004
"""
import sys
import time
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="04 Polling")
BASE = Path(__file__).resolve().parent
_start = time.time()


@app.get("/api/status")
def status():
    flow_recv("04_polling", "GET /api/status", "定时轮询命中")
    body = {"uptime_sec": round(time.time() - _start, 2), "tick": int(time.time())}
    flow_send("04_polling", "200 application/json", body)
    return body


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
