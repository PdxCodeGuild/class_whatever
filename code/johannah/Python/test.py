# This is my file for testing basics to ensure understanding


'''
def say_hello(first_name, last_name):
    print('Hello ' + first_name + ' ' + last_name)

fn = input('what is your first name? ')
ln = input('what is your last name? ')
say_hello(fn, ln)
'''

#Passing by position
'''
def subtract(a, b):
  return a - b

subtract(5, 8)
'''

# def myfunc():
#   pass
# myfunc('hello')


'''
def greet(name,msg):
   #This function greets to the person with the provided message
   print("Hello",name + ', ' + msg)

greet("Monica","Good morning!")
'''

# Insert at Index
#tens.insert(1, teens)



# from PIL import Image, ImageDraw

# width = 500
# height = 500

# im = Image.new('RGB', (width, height))

# draw = ImageDraw.Draw(im)
# draw.line((0, 0) + im.size, fill=128)
# draw.line((0, im.size[1], im.size[0], 0), fill=128)



# def add_element(dict, key, value):
#   if key not in dict:
#     dict[key] = []
#   dict[key].append(value)

# d = {}
# add_element(d, 'foo', 'val1')
# add_element(d, 'foo', 'val2')
# add_element(d, 'bar', 'val3')
# print(d)


# list1 = ['1', '2', '3']
# str1 = ''.join(list1)
# print(str1)


# ari_scale = {
#     1: {'ages': '5-6', 'grade_level': 'Kindergarten'},
#     2: {'ages': '6-7', 'grade_level': '1st Grade'},
#     3: {'ages': '7-8', 'grade_level': '2nd Grade'},
#     4: {'ages': '8-9', 'grade_level': '3rd Grade'},
#     5: {'ages': '9-10', 'grade_level': '4th Grade'},
#     6: {'ages': '10-11', 'grade_level': '5th Grade'},
#     7: {'ages': '11-12', 'grade_level': '6th Grade'},
#     8: {'ages': '12-13', 'grade_level': '7th Grade'},
#     9: {'ages': '13-14', 'grade_level': '8th Grade'},
#     10: {'ages': '14-15', 'grade_level': '9th Grade'},
#     11: {'ages': '15-16', 'grade_level': '10th Grade'},
#     12: {'ages': '16-17', 'grade_level': '11th Grade'},
#     13: {'ages': '17-18', 'grade_level': '12th Grade'},
#     14: {'ages': '18-22', 'grade_level': 'College'}
# }
# print(ari_scale[3])


# contact = []
# with open("contact-list.csv", 'r') as file:
#   #split the lines in the file
#   lines = file.read().split('\n')
  
#   con2 = []
#   key = lines[0].split(',')


#   contact.append(lines[0].split(','))
#   contact.append(lines[1].split(','))
#   contact.append(lines[2].split(','))
#   print(f"contact: {contact}")
#   '''
#   [['Name', 'Email', 'Favorite Color'], ['Jane', 'jane@company.net', 'red'], ['Bob', 'bob@company.net', 'blue']]
#   '''

#   for thing in contact:
#       #zip the leys with values and looping thought them
#       con = dict(zip(contact[0],thing))
#       con2.append(con)
#       print(f"con2: {con2}")
#       '''
#       [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}]
#       [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}, {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}]
#       [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}, {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}]
#       '''

#       # con2: [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}]
#       # con2: [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}, {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}]
#       # con2: [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}, {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}]
#       print(f"con: {con}")
#       '''
#       {'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}
#       {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}
#       {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}
#       '''
#       # con: {'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}
#       # con: {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}
#       # con: {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}
#   del con2[0]
#   print(f"con2: {con2}")
  '''
  [{'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}]
  '''
  # con2: [{'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}]




# with open('contact-list.csv', 'r') as f:
#     data_csv = f.read()
# # data_csv = [line.split(',') for line in data_csv.split('\n')]
# csv_lines = data_csv.split('\n')
# data_csv = []
# for line in csv_lines:
#     data_csv.append(line.split(','))
# print(data_csv)
# '''
# [['Name', 'Email', 'Favorite Color'], ['Jane', 'jane@company.net', 'red'], ['Bob', 'bob@company.net', 'blue'], ['Jack', 'jack@company.net', 'silver'], ['Diana', 'diana@company.net', 'yellow']]
# '''

