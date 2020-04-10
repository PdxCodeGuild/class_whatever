import string
import math
import re


with open('gettysburg.txt', 'r') as text:
    contents = text.read()   # <class 'str'>
    # contents = text.read().split('\n')   # <class 'list'> ('list' object has no attribute 'split')


#Characters are the number of letters and numbers.
    # chars = contents.replace(" ", "")
    # chars_punct = str.maketrans(string.punctuation, ' '*len(string.punctuation))  #map punctuation to space
    chars_punct = str.maketrans('', '', string.punctuation)
    chars = contents.translate(chars_punct)
    characters = int(len(chars))
    word = contents.split(" ")
    # word = contents.split()
    words = int(len(word))
    sents = contents.split(". ")
    sentences = int(len(sents))

ari = 4.71*(characters/words) + 0.5*(words/sentences)-21.43
ari_num = math.ceil(ari)
# Scores greater than 14 should be presented as having the same age and grade level as scores of 14
if ari_num > 14:
    ari_num = 14


ari_scale = {
    1: {'ages': '5-6', 'grade_level': 'Kindergarten'},
    2: {'ages': '6-7', 'grade_level': '1st Grade'},
    3: {'ages': '7-8', 'grade_level': '2nd Grade'},
    4: {'ages': '8-9', 'grade_level': '3rd Grade'},
    5: {'ages': '9-10', 'grade_level': '4th Grade'},
    6: {'ages': '10-11', 'grade_level': '5th Grade'},
    7: {'ages': '11-12', 'grade_level': '6th Grade'},
    8: {'ages': '12-13', 'grade_level': '7th Grade'},
    9: {'ages': '13-14', 'grade_level': '8th Grade'},
    10: {'ages': '14-15', 'grade_level': '9th Grade'},
    11: {'ages': '15-16', 'grade_level': '10th Grade'},
    12: {'ages': '16-17', 'grade_level': '11th Grade'},
    13: {'ages': '17-18', 'grade_level': '12th Grade'},
    14: {'ages': '18-22', 'grade_level': 'College'}
}


output = f"The ARI for gettysburg-address.txt is {ari_num}.\nThis corresponds to a {ari_scale[ari_num]['grade_level']} Grade level of difficulty\nthat is suitable for an average person who is age {ari_scale[ari_num]['ages']} years old."
print(output)