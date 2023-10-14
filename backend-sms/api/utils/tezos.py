from pytezos import pytezos

key = pytezos.key.generate()
print(key.secret_key())