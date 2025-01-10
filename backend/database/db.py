"""postgres database module."""
from sqlalchemy import create_engine, text, Column, Integer, String
from sqlalchemy.orm import declarative_base,  sessionmaker

from config import POSTGRES_URL
from models.base import Base

# Create an engine. Adjust the URL if needed.
engine = create_engine(POSTGRES_URL)

session = sessionmaker(bind=engine)
