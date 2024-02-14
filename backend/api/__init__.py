from flask import Flask
from flask_cors import CORS

from api.routes.user import user_bp


def run_app():
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(user_bp)
    return app
