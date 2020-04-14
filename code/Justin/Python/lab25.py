
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
        print("Hello!!!")



    def deposit(self): 
        amount = float(input("Enter amount to be Deposited: ")) 
        self.balance += amount 
        output_one = print("Deposit:", amount)
        self.history.append("Deposit:")
        self.history.append(amount)
  
    def withdraw(self): 
        amount = float(input("Withdrawal: ")) 
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
        print("Net Available Balance=",self.balance)
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

    user_input = input("What would you like to do(deposit, withdraw, check transactions)?")
        
    if user_input=="deposit":
        a.deposit()
        a.check_transactions()

    elif user_input=="withdraw":
        a.withdraw()
        a.check_transactions()

    elif user_input=="check transactions":
        a.check_transactions()
  

