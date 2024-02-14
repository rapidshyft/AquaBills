import secrets
import string


class User:
    user_id = None

    def __init__(self):
        self.user_id = self.generate_unique_id()

    @staticmethod
    def generate_unique_id(length=8):
        alphabet = string.ascii_letters + string.digits
        unique_id = ''.join(secrets.choice(alphabet) for _ in range(length))
        return unique_id
