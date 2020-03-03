'''
Let's write a python module to analyze a given text file containing a book for its vocabulary frequency and display the most frequent words to the user in the terminal.

Find a book on Project Gutenberg. Download it as a UTF-8 text file.
1. Open the file.
2. Make everything lowercase, strip punctuation, split into a list of words.
3. Your dictionary will have words as keys and counts as values. If a word isn't in your dictionary yet, add it with a count of 1. If it is, increment its count.
4. Print the most frequent top 10 out with their counts. You can do that with the code below.
# word_dict is a dictionary where the key is the word and the value is the count
words = list(word_dict.items()) # .items() returns a list of tuples
words.sort(key=lambda tup: tup[1], reverse=True)  # sort largest to smallest, based on count
for i in range(min(10, len(words))):  # print the top 10 words, or all of them, whichever is smaller
    print(words[i])


split
make everything lowercase, strip puntucation out (use translator)
word = import.lower
split by spaces to strip punctuation
'''


# 1. open file
with open('midsummer-night-dream.txt') as midsummer_file:
    midsummer_data = midsummer_file.read().split('\n')

midsummer_night_dream = {}
for line in midsummer_data:
    name, number = line.split() #####################################
    phone_book[name] = number  #####################################
# make everything lowercase

# strip punctuation
import string
s = 'I $am a !string with punc&^%*tuation!'
translator = str.maketrans('', '', string.punctuation)
string_without_punct = s.translate(translator)
# split into a list of words

# 3. 