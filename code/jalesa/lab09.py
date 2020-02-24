# Version 1
# Ask the user for the number of feet, and print out the equivalent distance in meters. 
# Hint: 1 ft is 0.3048 m. So we can get the output in meters by multiplying the input 
# distance by 0.3048. Below is some sample input/output.

# > what is the distance in feet? 12
# > 12 ft is 3.6576 m

# Version 2
# Allow the user to also enter the units. Then depending on the units, 
# convert the distance into meters. The units we'll allow are feet, 
# miles, meters, and kilometers.

# 1 ft is 0.3048 m
# 1 mi is 1609.34 m
# 1 m is 1 m
# 1 km is 1000 m

# Below is some sample input/output:

# > what is the distance? 100
# > what are the units? mi
# > 100 mi is 160934 m

# AND
# Version 3
# Add support for yards, and inches.

# 1 yard is 0.9144 m
# 1 inch is 0.0254 m

# ANSWER
# user_distance = int(input("what is the distance? "))
# user_units = input("what are the units? ")

# if user_units == "ft" or "feet":
#     print(f"{user_distance * 0.3048} feet")
# elif user_units == "miles" or "mi":
#     print(f"{user_distance * 1609.34} miles ")
# elif user_units == "m" or "meter":
#     print(f"{user_distance * 1} meter") 
# elif user_units == "km" or "kilometers":
#     print(f"{user_distance * 1000} kilometers")      
# elif user_units == "yd" or "yards":
#     print(f"{user_distance * 0.9144} yards")
# elif user_units == "in" or "inches":
#     print(f"{user_distance * 0.0254} inches")
# else:
#     if user_distance != ["feet", "miles", "meters", "kilometers", "yards", "inches"]:
#         print("You must enter feet, miles, meters, kilometers, yards, or inches")
#     else: 
#         print("You must enter a number for the distance")






# Version 4
# Now we'll ask the user for the distance, the starting units, and the units to convert to.

# You can think of the values for the conversions as elements in a matrix,
#  where the rows will be the units you're converting from, and the columns 
# will be the units you're converting to. Along the horizontal, 
# the values will be 1 (1 meter is 1 meter, 1 foot is 1 foot, etc).

# ft	mi	m	km
# ft	1		0.3048	
# mi		1	1609.34	
# m	1/0.3048	1/1609.34	1	1/1000
# km			1000	1
# But instead of filling out that matrix, and checking for 
# each pair of units (if from_units == 'mi' and to_units == 'km'),
# we can just convert any unit to meters, then convert the 
# distance in meters to any other unit.

# Furthermore you can convert them from meters by dividing a 
# distance (in meters) by those same values used above. 
# So first convert from the input units to meters, then convert from meters to the output units.
# Below is some sample input/output:
# > what is the distance? 100
# > what are the input units? ft
# > what are the output units? mi
# 100 ft is 0.0189394 mi


user_units = input("what are the starting units? ")
output_units =input("what units do you want to convert to? ")
user_distance = int(input("what is the distance? ")) 
converted_meters = {
    "ft": 0.3048,
    "mi": 1609.34,
    "m": 1,
    "km": 1000,
    "yd": 0.9144
    "in": 0.0254
}

if from_units == 'mi' and to_units == 'km':
    meters = print(f'{user_distance * 1609.34}')
    print(f"{meters / 1000} kilometers")
    



# convert_to_meters = f"{user_units *  } meters "