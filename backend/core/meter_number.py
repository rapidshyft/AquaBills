import random
import string


def generate_meter_number(char):
    letters = string.ascii_uppercase
    numbers = ''.join(random.choice(string.digits) for _ in range(3))
    return f'{char[0]}M' + ''.join(random.choice(letters) for _ in range(1)) + numbers

