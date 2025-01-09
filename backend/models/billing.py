from datetime import datetime

from sqlalchemy import Integer, DateTime, String, Float, ForeignKey
from sqlalchemy.orm import mapped_column, Mapped

from models.base import Base


class Invoice(Base):
    __tablename__ = 'Invoice'
    id: Mapped[int] = mapped_column(Integer(), primary_key=True, autoincrement=True)
    customer_id: Mapped[int] = mapped_column(ForeignKey('Customer.id'), nullable=False)
    date: Mapped[datetime] = mapped_column(DateTime(), nullable=False)
    billing_address: Mapped[str] = mapped_column(String(60), nullable=False)
    billing_city: Mapped[str] = mapped_column(String(60), nullable=False)
    billing_state: Mapped[str] = mapped_column(String(60), nullable=False)
    billing_country: Mapped[str] = mapped_column(String(60), nullable=False)
    billing_postal_code: Mapped[str] = mapped_column(String(60), nullable=False)
    total: Mapped[float] = mapped_column(Float(), nullable=False)

    def __repr__(self):
        return f"<Invoice(id={self.id!r}, customer_id={self.customer_id!r})>, date={self.date!r}, total={self.total!r}"