from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column, Session

from database.db import engine
from models.base import Base


class User(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(Integer(), primary_key=True, autoincrement=True, nullable=False)
    national_id: Mapped[str] = mapped_column(String(15), nullable=False)
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

    def __repr__(self) -> str:
        return f"User(id={self.id}, first_name={self.first_name}, last_name={self.last_name}"

    async def create(self, data: dict):
        """create user"""
        Base.metadata.create_all(engine)

        with Session(engine) as session:
            new_user = User(
                national_id=data['national_id'], type=data['type'], first_name=data['first_name'],
                last_name=data['last_name'], address=data['address'], city=data['city'],
                state=data['state'], country=data['country'], postal_code=data['postal_code'],
                phone=data['phone'], email=data['email']
            )
            session.add(new_user)
            session.commit()
        return new_user

    async def update(self, data: dict):
        """update user personal info"""
        with Session(engine) as session:
            user = session.query(User).filter_by(id=data['id']).first()

            if not user:
                return "user not found"

            for key, value in data.items():
                setattr(user, key, value)
                session.commit()

    async def delete(self, data: dict):
        """delete user from database"""
        with Session(engine) as session:
            user = session.query(User).filter_by(id=data['id']).first()
            if not user:
                return "user not found"

            session.delete(user)
            session.commit()
            return "user deleted"

    async def get_user_by_id(self, id: int):
        with Session(engine) as session:
            user = session.query(User).filter_by(id=id).first()
            if not user:
                return "user not found"

            return user

    async def get_users(self):
        """get all users"""
        with Session(engine) as session:
            users = session.query(User).all()
            return users


user = User()
