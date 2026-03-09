from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import products

app = FastAPI(title="Томатная паста — B2B API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"]  # frontend dev/build ports + wildcard
    ,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)

@app.get("/")
def root():
    return {"message": "API работает!"}