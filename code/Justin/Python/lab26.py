
# class Player:
#     def __init__(self, name, token): 
#         # self.nomen = nomen
#         # self.symbol = symbol
    
# # p1 = Player("player_one", "x")
# # p2 = Player("player_two", "y")

# class Game:
#     def __init__(self, board): 
#         self.board = board

playing = True

champion = None

current = "1"

table = ["...", "...", "...",
        "...", "...", "...",
        "...", "...", "..."]

def play():

    visual()

    while playing:

        mechanics(current)

        status()

        change()

    if champion == "1" or champion == "0":
        print(champion + "was victorious")

    elif champion == None:
        print("Tie!")

def visual():
    print(table[0] + " : " + table[1] + " : " + table[2])
    print(table[3] + " : " + table[4] + " : " + table[5])
    print(table[6] + " : " + table[7] + " : " + table[8])

def mechanics(player):
    print(player + "'s turn.")
    spot = input("Choose a position between 1 and 9, (starting from the top left):")

    valid = False
    while not valid:

        while spot not in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            spot = input("Invalid input.")
        
        spot = int(spot) - 1
    
    # TypeError: list indices must be integers or slices, not str
        if table[spot] == "...":
            valid = True
        else:
            print("Restricted area.")

    table[spot] = player
    visual()

def status():

    win()

    tie()

def win():

    global champion

    rose_win = rose()

    call_ems_win = call_ems()

    diagonals_win = diagonals()

    if rose_win:
        champion = rose

    elif call_ems_win:
        champion = call_ems

    elif diagonals_win:
        champion = diagonals

    else:
        champion = None

    return

#     table = {'1': ' ' , '2': ' ' , '3': ' ' ,
#             '4': ' ' , '5': ' ' , '6': ' ' ,
#             '7': ' ' , '8': ' ' , '9': ' ' }
            
# def visual(table):
#     print(['1'] + '|' + ['2'] + '|' + ['3'])
#     print('-+-+-')
#     print(['4'] + '|' + ['5'] + '|' + ['6'])
#     print('-+-+-')
#     print(['7'] + '|' + ['8'] + '|' + ['9'])

def rose():

    global playing

    # template

#      53.     return ((bo[7] == le and bo[8] == le and bo[9] == le) or # across the top

#  54.     (bo[4] == le and bo[5] == le and bo[6] == le) or # across the middle

#  55.     (bo[1] == le and bo[2] == le and bo[3] == le) or # across the bottom

#  56.     (bo[7] == le and bo[4] == le and bo[1] == le) or # down the left side

#  57.     (bo[8] == le and bo[5] == le and bo[2] == le) or # down the middle

#  58.     (bo[9] == le and bo[6] == le and bo[3] == le) or # down the right side

#  59.     (bo[7] == le and bo[5] == le and bo[3] == le) or # diagonal

#  60.     (bo[9] == le and bo[5] == le and bo[1] == le)) # diagonal

#  61.

    row_one = table[0] == table[1] == table[2] != "..."
    row_two = table[3] == table[4] == table[5] != "..."
    row_three = table[6] == table[7] == table[8] != "..."

    if row_one or row_two or row_three:
        playing = False
        print("Player wins! Sort of!!!")
    if row_one:
        return table[0]
    elif row_two:
        return table[3]
    elif row_three:
        return table[6]
    else:
        return None


def call_ems():

    global playing

    column_one = table[0] == table[3] == table[6] != "..."
    column_two = table[1] == table[4] == table[7] != "..."
    column_three = table[2] == table[5] == table[8] != "..."

    if column_one or column_two or column_three:
        playing = False
        print("Player wins! Sort of!!!")
    if column_one:
        return table[0]
    elif column_two:
        return table[1]
    elif column_three:
        return table[2]
    else:
        return None

def diagonals():
    
    global playing

    diagonal_one = table[0] == table[4] == table[8] != "..."
    diagonal_two = table[6] == table[4] == table[2] != "..."

    if diagonal_one or diagonal_two:
        playing = False
        print("Player wins! Sort of!!!")
    if diagonal_one:
        return table[0]
    elif diagonal_two:
        return table[6]
    else:
        return None

def tie():
    global playing
    if "..." not in table:
        playing = False
        print("You're both winners because you paid attention! Nobody should ever lose at Tic-tac-toe!!!")
    else:
        return False
    
    # Template
#     Welcome to Tic Tac Toe!

# Do you want to be X or O?

# X

# The computer will go first.

#    |   |

#  O |   |

#    |   |

# -----------

#    |   |

#    |   |

#    |   |

# -----------

#    |   |

#    |   |

#    |   |

# What is your next move? (1-9)

# 3

#    |   |

#  O |   |

#    |   |

# -----------

#    |   |

#    |   |

#    |   |

# -----------

#    |   |

#  O |   | X

#    |   |

# What is your next move? (1-9)

# 4

#    |   |

#  O |   | O

#    |   |

# -----------

#    |   |

#  X |   |

#    |   |

# -----------

#    |   |

#  O |   | X

#    |   |

# What is your next move? (1-9)

# 5

#    |   |

#  O | O | O

#    |   |

# -----------

#    |   |

#  X | X |

#    |   |

# -----------

#    |   |

#  O |   | X

#    |   |

# The computer has beaten you! You lose.

# Do you want to play again? (yes or no)

# no

def change():
    global current
    if current == "1":
        current = "0"
    elif current == "0":
        current = "1"

play()

# while True:
# 	  x = input('Pick a number from 0-10')
# 	  x = int(x)
# 	  board[x] = 'X'
# 	  print(board)

