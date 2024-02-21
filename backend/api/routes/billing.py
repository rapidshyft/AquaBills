from flask import Blueprint, jsonify, request
from core.billing import Billing

billing_bp = Blueprint('billing', __name__)


@billing_bp.route('/create_bill', methods=['POST'])
def create_bill():
    try:
        # Get data from request
        data = request.get_json()
        customer_id = data.get('customer_id')
        water_usage = data.get('water_usage')
        price_per_cubic_meter = data.get('price_per_cubic_meter')
        fixed_charges = data.get('fixed_charges')

        # Create billing document
        response = Billing.create_bill(customer_id, water_usage, price_per_cubic_meter, fixed_charges)

        # Return success message
        return jsonify(response), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@billing_bp.route('/billing_records', methods=['GET'])
def get_billing_records():
    try:
        # Fetch billing records from the database
        billing_records = Billing.get_billing_records()  # Implement this method in your Billing class

        # Return JSON response
        return jsonify(billing_records), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
