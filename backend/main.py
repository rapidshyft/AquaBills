import uvicorn
from fastapi import FastAPI
import api.routes.account_holder

app = FastAPI()

app.include_router(api.routes.account_holder.router)


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)
