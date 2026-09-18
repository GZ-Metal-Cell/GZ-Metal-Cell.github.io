"""gRPC 服务（非浏览器协议）。运行: python 07_grpc/grpc_server.py"""
import sys
from concurrent import futures
from pathlib import Path

import grpc

_ROOT = Path(__file__).resolve().parent
_REPO = _ROOT.parent
for p in (_ROOT, _REPO):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

from common.flow_log import flow_recv, flow_send
from demo_pb2 import HelloReply, HelloRequest
from demo_pb2_grpc import GreeterServicer, add_GreeterServicer_to_server


class Greeter(GreeterServicer):
    def SayHello(self, request: HelloRequest, context):
        flow_recv("07_grpc(gRPC)", "SayHello（客户端→服务端）", {"name": request.name})
        message = f"Hello, {request.name}"
        flow_send("07_grpc(gRPC)", "SayHello（服务端→客户端）", {"message": message})
        return HelloReply(message=message)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=4))
    add_GreeterServicer_to_server(Greeter(), server)
    server.add_insecure_port("[::]:50051")
    server.start()
    print("gRPC listening on 50051 (Ctrl+C to stop)")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