# keys = data_csv[0]
# data = []
# # for i, row in list(enumerate(data_csv))[1::]:
# #     line_dict = {}
# #     for j, cell in enumerate(row):
# #         line_dict[keys[j]] = cell
# #     data.append(line_dict)

# # for i, values in list(enumerate(data_csv))[1::]:
# #     data.append(dict(zip(keys, values)))

# # for i in range(1, len(data_csv)):
# #     data.append(dict(zip(keys, data_csv[i])))
# data = [dict(zip(keys, row)) for row in data_csv[1::]]
# # print(data)
# '''
# [{'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}, {'Name': 'Jack', 'Email': 'jack@company.net', 'Favorite Color': 'silver'}, {'Name': 'Diana', 'Email': 'diana@company.net', 'Favorite Color': 'yellow'}]
# '''


# def create_contact(data, keys):
#     new_contact = {}
#     for key in keys:
#         new_contact[key] = input(f"What is your new contact's {key}? ")
#     data.append(new_contact)

# def read_contact(data, keys):
#     key_returned_string = "\n" + "\n".join(keys) + "\n"
#     key_input = input(f'What would you like to search by? Choose from{key_returned_string}: ')
#     contact_input = input("What is your search term? ")
#     # data_results = list(filter(lambda contact: contact[key_input] == contact_input, data))
#     # print(data_results)
#     # for result in data_results:
#     #     for key, value in result.items():
#     #         print(f'{key}: {value}')
#     #     print('')

#     data_results = []
#     for contact in data:
#         if contact[key_input] == contact_input:
#             data_results.append(contact)
#     print(data_results)

#     return data_results


# def update_contact(data, keys):
#     # key_returned_string = "\n" + "\n".join(keys) + "\n"
#     # key_input = input(f'What would you like to search by? Choose from{key_returned_string}: ')
#     # contact_input = input("What is your search term? ")
#     # data_results = list(filter(lambda contact: contact[key_input] == contact_input, data))
#     # print(data_results)
#     # for result in data_results:
#     #     for key, value in result.items():
#     #         print(f'{key}: {value}')
#     #     print('')
#     data_results = read_contact(data, keys)
    
#     index_to_update = int(input(f'Which entry do you want to update? (1-{len(data_results)}) ')) - 1
#     key_to_update = input(f'Which key do you want to update? {keys} ')
#     value_to_update = input(f"What do you want to change {key_to_update} to? ")
#     data_results[index_to_update][key_to_update] = value_to_update

# def delete_contact(data, keys):
#     # key_returned_string = "\n" + "\n".join(keys) + "\n"
#     # key_input = input(f'What would you like to search by? Choose from{key_returned_string}: ')
#     # contact_input = input("What is your search term? ")
#     # data_results = list(filter(lambda contact: contact[key_input] == contact_input, data))
#     # print(data_results)
#     # for result in data_results:
#     #     for key, value in result.items():
#     #         print(f'{key}: {value}')
#     #     print('')
#     data_results = read_contact(data, keys)
#     index_to_delete = int(input(f'Which entry do you want to delete? (1-{len(data_results)}) ')) - 1
#     data.remove(data_results[index_to_delete])

# while True:
#     user_input = input("(c)reate, (r)ead, (u)pdate, (d)elete, (q)uit? ")
#     if user_input == 'q':
#         break
#     elif user_input == 'c':
#         create_contact(data, keys)
#     elif user_input == 'r':
#         read_contact(data, keys)
#     elif user_input == 'u':
#         update_contact(data, keys)
#     elif user_input == 'd':
#         delete_contact(data, keys)

# data_csv_output = []
# data_csv_output.append(list(data[0].keys()))
# for contact in data:
#     data_csv_output.append(list(contact.values()))
# data_csv_output = [",".join(line) for line in data_csv_output]
# data_csv_output = "\n".join(data_csv_output)
# with open('contacts.csv', 'w') as f:
#     f.write(data_csv_output)

'''
Name,Email,Favorite Color
Jane,jane@company.net,red
Bob,bob@company.net,blue
Jack,jack@company.net,silver
Diana,diana@company.net,yellow
'''