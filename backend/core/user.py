from core.db import databases, database_id, customers_collection_id
from core.meter_number import generate_meter_number
from models.customer import User


class UserHandler:

    @staticmethod
    def create_user(name, email, phone_number, govt_id, meter_number, house_number, town, city, country, status):
        try:
            new_user = User()
            user_id = new_user.user_id
            address = [house_number, town, city, country]
            char = city[0]

            if meter_number is None or meter_number == '':
                meter_number = generate_meter_number(char)
            else:
                pass

            if status is None or status == '':
                status = 'Active'

            response = databases.create_document(
                database_id=database_id,
                collection_id=customers_collection_id,
                data={
                    'name': name,
                    'email': email,
                    'govt_id': phone_number,
                    'phone_number': govt_id,
                    'meter_number': meter_number,
                    'address': address,
                    'status': status
                },
                document_id=user_id,
            )
            return response
        except Exception as e:
            raise e

    @staticmethod
    def get_users():
        try:
            users_documents = databases.list_documents(
                database_id=database_id,
                collection_id=customers_collection_id
            )
            return users_documents
        except Exception as e:
            raise e

    @staticmethod
    def delete_users(user_ids):
        try:
            responses = []
            for user_id in user_ids:
                response = databases.delete_document(
                    database_id=database_id,
                    collection_id=customers_collection_id,
                    document_id=user_id
                )
                responses.append(response)
            return responses
        except Exception as e:
            raise e

    @staticmethod
    def edit_user(user_id, updated_data):
        try:
            response = databases.update_document(
                database_id=database_id,
                collection_id=customers_collection_id,
                document_id=user_id,
                data=updated_data
            )
            return response
        except Exception as e:
            raise e
