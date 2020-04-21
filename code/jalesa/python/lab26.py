# Lab 26: Tic-Tac-Toe


class Player:
    def __init__(self, name, token):
        self.name = name
        self.token = token

class Game:
    def __init__(self):
        # this may count '\n' as another position
         self.board = ["0","1","2","\n","3","4","5","\n","6","7","8"]
       
        # self.board = ["1","2","3"]
        # ["4","5","6"],
        # ["7","8","9"]

    # print board with added lines
    def __repr__(self):
        print (
            self.board[0]+ "|"+ self.board[1]+ "|"+ self.board[2] 
            + self.board[3]+ "|"+ self.board[4]+ "|"+ self.board[5] 
            + self.board[6]+ "|"+ self.board[7]+ "|"+ self.board[8]  
        )
        

    def move (self,x, y, player):
        if self.board[0] != "x" or "o":
            self.board[0] = "0"
        if self.board[1] != "x" or "o":
            self.board[1] = "1"
        if self.board[2] != "x" or "o":
            self.board[2] = "2"
        if self.board[3] != "x" or "o":
            self.board[3] = "3"
        if self.board[4] != "x" or "o":
            self.board[4] = "4"
        if self.board[5] != "x" or "o":
            self.board[5] = "5"
        if self.board[6] != "x" or "o":
            self.board[6] = "6"
        if self.board[7] != "x" or "o":
            self.board[7] = "7"
        if self.board[8] != "x" or "o":
            self.board[8] = "8"

       

    def calc_winner(self):
        # pass row
        if self.board[0] == self.board[1] ==self.board[2]:
           pass
        if self.board[3] == self.board[4] ==self.board[5]:
            pass
        if self.board[6] == self.board[7] ==self.board[8]:
            pass

        # column
        if self.board[0] == self.board[3] ==self.board[6]:
           pass
        if self.board[1] == self.board[4] ==self.board[7]:
            pass
        if self.board[2] == self.board[5] ==self.board[8]:
            pass

        # diagonal
        if self.board[0] == self.board[4] ==self.board[8]:
           pass
        if self.board[6] == self.board[4] ==self.board[2]:
            pass
        

        # ["0","1","2"]
        # ["3","4","5"]
        # ["6","7","8"]

    def is_full(self):
        pass

    def is_game_over(self):
        pass


# RUN THE ENTIRE GAME...
def main():
     pass
        


game = Game()