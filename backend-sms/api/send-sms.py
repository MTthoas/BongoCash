import requests
import json
import os
import dotenv

dotenv.load_dotenv()

api_key = os.getenv("API_KEY")

url = 'https://api.httpsms.com/v1/messages/send'

headers = {
    'x-api-key': api_key,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

payload = {
    "content": "Hello World!",
    "from": "+33670210556", # This is the phone number of your android phone */
    "to": "+33781299183" # This is the recipient phone number */
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(json.dumps(response.json(), indent=4))