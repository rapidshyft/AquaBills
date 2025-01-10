"""customer routes"""
from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from models.user import user

router = APIRouter()

class User(BaseModel):
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


@router.post("/user")
async def create_user(data: User):
    """create customer"""
    try:
        await user.create(data.model_dump())
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"message": "User created successfully"}

@router.get("/users")
async def get_users():
    """get customers"""
    try:
        users = await user.get_users()
        return users
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))