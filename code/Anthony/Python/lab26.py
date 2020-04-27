class Player :
  def __init__(self, name,token):
    self.name = name
    self.token = token

class Game :
  def __init__(self, board):
    self.board = board

  def __repr__(self):
    
      board_str = ""
      for b_x in range(len(self.board)):
          for b_y in range(len(self.board[0])):
              if b_y != 2:
                  if self.board[b_x][b_y] == "X":
                     board_str = board_str +"X" + " | " 
                  elif self.board[b_x][b_y] == "O":
                     board_str = board_str +"O" + " | "
                  else:
                     board_str = board_str +" " + " | "  
              else:
                  if self.board[b_x][b_y] == "X":
                     board_str = board_str +" X "  
                  elif self.board[b_x][b_y] == "O":
                     board_str = board_str +" O " 
                  else:
                     board_str = board_str +" "   
          board_str = board_str +"\n"   
           
      return board_str    

  def move(self,x, y, player):      
      self.board[x][y] = player
  
  def calc_winner(self):
      
      for b_x in range(len(self.board)):
          counter = 0
          for b_y in range(len(self.board[0])):  
              if self.board[b_x][b_y] == "X":
                  counter = counter + 1
          if counter == 3:
              return "X" 

          counter = 0
          for b_y in range(len(self.board[0])):  
              if self.board[b_y][b_x] == "X":
                  counter = counter + 1
          if counter == 3:
              return "X"            
      
      if self.board[0][0] == "X":
          if self.board[1][1] == "X":    
             if self.board[2][2] == "X": 
                 return "X"
      
      if self.board[0][2] == "X":
          if self.board[1][1] == "X":    
             if self.board[2][0] == "X": 
                 return "X"


      for b_x in range(len(self.board)):
          counter = 0
          for b_y in range(len(self.board[0])):  
              if self.board[b_x][b_y] == "O":
                  counter = counter + 1
          if counter == 3:
              return "O" 
          counter = 0
          for b_y in range(len(self.board[0])):  
              if self.board[b_y][b_x] == "O":
                  counter = counter + 1
          if counter == 3:
              return "O"            
      if self.board[0][0] == "O":
          if self.board[1][1] == "O":    
             if self.board[2][2] == "O": 
                 return "O"
      
      if self.board[0][2] == "O":
          if self.board[1][1] == "O":    
             if self.board[2][0] == "O": 
                 return "O"           
      return "None"


       

  def is_full(self):
       full = True

       for b_x in range(len(self.board)):
          for b_y in range(len(self.board[0])):  
              if self.board[b_x][b_y] != " ":
                  full = False
                  return full
           
       return full            
      
                  

           
  def is_game_over(self):
       game_over = True
       if self.calc_winner() == "None":
           game_over = False
       if self.is_full() == True:
           game_over = False    
       
       return game_over    




def main():
    name1 = input("Please enter palyer 1 name: ")
    name2 = input("Please enter palyer 2 name: ")
    player1 = Player(name1,"X")
    player2 = Player(name2,"O")
    board = []
    
    for i in range(3):
        board_row = []
        for j in range(3):
            board_row.append(0)
        board.append(board_row)    
    game = Game(board)
   
    print(game.__repr__())
    
    while True:    
        print("Player 1")
        x = int(input("Please enter the x - co-ordinate: "))
        y = int(input("Please enter the y - co-ordinate: "))
        game.move(x,y,player1.token)
        print(game.__repr__())

        if game.is_game_over() == True:
            if game.is_full() == False:
                winner = game.calc_winner()
                if winner == player1.token:
                    print("Player 1 wins")
                elif winner == player2.token:
                    print("Player 2 wins")    
                break
            else:
                print("The board is full")
                break       


        print("\nPlayer 2")
        x = int(input("Please enter the x - co-ordinate: "))
        y = int(input("Please enter the y - co-ordinate: "))
        game.move(x,y,player2.token)
        print(game.__repr__())
        
        if game.is_game_over() == True:
            if game.is_full() == False:
                winner = game.calc_winner()
                if winner == player1.token:
                    print("Player 1 wins")
                elif winner == player2.token:
                    print("Player 2 wins")    
                break
            else:
                print("The board is full")
                break          

main()



