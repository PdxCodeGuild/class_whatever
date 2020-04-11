    # Alternate path
    
    # global list
    # list = {}

    # print "name: ",

    # contact_name = raw_input()

    # print "input number: ",

    # contact_number = input()

    # list.update({contact_name:contact_number})


with open('contacts.csv', 'r') as file:
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

    for line in range(len(csv_lines)):
        value = lines[0]
        value = value.split(",")
        row = lines[line]
        row = row.split(",")
        row = dict(zip(key_value, row))
        contacts.append(row)
    print(contacts) #this makes your dict

    def export():
        global contacts
        list_w = []
        contacts[0].values()
        list(contacts[0].values()) 
        list(contacts[0].values())
        contacts[0].keys()
        ",".join(contacts[0].keys())
        ",".join(contacts[0].values())


        for contact in range(len(contacts)):
            list_w.append(",".join(contacts[contact].values()))
            '\n'.join(list_w)
            # row = lines[line]
            # key_value = key_value.join(",")
            # key_value = lines[0]
            # contacts.append(row)
            
            

        with open('contacts.csv', 'w') as contacts:
            contacts.write("\n".join(list_w))

    # contacts = [
    # {'name':'matthew', 'favorite fruit':'blackberries', 'favorite color':'orange'},
    # {'name':'sam', 'favorite fruit':'pineapple' ...}


    def create_contact():
        user_input = [input("What is your name?"),input("Favorite fruit?"), input("Favorite color?")]
        new_contact = dict(zip(key_value, user_input))
        contacts.append(newcontact)

    def read_contact():

        user_input = input("Which contact?")
        for contact in contacts:
            if contact['name'] == user_input:
                print(contact)
       
    def update_contact():

        user_input = input("Which contact?")
        attribute = input("What do you want to update?")
        user_input_two = input("With what?")
        for contact in contacts:
            if contact['name'] == user_input:
                print(contact)
                if attribute in contact:     
                    contact[attribute] = user_input_two
                    return contact
        print(contact)

    def delete_contact():

        user_input = input("Which contact?")
        for contact in contacts:
            if contact['name'] == user_input:
             contacts.remove(contact)

# csv_txt = """fname,lname,phone,fax,notes
# Possible template

while True:
    user_input = input("create, read, update, delete, quit?")
    if user_input == 'quit':
        print("done")
        export()
        break

    # template

    elif user_input == 'create':
        create_contact()
    elif user_input == 'read':
        read_contact()
    elif user_input == 'update':
        update_contact()
    elif user_input == 'delete':
        delete_contact()

    