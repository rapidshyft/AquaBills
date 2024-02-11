import os
from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID
from dotenv import load_dotenv

from models.user import User

load_dotenv()

APPWRITE_ENDPOINT = os.getenv('APPWRITE_ENDPOINT')
APPWRITE_PROJECT_ID = os.getenv('APPWRITE_PROJECT_ID')
APPWRITE_API_KEY = os.getenv('APPWRITE_API_KEY')

client = Client()
client.set_endpoint(APPWRITE_ENDPOINT)
client.set_project(APPWRITE_PROJECT_ID)
client.set_key(APPWRITE_API_KEY)

database_id = os.getenv('APPWRITE_DATABASE_ID')
customers_collection_id = os.getenv('APPWRITE_CUSTOMERS_COLLECTION_ID')
databases = Databases(client)


class Database:

    def __init__(self):
        pass

    @staticmethod
    def create_user():
        new_user = User()
        user_id = new_user.user_id
        customer = {
            "user_id": user_id,
            "name": "lwazi",
            "email": "lwazincubex@gmail",
            "govt_id": "1234",
            "address": "1235 street"
        }

        databases.create_document(
            database_id=database_id,
            collection_id=customers_collection_id,
            document_id=user_id,
            data=customer
        )


