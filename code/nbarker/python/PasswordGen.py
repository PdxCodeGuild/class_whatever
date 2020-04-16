'''
artist: Nick Barker
generate 10 digit password with punctuation, caps, lower, etc! Mix that sh*t up!
Use a loop (while loop or for loop) and random.choice, this will be a string of random characters.
'''
Star = ('***')
print(Star + "Welcome to the Password Pyramid 5000!" + Star)

#Modules
import random
import string
string.ascii_lowercase
string.digits
#Okay I'm good here

#print(string.ascii_lowercase)
#print(string.digits)
#print(string.punctuation)
#password =
#s = "-"
#s = s.join(string.ascii_lowercase) + s.join(string.digits) + s.join(string.punctuation)
#char_list = list(s)
#random.shuffle(char_list)
#while password < (10) remove random.choice(char_list)
#I was thinking about making a list of all of the characters, and removing 10 at random for the password, I think it would have worked, but setting the size for 8 (i had no idea you could do that!) helped immensely!

def pw_gen(size = int, chars=string.ascii_lowercase + string.digits + string.punctuation):
	return ''.join(random.choice(chars) for _ in range(size))
print(pw_gen(int(input('How many characters in your password?'))))
