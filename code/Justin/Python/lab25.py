
# name=input("What is yor name? ")
# current_balance=float(input("What is your current balance? "))

# def Menu():
#     print(name,"Welcome to the Bank of Beaucoup")
#     print("Enter balance, deposit, withdraw, or quit")

# def Transaction():
#     transaction=str(input("What would you like to do? "))
#     return transaction

# def withdraw(balance, amount):
#     global balance
#     balance=bal-amt

#         amount=float(input("Amount to withdraw? "))
#         withdraw(balance,amount)
#         printMenu()
#         command=str(getTransaction())
#     else:
#         print("WRONG!!!.")
#         printMenu()
#         command=str(getTransaction())

# print(name,"I miss you already!")

class Account: 
    def __init__(self): 
        self.balance=0
        self.history = []
        print("Ohayou!!!")

# *dead code*

# def main():
#    accounts = []
#    for i in range(1000, 9999):
#        account = Account(i, 0)
#        accounts.append(account)

    def deposit(self): 
        amount = float(input("Deposit: ")) 
        self.balance += amount 
        output_one = print("Deposit:", amount)
        self.history.append("Deposit:")
        self.history.append(amount)
  
    def withdraw(self): 
        amount = float(input("Withdrawal amount: ")) 
        if self.balance>=amount: 
            self.balance-=amount
            self.history.append("Withdrawal:")
            self.history.append(amount)
            print("Withdrawal", amount)
        else: 
            output_two = print("\n Insufficient balance")
            self.history.append(amount)

# account_balance = 100
# account_number = input("Enter in your account number: ")
# print ('Balance: '),account_balance
# while (choice== 1 or choice==2):

    def check_transactions(self): 
        print("Net balance=",self.balance)
        print(self.history)

# choice =float(input("Deposit, Withdraw, or Exit: "))
# balance = getBalance(choice, balance)
# #print total amount
# print ('Balance: '),account_balance

# printMenu()

# command=str(getTransaction())

# while command!="q":
#     if (command=="b"):
#         print(name,"Your current balance is",formatCurrency(balance))
#         printMenu()
#         command=str(getTransaction())
#     elif (command=="d"):
#         amount=float(input("Amount to deposit? "))
#         balance=balance+amount
#         printMenu()
#         command=str(getTransaction())
#     elif (command=="w"):

a = Account()

while True: 

    # *dead code*

    #    id = int(input("\nEnter account pin: "))
 
    #    while id < 1000 or id > 9999:
    #        id = int(input("\nInvalid Id.. Re-enter: "))

    prompt = input("What would you like to do(deposit, withdraw, check transactions)?")
        
    if prompt=="deposit":
        a.deposit()
        a.check_transactions()

    elif prompt=="withdraw":
        a.withdraw()
        a.check_transactions()

    # *dead code*

        # elif selection == 2:
        #        amt = float(input("withdraw: "))
        #        ver_withdraw = input("Is this the correct amount? " + str(amt) + " ")
 
        #        if ver_withdraw == "Yes":
        #            print("Verify withdraw")
        #        else:
        #            break
 
        #        if amt < accountObj.getBalance():
        #           accountObj.withdraw(amt)
        #           print("\nUpdated Balance: " + str(accountObj.getBalance()) + " n")

    elif prompt=="check transactions":
        a.check_transactions()
  

