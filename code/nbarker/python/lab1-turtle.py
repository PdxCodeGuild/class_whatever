
from turtle import *

penup()
setposition(-100, 50)
pendown()
forward(200)
right(90)
forward(200)
right(45)
forward(115)
right(180)
forward(115)
right(315)
right(135)
forward(115)
right(180)
forward(115)
right(45)
forward(200)
right(90)
forward(150)
left(87)
forward(20)
right(180)
forward(20)
left(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
left(93)
forward(150)
right(90)
forward(25)
right(90)

i = 0
while i < 100:
    forward(3.5)
    left(360/100)
    i = i + 1

penup()
left(90)
forward(20)
right(90)
forward(25)
left(232)
pendown()


i = 0
while i < 100:
    forward(3.5)
    right(360/50)
    i = i + 7

penup()
right(120)
forward(25)
pendown()

done()
