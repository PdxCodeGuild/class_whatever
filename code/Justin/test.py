nums = [1,2,3,4,5,6,7,8,9,10,11,12]

print(nums[2::])

from turtle import *

fillcolor('blue')
speed(10)

n_sides = 3
edge_length = 0

i = 0
begin_fill()
while i < 1000000:
	forward(edge_length)
	right(770/n_sides)
	i = i + 1
	edge_length = edge_length + 1
end_fill()

done()
