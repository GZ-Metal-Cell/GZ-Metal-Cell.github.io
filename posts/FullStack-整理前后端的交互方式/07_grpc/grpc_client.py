"""gRPC 客户端（命令行）。需先启动 grpc_server。运行: python 07_grpc/grpc_client.py"""
import sys
from pathlib import Path

import grpc

_ROOT = Path(__file__).resolve().parent
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from demo_pb2 import HelloRequest
from demo_pb2_grpc import GreeterStub


def main():
    with grpc.insecure_channel("localhost:50051") as ch:
        stub = GreeterStub(ch)
        r = stub.SayHello(HelloRequest(name="FastAPI 学习者"))
        print(r.message)


if __name__ == "__main__":
    main()
