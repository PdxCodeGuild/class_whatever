contacts = []

# contacts = [
#     {line_zero[0]:line_one[0], line_zero[1]:line_one[1], line_zero[2]:line_one[2]},
#     {line_zero[0]:line_two[0], line_zero[1]:line_two[1], line_zero[2]:line_two[2]},
#     {line_zero[0]:line_three[0], line_zero[1]:line_three[1], line_zero[2]:line_three[2]},
#     {line_zero[0]:line_four[0], line_zero[1]:line_four[1], line_zero[2]:line_four[2]}
# ]

with open('contact-list.csv', 'r') as file:
    lines = file.read().split('\n')
    '''
    ['Name,Email,Favorite Color', 'Jane,jane@company.net,red', 'Bob,bob@company.net,blue', 'Jack,jack@company.net,silver', 'Diana,diana@company.net,yellow']
    '''
    # print(lines[0])  # Name,Email,Favorite Color
    # print(lines[1])   # Jane,jane@company.net,red
    # print(type(lines))  # <class 'list'>
    # print(type(lines[0])) # <class 'str'>
    # print(lines[1][0])   # J


    # lines = file.read()
    '''
    Name,Email,Favorite Color
    Jane,jane@company.net,red
    Bob,bob@company.net,blue
    Jack,jack@company.net,silver
    Diana,diana@company.net,yellow
    '''
    
    # print(lines[0])  # N
    # print(lines[1])   # a
    # print(type(lines))  # <class 'str'>
    # print(type(lines[0])) # <class 'str'>
    # print(lines[1][0])   # a


    # print(lines)

"""
-convert the lines of text into a list of dictionaries (one dictionary for each user):
    contacts = [
    {'name':'matthew', 'favorite fruit':'blackberries', 'favorite color':'orange'},
    {'name':'sam', 'favorite fruit':'pineapple' ...}
    ]
-extract each row/line from csv and bring to python
    -index 0 IS the key for each row/line 
-append to dict
"""

#keys = []

line_zero = lines[0].split(',')  # key for each 
line_one = lines[1].split(',')
line_two = lines[2].split(',')   # THESE ARE ALL STRINGS
line_three = lines[3].split(',')
line_four = lines[4].split(',')

contacts.append(line_zero)
contacts.append(line_one)
contacts.append(line_two)
contacts.append(line_three)
contacts.append(line_four)
print(contacts)
'''
[['Name', 'Email', 'Favorite Color'], ['Jane', 'jane@company.net', 'red'], ['Bob', 'bob@company.net', 'blue'], ['Jack', 'jack@company.net', 'silver'], ['Diana', 'diana@company.net', 'yellow']]
'''

# contact_list = {line_one, line_two, line_three, line_four}
# print(contact_list)
# print(line_zero)   # ['Name', 'Email', 'Favorite Color']
# print(line_one)   # ['Jane', 'jane@company.net', 'red']
# print(type(line_one))   # <class 'list'>
# print(line_one[1])   # jane@company.net
# print(line_two[2])
# print(line_three[0])
# print(line_four[1])


# key_one = line_zero[0]
# key_two = line_zero[1]
# key_three = line_zero[2]
'''
name = first_thing
email = second_thing
color = third_thing
'''
# name_one = 
# name_two = 
# name_three = 
# name_four =
# email_one =
# email_two =
# email_three =
# email_four =
# color_one = 
# color_two =
# color_three =
# color_four =


# print(key_one)   # Name
# print(key_two)   # Email
# print(key_three)   # Favorite Color
# print(type(key_one))   # <class 'str'>


def add(dict, key, value):
    if key not in dict:
        dict[key] = []
    dict[key].append(value)

contacts_first = {}
contacts_second = {}
contacts_third = {}
contacts_fourth = {}

add(contacts_first, line_zero[0], line_one[0])
add(contacts_first, line_zero[1], line_one[1])
add(contacts_first, line_zero[2], line_one[2])

add(contacts_second, line_zero[0], line_two[0])
add(contacts_second, line_zero[1], line_two[1])
add(contacts_second, line_zero[2], line_two[2])

add(contacts_third, line_zero[0], line_three[0])
add(contacts_third, line_zero[1], line_three[1])
add(contacts_third, line_zero[2], line_three[2])

add(contacts_fourth, line_zero[0], line_four[0])
add(contacts_fourth, line_zero[1], line_four[1])
add(contacts_fourth, line_zero[2], line_four[2])

