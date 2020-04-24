
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

        self.funds=0

        self.legacy = []

        print("Ohayou!!!")

# *dead code*

# def main():
#    accounts = []
#    for i in range(1000, 9999):
#        account = Account(i, 0)
#        accounts.append(account)

    def deposit(self): 

        amount = float(input("Deposit: ")) 

        self.funds += amount 

        y = print("Deposit:", amount)

        self.legacy.append("Deposit:")

        self.legacy.append(amount)
  
    def withdraw(self): 

        amount = float(input("Withdrawal: ")) 

        if self.funds>=amount: 

            self.funds-=amount

            self.legacy.append("Withdrawal:")

            self.legacy.append(amount)

            print("Withdrawal", amount)

        else: 

            z = print("\n Insufficient funds")

            self.history.append(amount)

# account_balance = 100
# account_number = input("Enter in your account number: ")
# print ('Balance: '),account_balance
# while (choice== 1 or choice==2):

    def archive(self):

        print("Net funds=",self.funds)
        
        print(self.legacy)

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

x = Account()

while True: 

    # *dead code*

    #    id = int(input("\nEnter account pin: "))
 
    #    while id < 1000 or id > 9999:
    #        id = int(input("\nInvalid Id.. Re-enter: "))

    prompt = input("What would you like to do(deposit, withdraw, archive)?")
        
    if prompt=="deposit":

        x.deposit()

        x.archive()

    elif prompt=="withdraw":

        x.withdraw()

        x.archive()

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

    elif prompt=="archive":

        x.archive()
  

