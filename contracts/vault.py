import smartpy as sp

# Main contract
@sp.module
def main():
    class Vault(sp.Contract):
        def __init__(self):
            self.data.balances = {}
            self.data.profile = {}
            self.data.transactions = {}
    
        # Deposit function
        @sp.entry_point
        def deposit(self, params):
            # Initialize the balance if it doesn't exist
            if not self.data.balances.contains(sp.sender):
                self.data.balances[sp.sender] = sp.amount
                self.data.profile[sp.sender] = params.phone_number
            else:
                # Update the balance if it already exists
                self.data.balances[sp.sender] += sp.amount
                self.data.profile[sp.sender] = params.phone_number
    
        # Transfer function
        @sp.entry_point
        def transfer(self, params):
            assert self.data.balances.contains(sp.sender), "Sender not in balances"
            assert self.data.balances[sp.sender] >= sp.amount, "Not enough balance"
            self.data.balances[sp.sender] -= sp.amount
            self.data.transactions[sp.sender] = sp.amount
            if self.data.balances.contains(params.to):
                self.data.balances[params.to] += sp.amount
                self.data.profile[params.to] = params.phone_number
            else:
                self.data.balances[sp.sender] = sp.amount
                self.data.transactions[sp.sender] = sp.amount
    
        # Get transactions function
        @sp.entry_point
        def getTransactions(self):
            assert self.data.transactions.contains(sp.sender), "Sender not in transactions"

        @sp.entry_point
        def getProfile(self):
            assert self.data.profile.contains(sp.sender), "Sender not in profile"

        @sp.entry_point
        def getBalance(self):
            assert self.data.balances.contains(sp.sender), "Sender not in balances"
        
        @sp.entry_point
        def getTransactionsByAddress(self):
            assert self.data.transactions.contains(sp.sender), "Sender not in transactions"
# Tests
@sp.add_test(name = "Vault test")
def test():
    scenario = sp.test_scenario(main)
    scenario.h1("Vault test")

    # Initializing accounts
    admin = sp.test_account("Admin")
    user1 = sp.test_account("User1")
    user2 = sp.test_account("User2")

    # Initializing contract
    c1 = main.Vault()
    scenario += c1

    # Deposit
    scenario.h2("Deposit")
    c1.deposit(phone_number = 33694033344).run(sender = user1, amount = sp.tez(1))

    # Transfer
    scenario.h2("Transfer")
    c1.transfer(phone_number = 33694033344, to = user2.address).run(sender = user1, amount = sp.tez(1))

    # Get transactions
    scenario.h2("Get transactions")
    c1.getTransactions().run(sender = user1.address)

    # Get profile
    scenario.h2("Get profile")
    c1.getProfile().run(sender = user1.address)

    # Get balance
    scenario.h2("Get balance")
    c1.getBalance().run(sender = user1.address)

    # Get transactions by number
    scenario.h2("Get transactions by Address")
    c1.getTransactionsByAddress().run(sender = user1.address)