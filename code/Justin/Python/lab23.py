    # Alternate path
    
    # global list
    # list = {}

    # print "name: ",

    # contact_name = raw_input()

    # print "input number: ",

    # contact_number = input()

    # list.update({contact_name:contact_number})


with open('/Users/pizzaboynizza/PycharmProjects/class_whatever/code/Justin/Python/contacts copy.csv', 'r') as file:
    # lines = file.read().split('\n')

    data = file.read()

    lines = data.split('\n')

    data = []

    for x in lines:

        data.append(x.split(','))

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

    data = [dict(zip(keys, y)) for y in data[1::]]

    contact_list = []

    for x in range(len(lines)):

        value = lines[0]

        value = value.split(",")

        y = lines[x]

        y = y.split(",")

        y = dict(zip(value, y))

        contact_list.append(y)

    print(contact_list) #this makes your actual dictionary

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

        global contact_list

        list_w = []

        contact_list[0].values()

        list(contact_list[0].values()) 

        list(contact_list[0].values())

        contact_list[0].keys()

        ",".join(contact_list[0].keys())

        ",".join(contact_list[0].values())

        # *dead code*

#         def contacts():
#   if len(contactListName) <= 0:
#     homeScreen()
#   if len(contactListName) > 0:
#     print("Name: )
#     print("Phone Number: )
#     print("Email:)


        for x in range(len(contact_list)):

            list_w.append(",".join(contact_list[x].values()))

            '\n'.join(list_w)

            # row = lines[line]
            # key_value = key_value.join(",")
            # key_value = lines[0]
            # contacts.append(row)
            
            

        with open('/Users/pizzaboynizza/PycharmProjects/class_whatever/code/Justin/Python/contacts copy.csv', 'w') as contact_list:

            contact_list.write("\n".join(list_w))

    # contacts = [
    # {'name':'matthew', 'favorite fruit':'blackberries', 'favorite color':'orange'},
    # {'name':'sam', 'favorite fruit':'pineapple' ...}


    def create():

        prompt = [input("What is your name?"),input("Favorite fruit?"), input("Favorite color?")]

        new = dict(zip(value, prompt))

        contact_list.append(new)

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

        for x in contact_list:
            if x['name'] == prompt:
                print(x)

    # *too complex*

    #     def SubmitData():
    # if  FIRSTNAME.get() == "" or LASTNAME.get() == "" or GENDER.get() == "" or AGE.get() == "" or ADDRESS.get() == "" or CONTACT.get() == "":
    #     result = tkMessageBox.showwarning('', 'Please Complete The Required Field', icon="warning")
       
    def update():

        prompt = input("Which contact?")
        target = input("What do you want to update?")
        prompt_two = input("With what?")
        for x in contact_list:
            if x['name'] == prompt:
                print(x)
                if target in x:     
                    x[target] = prompt_two
                    return x
        print(x)

    def delete():

        prompt = input("Which contact?")
        for x in contact_list:
            if x['name'] == prompt:
             contact_list.remove(x)

# csv_txt = """fname,lname,phone,fax,notes
# Possible template

while True:
    prompt = input("create, read, update, delete, quit?")
    if prompt == 'quit':
        print("done")
        export()
        break

# def last():
#     two = input("Name ")
#     a = two[1:10]
#     b = two[0]
#     return b.upper() + a

    # template

    elif prompt == 'create':
        create()

    elif prompt == 'read':
        read()

    elif prompt == 'update':
        update()

    elif prompt == 'delete':
        delete()

    