"""customer routes"""
from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from models.account_holder import account

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
    """create customer"""
    try:
        await account.create(data.model_dump())
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"message": "User created successfully"}


@router.get("/account_holders")
async def get_account_holders():
    """get customers"""
    try:
        account_holders = await account.get_account_holders()
        return account_holders
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))