from flask import Blueprint, jsonify, request
from core.user import UserHandler

user_bp = Blueprint('user', __name__)


@user_bp.route('/api/create_user', methods=['POST'])
def handle_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    govt_id = data.get('govtId')
    phone_number = data.get('phone_number')
    meter_number = data.get('meter_number')
    house_number = data.get('house_number')
    town = data.get('town')
    city = data.get('city')
    country = data.get('country')
    status = data.get('status')

    try:
        response = UserHandler.create_user(name, email, govt_id, phone_number,
                                           meter_number, house_number, town, city, country, status)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@user_bp.route('/api/list_users', methods=['GET'])
def list_users():
    try:
        users = UserHandler.get_users()
        return jsonify(users)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@user_bp.route('/api/delete_selected_users', methods=['DELETE'])
def delete_selected_users():
    try:
        data = request.json
        user_ids = data.get('ids', [])
        response = UserHandler.delete_users(user_ids)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@user_bp.route('/api/edit_user/<user_id>', methods=['PUT'])
def edit_user(user_id):
    data = request.json
    try:
        response = UserHandler.edit_user(user_id, data)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

