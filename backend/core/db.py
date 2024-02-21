import os
from appwrite.client import Client
from appwrite.services.databases import Databases
from dotenv import load_dotenv

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
billing_collection_id = os.getenv('APPWRITE_BILLING_COLLECTION_ID')
databases = Databases(client)
