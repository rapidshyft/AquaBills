from core.db import databases, database_id, customers_collection_id
from models.user import User


class UserHandler:

    @staticmethod
    def create_user(name, email, govt_id, address):
        try:
            new_user = User()
            user_id = new_user.user_id
            response = databases.create_document(
                database_id=database_id,
                collection_id=customers_collection_id,
                data={
                    'name': name,
                    'email': email,
                    'govt_id': govt_id,
                    'address': address
                },
                document_id=user_id,
            )
            return response
        except Exception as e:
            raise e

    @staticmethod
    def get_users():
        new_user = User()
        user_id = new_user.user_id

        users_documents = databases.list_documents(
            database_id=database_id,
            collection_id=customers_collection_id
        )
        print(users_documents)