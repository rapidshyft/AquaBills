from datetime import datetime

from fastapi import HTTPException
from sqlalchemy import Integer, String, DateTime
from sqlalchemy.orm import Mapped, mapped_column, Session

from database.db import engine
from models.base import Base


class AccountHolder(Base):
    __tablename__ = 'account_holders'

    id: Mapped[int] = mapped_column(Integer(), primary_key=True, autoincrement=True, nullable=False)
    national_id: Mapped[str] = mapped_column(String(15), nullable=False, unique=True)
    type: Mapped[str] = mapped_column(String(15), default="resident")
    first_name: Mapped[str] = mapped_column(String(40), nullable=False)
    last_name: Mapped[str] = mapped_column(String(40), nullable=False)
    address: Mapped[str] = mapped_column(String(60), nullable=False)
    city: Mapped[str] = mapped_column(String(40), nullable=False)
    state: Mapped[str] = mapped_column(String(40))
    country: Mapped[str] = mapped_column(String(40))
    postal_code: Mapped[str] = mapped_column(String(10))
    phone: Mapped[str] = mapped_column(String(15), nullable=False)
    email: Mapped[str] = mapped_column(String(60))
    created_at: Mapped[datetime] = mapped_column(DateTime(), default=datetime.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(), default=datetime.now())

    def __repr__(self) -> str:
        return f"AccountHolder(id={self.id}, first_name={self.first_name}, last_name={self.last_name}"

    async def create(self, data: dict):
        """create account_holder"""
        Base.metadata.create_all(engine)

        with Session(engine) as session:
            new_account_holder = AccountHolder(
                national_id=data['national_id'], type=data['type'], first_name=data['first_name'],
                last_name=data['last_name'], address=data['address'], city=data['city'],
                state=data['state'], country=data['country'], postal_code=data['postal_code'],
                phone=data['phone'], email=data['email'], created_at=self.created_at, updated_at=self.updated_at
            )
            session.add(new_account_holder)
            session.commit()
        return new_account_holder

    async def update(self, data: dict):
        """update account_holder personal info"""
        with Session(engine) as session:
            account_holder = session.query(AccountHolder).filter_by(id=data['national_id']).first()

            if not account_holder:
                raise HTTPException(status_code=400, detail="AccountHolder not found")

            for key, value in data.items():
                setattr(account_holder, key, value)
                session.commit()

    async def delete(self, data: dict):
        """delete account_holder from database"""
        with Session(engine) as session:
            account_holder = session.query(AccountHolder).filter_by(id=data['id']).first()
            if not account_holder:
                return "account_holder not found"

            session.delete(account_holder)
            session.commit()
            return "account_holder deleted"

    async def get_account_holder_by_id(self, id: int):
        with Session(engine) as session:
            account_holder = session.query(AccountHolder).filter_by(id=id).first()
            if not account_holder:
                return "account_holder not found"

            return account_holder

    async def get_account_holders(self):
        """get all account_holders"""
        with Session(engine) as session:
            account_holders = session.query(AccountHolder).all()
            return account_holders


account = AccountHolder()
