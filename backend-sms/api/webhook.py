from flask import Flask, request, jsonify
import requests
import json
from pytezos import pytezos
import os
import dotenv

dotenv.load_dotenv()

api_key = os.getenv("API_KEY")
phone_number = os.getenv("PHONE_NUMBER")

app = Flask(__name__)

# Dictionary to store phone numbers and their corresponding Tezos keys
phone_keys = {
    "+33781299182": "edsk3NPR7bkky9w6DazuQtRwp9Arx4yxZDGWSqyhs7VkEPGMoDQb2w"
}

sms_url = 'https://api.httpsms.com/v1/messages/send'
headers = {
    'x-api-key': api_key,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

def send_sms(to, content):
    payload = {
        "content": content,
        "from": phone_number,
        "to": to
    }
    response = requests.post(sms_url, headers=headers, data=json.dumps(payload))
    return response.json()

@app.route('/webhook', methods=['POST'])
def sms_webhook():
    data = request.json
    phone_number = data['from']
    content = data['content'].split()[0]  # Taking the first word of the content for command matching

    # Action based on the received content using a switch-like structure
    actions = {
        "start": start_action,
        "create": create_action,
        "withdraw": withdraw_action,
        "transactions": transactions_action,
        "transfer": transfer_action,
    }

    if content == "deposit":
        amount = float(data['content'].split()[1])
        deposit_action(phone_number, amount)
    elif content in actions:
        action = actions.get(content, default_action)
        action(phone_number)
    else:
        default_action(phone_number)

    return jsonify({'status': 'receive'}), 200

def start_action(phone_number):
    send_sms(phone_number, f"""Your Account Balance: 23 tz \n
        Available Commands: \n
        \t create \n
        \t deposit <amount> \n
        \t withdraw <amount> \n
        \t transfer <amount> <recipient> \n
        \t transactions \n
    """)


def create_action(phone_number):
    if phone_number not in phone_keys:
        key = pytezos.key.generate()
        phone_keys[phone_number] = key.secret_key()
        send_sms(phone_number, f"Your Tezos address is: {key.public_key_hash()}")

def withdraw_action(phone_number):
    # Implementation for withdraw action goes here
    pass

def transactions_action(phone_number):
    # Implementation for transactions action goes here
    pass

def transfer_action(phone_number):
    # Implementation for transfer action goes here
    pass

def deposit_action(phone_number,amount):
    
    tezos_price = fetch_tezos_price_in_usd()
    if tezos_price:
        amount_in_tezos = amount / tezos_price
        # Fetch the public address associated with the phone number
        key = pytezos.key.Key(phone_keys[phone_number])
        public_address = key.public_key_hash()
        
        send_sms(phone_number, f"Deposit ${amount} to get {amount_in_tezos:.2f} Tezos in the address: {public_address}.")
    else:
        send_sms(phone_number, "Failed to fetch Tezos price. Please try again later.")


def default_action(phone_number):
    send_sms(phone_number, "Send 'start' to launch the application")

def fetch_tezos_price_in_usd():
    try:
        response = requests.get('https://api.coingecko.com/api/v3/simple/price?ids=tezos&vs_currencies=usd')
        data = response.json()
        return data['tezos']['usd']
    except Exception as e:
        print(f"Error fetching Tezos price: {e}")
        return None

if __name__ == '__main__':
    app.run(port=5000)
