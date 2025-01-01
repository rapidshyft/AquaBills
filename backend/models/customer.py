from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from models.base import Base


class Customer(Base):
    __tablename__ = 'Customer'

    id: Mapped[int] = mapped_column(Integer(), primary_key=True, autoincrement=True, nullable=False)
    first_name: Mapped[str] = mapped_column(String(40), nullable=False)
    last_name: Mapped[str] = mapped_column(String(40), nullable=False)
    address: Mapped[str] = mapped_column(String(60), nullable=False)
    city: Mapped[str] = mapped_column(String(40), nullable=False)
    state: Mapped[str] = mapped_column(String(40))
    country: Mapped[str] = mapped_column(String(40), nullable=False)
    postal_code: Mapped[str] = mapped_column(String(10))
    phone: Mapped[str] = mapped_column(String(15), nullable=False)
    email: Mapped[str] = mapped_column(String(60))

    def __repr__(self) -> str:
        return f"Customer(id={self.id}, first_name={self.first_name}, last_name={self.last_name}"
