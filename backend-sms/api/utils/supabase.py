from supabase import create_client
import os
import dotenv

supabase = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_KEY")
)

def insert_user(phone_number, public_key, private_key):
    supabase.table('users').insert([
        {'phone_number': phone_number, 'user_public_key': public_key, 'user_private_key': private_key}
    ]).execute()

def insert_transaction(phone_number, amount, transaction_type):
    supabase.table('transactions').insert([
        {'phone_number': phone_number, 'amount': amount}
    ]).execute()

def get_transactions(phone_number):
    return supabase.table('transactions').select('*').eq('phone_number', phone_number).execute()

