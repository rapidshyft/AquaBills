"""customer routes"""
import re
from typing import Optional
import uvicorn
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy.exc import IntegrityError
from starlette.responses import JSONResponse
from models.account_holder import account

logger = uvicorn.config.logger

router = APIRouter()


class AccountHolderSchema(BaseModel):
    national_id: str
    first_name: str
    last_name: str
    address: str
    city: str
    state: Optional[str] = None
    country: str
    postal_code: str
    phone: str
    email: str
    type: Optional[str] = None


@router.post("/account_holder")
async def create_account_holder(data: AccountHolderSchema):
    """create account holder"""
    try:
        check_account = await account.check_account_exist(data.model_dump().get("national_id"))
        if not check_account:
            await account.create(data.model_dump())
            return JSONResponse(status_code=201, content={"message": "Account holder created successfully"})
        else:
            return JSONResponse(status_code=409, content={"message": "Account holder already exists"})
    except IntegrityError as e:
        logger.error(e)
        raise HTTPException(status_code=409, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/account_holders")
async def get_account_holders():
    """get customers"""
    try:
        account_holders = await account.get_account_holders()
        return account_holders
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
