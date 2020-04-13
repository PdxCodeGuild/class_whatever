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




# loop 100,000 times all different and all using 6 diff random  numbers


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


contact = []
with open("contact-list.csv", 'r') as file:
  #split the lines in the file
  lines = file.read().split('\n')
  
  con2 = []
  key = lines[0].split(',')


  contact.append(lines[0].split(','))
  contact.append(lines[1].split(','))
  contact.append(lines[2].split(','))
  print(f"contact: {contact}")
  '''
  [['Name', 'Email', 'Favorite Color'], ['Jane', 'jane@company.net', 'red'], ['Bob', 'bob@company.net', 'blue']]
  '''

  for thing in contact:
      #zip the leys with values and looping thought them
      con = dict(zip(contact[0],thing))
      con2.append(con)
      print(f"con2: {con2}")
      # con2: [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}]
      # con2: [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}, {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}]
      # con2: [{'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}, {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}]
      print(f"con: {con}")
      # con: {'Name': 'Name', 'Email': 'Email', 'Favorite Color': 'Favorite Color'}
      # con: {'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}
      # con: {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}
  del con2[0]
  print(f"con2: {con2}")
  # con2: [{'Name': 'Jane', 'Email': 'jane@company.net', 'Favorite Color': 'red'}, {'Name': 'Bob', 'Email': 'bob@company.net', 'Favorite Color': 'blue'}]