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


from PIL import Image, ImageDraw

width = 500
height = 500

im = Image.new('RGB', (width, height))

draw = ImageDraw.Draw(im)
draw.line((0, 0) + im.size, fill=128)
draw.line((0, im.size[1], im.size[0], 0), fill=128)