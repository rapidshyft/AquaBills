from flask import Blueprint, jsonify, request
from core.user import UserHandler

user_bp = Blueprint('user', __name__)


@user_bp.route('/api/create_user', methods=['POST'])
def handle_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    govt_id = data.get('govtId')
    address = data.get('address')

    try:
        response = UserHandler.create_user(name, email, govt_id, address)
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
