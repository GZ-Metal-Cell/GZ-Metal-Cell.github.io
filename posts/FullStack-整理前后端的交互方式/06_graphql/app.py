"""GraphQL：一次端点，查询由客户端描述。运行:
  uvicorn app:app --app-dir 06_graphql --reload --port 8006
"""
import sys
from pathlib import Path

import strawberry
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.requests import Request
from strawberry.fastapi import GraphQLRouter

_REPO = Path(__file__).resolve().parent.parent
if str(_REPO) not in sys.path:
    sys.path.insert(0, str(_REPO))
from common.flow_log import flow_recv, flow_send


@strawberry.type
class User:
    name: str


@strawberry.type
class Query:
    @strawberry.field
    def user(self) -> User:
        return User(name="Ada")


schema = strawberry.Schema(query=Query)
graphql_app = GraphQLRouter(schema)

app = FastAPI(title="06 GraphQL")
BASE = Path(__file__).resolve().parent


@app.middleware("http")
async def graphql_flow_log(request: Request, call_next):
    path = request.url.path
    if path.rstrip("/") == "/graphql" and request.method == "POST":
        body = await request.body()
        try:
            preview = body.decode("utf-8")
        except UnicodeDecodeError:
            preview = repr(body[:500])
        flow_recv("06_graphql", "POST /graphql", preview)

        async def receive():
            return {"type": "http.request", "body": body, "more_body": False}

        request = Request(request.scope, receive=receive)
    response = await call_next(request)
    if path.startswith("/graphql"):
        flow_send("06_graphql", f"HTTP {response.status_code}", "GraphQL 执行完成（响应体由 Starlette 写出）")
    return response


app.include_router(graphql_app, prefix="/graphql")
app.mount("/", StaticFiles(directory=BASE / "static", html=True), name="static")
