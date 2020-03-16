"""
Lab 22: Compute Automated Readability Index
Compute the ARI for a given body of text loaded in from a file. 
The automated readability index (ARI) is a formula for computing 
the U.S. grade level for a given block of text. The general formula to compute the ARI is as follows:

***Formula***

The score is computed by multiplying the number of characters divided by the number of words by 4.17, 
adding the number of words divided by the number of sentences multiplied by 0.5, and subtracting 21.43. 
If the result is a decimal, always round up. Scores greater than 14 should be presented as having the 
same age and grade level as scores of 14.



The output should look something like the following:

--------------------------------------------------------

The ARI for gettysburg-address.txt is 12
This corresponds to a 11th Grade level of difficulty
that is suitable for an average person 16-17 years old.

--------------------------------------------------------
"""
import string
import math
ari_scale = {
     1: {'ages':   '5-6', 'grade_level': 'Kindergarten'},
     2: {'ages':   '6-7', 'grade_level':    '1st Grade'},
     3: {'ages':   '7-8', 'grade_level':    '2nd Grade'},
     4: {'ages':   '8-9', 'grade_level':    '3rd Grade'},
     5: {'ages':  '9-10', 'grade_level':    '4th Grade'},
     6: {'ages': '10-11', 'grade_level':    '5th Grade'},
     7: {'ages': '11-12', 'grade_level':    '6th Grade'},
     8: {'ages': '12-13', 'grade_level':    '7th Grade'},
     9: {'ages': '13-14', 'grade_level':    '8th Grade'},
    10: {'ages': '14-15', 'grade_level':    '9th Grade'},
    11: {'ages': '15-16', 'grade_level':   '10th Grade'},
    12: {'ages': '16-17', 'grade_level':   '11th Grade'},
    13: {'ages': '17-18', 'grade_level':   '12th Grade'},
    14: {'ages': '18-22', 'grade_level':      'College'}
}
content = 'gettysburg_address.txt'
with open(content, 'r') as speech:
    contents = str(speech.read())

test = contents
translator = str.maketrans("", "", "\n")
no_lines = test.translate(translator)

chars = no_lines
translator2 = str.maketrans("", "", string.punctuation)
noChars = chars.translate(translator2)

sentences = no_lines.split(".")
words = no_lines.split(" ")
characters = list(noChars)

while('' in sentences) :
    sentences.remove("")

while(" " in characters) :
    characters.remove(" ")

characters_count = len(characters)
words_count = len(words)
sentences_count = len(sentences)


maths = (4.71 * (characters_count / words_count)) + (0.5 * (words_count / sentences_count)) - 21.43

ari = math.ceil(maths)

print(f"The ARI for '{content}' is {ari}") #should output number of key in dict.
print(f"This corresponds to a {ari_scale[ari]['grade_level']} level of difficulty")
print(f"that is suitable for an average person {ari_scale[ari]['ages']} years old.")