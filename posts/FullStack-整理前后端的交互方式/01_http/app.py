"""HTTP（Fetch）：请求一次，返回一次。

在项目根目录执行（数字目录不能当 Python 包名，用 --app-dir）：
  uvicorn app:app --app-dir 01_http --reload --port 8001
"""
import sys
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="01 HTTP")
BASE = Path(__file__).resolve().parent


@app.get("/api/data")
def get_data():
    flow_recv("01_http", "GET /api/data")
    body = {"msg": "hello"}
    flow_send("01_http", "200 application/json", body)
    return body


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
