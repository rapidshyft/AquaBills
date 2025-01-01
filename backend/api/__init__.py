"""fastapi instance"""
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    """main page"""
    return {"Hello": "World"}
