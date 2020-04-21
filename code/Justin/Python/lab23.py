    # Alternate path
    
    # global list
    # list = {}

    # print "name: ",

    # contact_name = raw_input()

    # print "input number: ",

    # contact_number = input()

    # list.update({contact_name:contact_number})


with open('/Users/pizzaboynizza/PycharmProjects/class_whatever/code/Justin/Python/contacts.csv', 'r') as file:
    # lines = file.read().split('\n')
    data = file.read()
    lines = data.split('\n')
    data = []
    for line in lines:
        data.append(line.split(','))

# import csv
# import String

# content = csv.reader( StringIO.StringIO(csv_txt))
# headings = content.next()
# print [dict((headings[col], row[col]) for col in xrange(len(row))) 
#        for row in content]

  # print "Contact created \n\nWould you like to make more contacts or check current contacts? \nTo make new contacts type in 'New' \nTo check current contacts type in 'Contacts'"

    # print "Go to: ",
    
    # choose = ""
    # choose = input()
    # valid = False
    # while(not valid):
    #     if choose == "'New'" or choose == "'new'" or choose == "New" or choose == "new":
    #         new_function()
    #     elif choose == "'Contacts'" or choose == "'contacts'" or choose == "Contacts" or choose == "contacts":
    #         contacts_function()

    keys = data[0]

    data = [dict(zip(keys, row)) for row in data[1::]]

    contacts = []

    for line in range(len(lines)):
        value = lines[0]
        value = value.split(",")
        row = lines[line]
        row = row.split(",")
        row = dict(zip(value, row))
        contacts.append(row)
    print(contacts) #this makes your actual dictionary

# *dead code*

#     def homeScreen():
#   global userInput
#   if len(contactListName) <= 0:
#     print("No contacts")
#     print("add")
#   elif len(contactListName) > 0:
#     print("You currently have", len(contacts, "contact(s)")
#     print("add'")
#     print("view")
#     print("delete")
#     print("search")
#     print("menu")

    def export():
        global contacts
        list_w = []
        contacts[0].values()
        list(contacts[0].values()) 
        list(contacts[0].values())
        contacts[0].keys()
        ",".join(contacts[0].keys())
        ",".join(contacts[0].values())

        # *dead code*

#         def contacts():
#   if len(contactListName) <= 0:
#     homeScreen()
#   if len(contactListName) > 0:
#     print("Name: )
#     print("Phone Number: )
#     print("Email:)


        for contact in range(len(contacts)):
            list_w.append(",".join(contacts[contact].values()))
            '\n'.join(list_w)
            # row = lines[line]
            # key_value = key_value.join(",")
            # key_value = lines[0]
            # contacts.append(row)
            
            

        with open('/Users/pizzaboynizza/PycharmProjects/class_whatever/code/Justin/Python/contacts.csv', 'w') as contacts:
            contacts.write("\n".join(list_w))

    # contacts = [
    # {'name':'matthew', 'favorite fruit':'blackberries', 'favorite color':'orange'},
    # {'name':'sam', 'favorite fruit':'pineapple' ...}


    def create():
        prompt = [input("What is your name?"),input("Favorite fruit?"), input("Favorite color?")]
        newcontact = dict(zip(value, user_input))
        contacts.append(prompt)

    # *dead code*

    # if len(contactListName) > 0:
    # while True:
    #   userInput = input("Please type a listed command:")
    #   userInput = userInput.lower()
    #   if userInput == "add" or "contacts" or "delete" or "search" or "menu":
    #     break
    #   else:
    #     print("Please try again.")

    def read():

        prompt = input("Which contact?")
        for contact in contacts:
            if contact['name'] == prompt:
                print(contact)

    # *too complex*

    #     def SubmitData():
    # if  FIRSTNAME.get() == "" or LASTNAME.get() == "" or GENDER.get() == "" or AGE.get() == "" or ADDRESS.get() == "" or CONTACT.get() == "":
    #     result = tkMessageBox.showwarning('', 'Please Complete The Required Field', icon="warning")
       
    def update():

        prompt = input("Which contact?")
        attribute = input("What do you want to update?")
        prompt_two = input("With what?")
        forx in contacts:
            if contact['name'] == user_input:
                print(contact)
                if attribute in contact:     
                    contact[attribute] = user_input_two
                    return contact
        print(x)

    def delete():

        prompt = input("Which contact?")
        for contact in contacts:
            if contact['name'] == prompt:
             contacts.remove(contact)

# csv_txt = """fname,lname,phone,fax,notes
# Possible template

while True:
    user_input = input("create, read, update, delete, quit?")
    if user_input == 'quit':
        print("done")
        export()
        break

# def last():
#     two = input("Name ")
#     a = two[1:10]
#     b = two[0]
#     return b.upper() + a

    # template

    elif user_input == 'create':
        create_contact()
    elif user_input == 'read':
        read_contact()
    elif user_input == 'update':
        update_contact()
    elif user_input == 'delete':
        delete_contact()

    