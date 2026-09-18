"""经典表单 POST（可配合页面跳转/刷新）。运行:
  uvicorn app:app --app-dir 08_form_submit --reload --port 8008
"""
import sys
from pathlib import Path

from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send

app = FastAPI(title="08 Form")
BASE = Path(__file__).resolve().parent


@app.post("/submit", response_class=HTMLResponse)
def submit(username: str = Form(...)):
    flow_recv("08_form", "POST /submit (application/x-www-form-urlencoded)", {"username": username})
    flow_send("08_form", "200 text/html", "整页 HTML 结果（浏览器将导航到新文档）")
    return f"""<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8"/><title>已提交</title></head>
<body>
  <p>服务器收到 username = <strong>{username}</strong></p>
  <p><a href="/">返回表单</a></p>
</body></html>"""


app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
