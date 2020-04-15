// Pick 3 Python labs and re-do them in JavaScript. You should first try to write them using JavaScript's prompt and alert in place of Python's input and print.

// Once you have that working, use input and button elements, with events. You can read the docs on DOM Manipulation and Events. You can view a demo here.

// LAB 01
prompt ("\nHello World!")
alert()





// LAB 02 """Let's write a program to simulate the classic "Magic Eight Ball"

// Print a welcome screen to the user.
// Prompt the user to ask the 8-ball a question.
// For example: "Will I win the lottery tomorrow?"
// Use the random module's random.choice() to choose a prediction.
// Display the result of the prediction."""


import random
options = ["yes", "no", "maybe"];

answer = random.choice(options);

user = input ("\nWhat is your name: ")
alert(`welcome ${user} to magic eight ball.\n`)

user_question = prompt("What is your question?")
alert(answer)

const eightball_title = document.querySelector("#title")
const sect = document.querySelector("secttion")
const home = document.querySelector("#button")
const text = document.createElement("")
text.textContent= "Welcome to eightball"
sect.appendChild(text)



// """ GRADING LAB03
// Let's convert a number grade to a letter grade, using if and elif statements and comparisons.

// Have the user enter a number representing the grade (0-100)
// Convert the number grade to a letter grade
// Numeric Ranges
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F
// Advanced Version 1
// Use randint() from the random module to determine the user's rival's score. Let the user know if they did better than their rival.

// Advanced Version 2
// Use % to get the remainder of the grade when divided by ten, which is the same as the number in the ones digit. The number in the ones digit will determine whether they will get a '+' or a '-' appended to the end of their grade. For example, the grade 81 would be a 'B'. 81 % 10 would give you 1, which is a low number, so you would add a '-' to the end of the grade."""

grade = prompt("Enter your grade here: ")
grade = int(grade)

if (grade >= 90 and grade <= 100)
    {alert("A");}

else if (grade >= 80 and grade <= 89)
    {alert("B");}

else if (grade >= 70 and grade  <= 79)
    {alert("C");}

else if (grade >= 60 and grade <= 69)
    {alert("D");}

else if (grade >= 0 and grade <= 59)
    {alert("F");}

else :
    {alert("You must enter a grade 0-100");}