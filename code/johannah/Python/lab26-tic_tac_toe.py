'''
-the Player class has the following properties:
  - name = player name
  - token = 'X' or 'O'
-the Game class to model Tic Tac Toe has the following properties:
  - board = your representation of the board
-a function MAIN that models gameplay taking in user inputs through REPL

You can represent the board however you like, such as a 2D list, tuples, or dictionary.

*** The Game class has the following methods:
  - __repr__() Returns a pretty string representation of the game board
  - move(x, y, player) Place a player's token character string at a given coordinate (top-left is 0, 0), x is horizontal position, y is vertical position
  - calc_winner() What token character string has won or None if no one has
  - is_full() Returns true if the game board is full
  - is_game_over() Returns true if the game board is full or a player has won
  '''

class Player():

  def __init__(self, name, token):
    # name = input("Player Name:")
    self.name = name
    # token = X or O
    self.token = token

class Game():

  def __init__(self):
    self.square = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ",]

  def __repr__(self):
    print(" %s | %s | %s" %(self.square[1], self.square[2], self.square[3]))
    print(" %s | %s | %s" %(self.square[4], self.square[5], self.square[6]))
    print(" %s | %s | %s" %(self.square[7], self.square[8], self.square[9]))

  def update_square(self, square_num, player):
    if self.square[square_num] == " ":
      self.square[square_num] = player

  # def move(x, y, player):

  def calc_winner(self, player):
    if self.square[1] == player and self.square[2] == player and self.square[3] == player:
      return True

  # def is_full():

  # def is_game_over():


# a function MAIN that models gameplay taking in user inputs through REPL
# def main()

game = Game()
# # display
# game.__repr__()

while True:
  player_x_choice = int(input("Player X, what square number would you like to place your token? (1-9) "))
  # update board
  game.update_square(player_x_choice, "X")
  # checking for a win by player X
  if game.calc_winner("X") == True:
    print("Player X is the winner!")
  player_o_choice = int(input("Player O, what square number would you like to place your token? (1-9) "))
  # update board
  game.update_square(player_o_choice, "O")