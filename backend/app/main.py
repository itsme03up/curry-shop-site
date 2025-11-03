from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#CORS設定（Readtと連携するために必要）
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"], #開発中は全部許可。あとで制限
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/menu")
def read_menu():
    return {
        "items": [
            {"id": 1, "name": "チキンカレー", "price": 900},
            {"id": 2, "name": "ビーフカレー", "price": 1100},
            {"id": 3, "name": "野菜カレー", "price": 850},
        ]
    }