contacts.append(contacts_first)
contacts.append(contacts_second)
contacts.append(contacts_third)
contacts.append(contacts_fourth)
# '\n'.join(...)
# print(contacts)
'''
[{'Name': ['Jane'], 'Email': ['jane@company.net'], 'Favorite Color': ['red']}, {'Name': ['Bob'], 'Email': ['bob@company.net'], 'Favorite Color': ['blue']}, {'Name': ['Jack'], 'Email': ['jack@company.net'], 'Favorite Color': ['silver']}, {'Name': ['Diana'], 'Email': ['diana@company.net'], 'Favorite Color': ['yellow']}]
'''

# print(contacts_first)   # {'Name': ['Jane'], 'Email': ['jane@company.net'], 'Favorite Color': ['red']}
# print(contacts_first['Name'])   # ['Jane']

# print(contacts_first[1])

# print(type(contacts_first['Name']))   # <class 'list'>
# print(type(contacts_first))   # <class 'dict'>
name1 = ', '.join(contacts_first['Name'])
# print(name1)   # Jane
# print(type(name1))   # <class 'str'>

# print(contacts_second)   # {'Name': ['Bob'], 'Email': ['bob@company.net'], 'Favorite Color': ['blue']}
# print(contacts_third)   # {'Name': ['Jack'], 'Email': ['jack@company.net'], 'Favorite Color': ['silver']}
# print(contacts_fourth)   # {'Name': ['Diana'], 'Email': ['diana@company.net'], 'Favorite Color': ['yellow']}

# add('line_zero[0]':'line_one[0]', 'line_zero[1]':'line_one[1]', 'line_zero[2]':'line_one[2]')
# add(line_zero[0]:line_two[0], line_zero[1]:line_two[1], line_zero[2]:line_two[2])
# add(line_zero[0]:line_three[0], line_zero[1]:line_three[1], line_zero[2]:line_three[2])
# add(line_zero[0]:line_four[0], line_zero[1]:line_four[1], line_zero[2]:line_four[2])
# print(contacts)


'''
contacts = [
    {line_zero[0]:line_one[0], line_zero[1]:line_one[1], line_zero[2]:line_one[2]},
    {line_zero[0]:line_two[0], line_zero[1]:line_two[1], line_zero[2]:line_two[2]},
    {line_zero[0]:line_three[0], line_zero[1]:line_three[1], line_zero[2]:line_three[2]},
    {line_zero[0]:line_four[0], line_zero[1]:line_four[1], line_zero[2]:line_four[2]}
]

print(contacts)
'''


# contact_list = []
# for line in lines:
#     contact_list.append(line)
#     print(contact_list)

# contact_list = {}
# print(contact_list[lines])
# for line in lines:
#     contact_list.append(line)
#     print(contact_list)


# SHOULD READ AS:
# contact_list = [
#     {'Name':'Jane', 'Email':'jane@company.net', 'Favorite Color':'red'},
#     {'Name':'Bob', 'Email':'bob@company.net', 'Favorite Color':'blue'},
#     {'Name':'Jack', 'Email':'jack@company.net', 'Favorite Color':'silver'},
#     {'Name':'Diana', 'Email':'diana@company.net', 'Favorite Color':'yellow'}
# ]


'''
how to create dictionaries inside a list
'''



'''
Version 2:
-Create a record: ask the user for each attribute, add a new contact to your contact list with the attributes that the user entered.
-Retrieve a record: ask the user for the contact's name, find the user with the given name, and display their information
-Update a record: ask the user for the contact's name, then for which attribute of the user they'd like to update and the value of the attribute they'd like to set.
-Delete a record: ask the user for the contact's name, remove the contact with the given name from the contact list.
'''
# while True:
#     user_input = input("Would you like to Create, Retrieve, Update, or Delete a record, or Finish? (c, r, u, d, f) ")
#     if user_input == 'f':
#         break
#     elif user_input == 'c':
#         create_contact(data, keys)
#     elif user_input == 'r':
#         read_contact(data, keys)
#     elif user_input == 'u':
#         update_contact(data, keys)
#     elif user_input == 'd':
#         delete_contact(data, keys)

'''
Version 3:
When REPL loop finishes, write the updated contact info to the CSV file to be saved. I highly recommend saving a backup contacts.csv because you likely won't write it correctly the first time.
'''
# with open('contact-list.csv', 'w') as file:
#     file.write(data_csv_output)

# with open('contact-list.csv', 'r') as file:
#     lines = file.read().split('\n')