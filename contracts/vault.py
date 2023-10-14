# Project name: TBD
# Made by: Snails Team (Djason G., Elia, Yacine A., Yassine O., Hamza M.)

import smartpy as sp

# A vault is a contract that holds a balance of tez that can deposit, transfer, getTransactions
# We store user balance, phone number and wallet address
def main():
    class Vault(sp.Contract):
        def __init__(self, initial_balance = 200000):
            self.init(
                balance = initial_balance, 
                transactions = sp.big_map(
                        tvalue = sp.TRecord(phone = sp.TNat, wallet = sp.TAddress, amount = sp.TNat),
                )

        # Deposit tez into the vault
        @sp.entry_point
        def deposit(self):
            sp.verify(sp.amount > 0 and sp.amount <= )
            self.data.balance += sp.amount


        # Transfer tez from the vault to a wallet
        @sp.entry_point
        def transfer(self, params):
            sp.verify(self.data.balance >= params.amount)
            sp.send(params.wallet, params.amount)
            self.data.balance -= params.amount

        # Get transactions from the vault
        @sp.entry_point
        def getTransactions(self, params):
            sp.result(self.data.transactions[params.phone])

        # Get balance from the vault
        @sp.entry_point
        def getBalance(self):
            sp.result(self.data.balance)

if "templates" not in __name__:
    @sp.add_test(name = "User Simulation")
    def test():
        scenario = sp.test_scenario()
        scenario.h1("User Simulation")

        # Create a vault contract
        vault = Vault()
        scenario += vault

        # Deposit 10 tez into the vault
        scenario.h2("Deposit 10 tez into the vault")
        scenario += vault.deposit().run(amount = sp.tez(10))

        # Transfer 5 tez from the vault to a wallet
        scenario.h2("Transfer 5 tez from the vault to a wallet")
        scenario += vault.transfer(wallet = sp.address("tz1..."), amount = sp.tez(5)).run(sender = sp.address("tz1..."))

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.getTransactions(phone = 33670210556).run(sender = sp.address("tz1..."))

        # Get balance from the vault
        scenario.h2("Get balance from the vault")
        scenario += vault.data.balance

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.data.transactions

        # Get balance from the vault
        scenario.h2("Get balance from the vault")
        scenario += vault.data.balance

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.data.transactions

        # Get balance from the vault
        scenario.h2("Get balance from the vault")
        scenario += vault.data.balance

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.data.transactions

        # Get balance from the vault
        scenario.h2("Get balance from the vault")
        scenario += vault.data.balance

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.data.transactions

        # Get balance from the vault
        scenario.h2("Get balance from the vault")
        scenario += vault.data.balance

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.data.transactions

        # Get balance from the vault
        scenario.h2("Get balance from the vault")
        scenario += vault.data.balance

        # Get transactions from the vault
        scenario.h2("Get transactions from the vault")
        scenario += vault.data.transactions

# Path: contracts/phone.py