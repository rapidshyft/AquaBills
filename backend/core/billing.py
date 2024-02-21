from datetime import datetime

from core.db import databases, billing_collection_id, customers_collection_id, database_id
from models.user import User


class Billing:
    @staticmethod
    def create_bill(customer_id, water_usage, price_per_cubic_meter, fixed_charges):
        new_user = User()
        user_id = new_user.user_id
        try:
            # Retrieve the customer's information including the meter number
            customer_info = databases.get_document(
                database_id=database_id,
                collection_id=customers_collection_id,
                document_id=customer_id
            )
            meter_number = customer_info.get('meter_number', '')  # Get the meter number from customer info
            customer_name = customer_info.get('name', '')

            # Calculate the total amount
            total_amount = int(water_usage * price_per_cubic_meter + fixed_charges)

            # Store the billing information along with the customer ID and meter number
            response = databases.create_document(
                database_id=database_id,
                collection_id=billing_collection_id,
                document_id=user_id,
                data={
                    'customer': customer_id,
                    'name': customer_name,
                    'meter_number': meter_number,
                    'water_usage': str(water_usage),
                    'price_per_cubic_meter': str(price_per_cubic_meter),
                    'fixed_charges': str(fixed_charges),
                    'total_amount': str(total_amount),
                    'created_at': str(datetime.utcnow())
                }
            )
            return response
        except Exception as e:
            raise e

    @staticmethod
    def get_billing_records():
        try:
            users_documents = databases.list_documents(
                database_id=database_id,
                collection_id=billing_collection_id
            )
            return users_documents
        except Exception as e:
            raise e
