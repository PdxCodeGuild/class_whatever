''' Have the computer play pick6 many times and determine net balance.

Initially the program will pick 6 random numbers as the 'winner'. Then try playing pick6 100,000 times, with the ticket cost and payoff below.

A ticket contains 6 numbers, 1 to 99, and the number of matches between the ticket and the winning numbers determines the payoff. Order matters, if the winning numbers are [5, 10] and your ticket numbers are [10, 5] you have 0 matches. If the winning numbers are [5, 10, 2] and your ticket numbers are [10, 5, 2], you have 1 match. Calculate your net winnings (the sum of all expenses and earnings).

a ticket costs $2
if 1 number matches, you win $4
if 2 numbers match, you win $7
if 3 numbers match, you win $100
if 4 numbers match, you win $50,000
if 5 numbers match, you win $1,000,000
if 6 numbers match, you win $25,000,000
One function you might write is pick6() which will generate a list of 6 random numbers, which can then be used for both the winning numbers and tickets. Another function could be num_matches(winning, ticket) which returns the number of matches between the winning numbers and the ticket.

Steps
Generate a list of 6 random numbers representing the winning tickets
Start your balance at 0
Loop 100,000 times, for each loop:
Generate a list of 6 random numbers representing the ticket
Subtract 2 from your balance (you bought a ticket)
Find how many numbers match
Add to your balance the winnings from your matches
After the loop, print the final balance
Version 2
The ROI (return on investment) is defined as (earnings - expenses)/expenses. Calculate your ROI, print it out along with your earnings and expenses. '''

import random
# test to pull list out of list in list


# this is a def that will gen random numbers
def num():
    com6 = []
    while len(com6) < 6:
        com6.append(random.randint(1,100))
    return com6

    
counter = 0
while counter < 1:
    #While loop will keep going till counter is == to the number set, counter inside of the loop will tell it how many to count each loop then stop
    ticket = num()
    winning = num()
    counter += 1
    print('this is player', ticket)
    print('this is computer', winning)
# print(counter)

def num_matches(winning, ticket):
    for x,y in zip(winning,ticket):
        return x,y



num_matches(winning,ticket)


balance = 0

ticknum = {
    1:4,
    2:7,
    3:100,
    4:50000,
    5:1000000,
    6:25000000,
}



# if ticket == winning:
#   a = ticknum[6] + balance
#   print(a)



# print("This ticket", ticket)
# print("This winning numbers", winning)





