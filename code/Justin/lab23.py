with open('contacts.csv', 'r') as file:
    lines = file.read().split('\n')
    print(lines)

    Justin = lines[2]
    Billy = lines[3]
    James = lines[4]
    Pickles = lines[5]
    # Pinnochio = lines[6]
    print(Justin)

    contacts = []

    for line in range(len(lines)):
        key_value = lines[0]
        key_value = key_value.split(",")
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

    def new_contact():
        user_input = [input("What is your name?"),input("Favorote fruit?"), input("Favorite color?")]
        newcontact = dict(zip(key_value, user_input))
        contacts.append(newcontact)
        export()

    def retrieve_info():

        user_input = input("What is your name?")

        user_input_two = {'Justin': "Pineapple", 'Billy': "Apple", 'James': "Orange", "Pickles": "Peach", "Pinnochio": "Apricot"}

        user_input_three = {"Justin": "Orange", "Billy": "Red", "James": "Blue", "Pickles": "Pink", "Pinnochio": "Green"}

        # if user_input in user_input_two:
        #     print(str(user_input_two[user_input] + (" ") + user_input_three[user_input]))

    def change_info():

        input("Would you like to change their info?")

        user_input = input("What is their name?")

        user_input_two = input("What is their favorite fruit?")

        user_input_three = input("What is their favorite color?")

        export()

    def remove_user():
        del lines[2]
        print(lines[2])
        export()

# def convert_to_list()

# new_contact = {(key_value: user_input), (key_value: user_input), (key_value: user_input)}
# d1.items()
# dict_items([(key_value: user_input), (key_value: user_input), (key_value: user_input)])
# l1 = list(d1.items())
# l1
# [(key_value: user_input), (key_value: user_input), (key_value: user_input)]
# d1.keys()
# dict_keys([key_value, key_value, key_value])
#  l2 = list(d1.keys())
# l2
# [user_input, user_input, user_input]
# l3 = list(d1.values())
# l3
# ['Ravi', 23, 56]

# dict_one = contacts.keys()
# print(dict_one)

remove_user()
export()
    