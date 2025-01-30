import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import api.routes.account_holder

app = FastAPI()

origins = ["http://0.0.0.0:8000/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api.routes.account_holder.router)


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)
