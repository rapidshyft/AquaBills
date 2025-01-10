"""project configuration"""
import os

from dotenv import load_dotenv

# Load environment variables
try:
    load_dotenv()
except FileNotFoundError:
    print("No .env file found. Ignore if you are using a production bot")


POSTGRES_URL = os.getenv("POSTGRES_URL")