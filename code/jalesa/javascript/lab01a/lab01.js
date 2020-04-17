// Pick 3 Python labs and re-do them in JavaScript. You should first try to write them using JavaScript's prompt and alert in place of Python's input and print.

// Once you have that working, use input and button elements, with events. You can read the docs on DOM Manipulation and Events. You can view a demo here.

// '''Lab 10: Average Numbers
// We're going to average a list of numbers. 

// through it, keeping a 'running sum', then 
// divide that sum by the number of elements
//  in that list. Remember len will give you the length of a list.

// The code below hows how to loop through an array, 
// and prints the elements one at a time.

// nums = [5, 0, 8, 3, 4, 1, 6]

// // # loop over the elements
// for num in nums:
// alert(num)

// // # loop over the indices
// for i in range(len(nums)):
//     alert(nums[i])

// // # ANSWER
// nums = []
// i = 0

// while i < 5:
//     user_input = input("enter a number 1-10 or done if you would like to exit: ")
//     if user_input != "done":
//         int_num = int(user_input)
//         nums.append(user_input)
//         print(nums)
//         i += 1
//     elif user_input == "done":
//         nums = [int(i) for i in nums]
//         average = sum(nums) / len(nums)
//         alert(average)
// else:
//         nums = [int(i) for i in nums]
//         average = sum(nums) / len(nums)
//         alert(average)


let nums = []
let i = 1;
const total = (accumulator,currentValue) => accumulator + currentValue;
while (i <5){
    user_input = prompt("enter a number 1-10 or done if you would like to exit: ");
    if (user_input != "done"){
        int_num = parseInt(user_input);
        nums.push(int_num);
        console.log(nums)
   
    } else if (user_input === "done"){
        // nums = [parseInt(i) for i in nums]
        console.log("above reduce")
        totaltwo = nums.reduce(total)
        console.log(nums.reduce(total)) 
        for(i in nums){
            console.log(i);
            // -------- not taking the average -----
            // alert(average)
        }
        console.log(totaltwo/i)
        
    } 
    // else {
    //         for (i in nums) {
    //         // -------- average not working
    //         average = nums.reduce(function(){}) / nums.length
    //         alert(average)
    //         }
    //     }
}




// # Version 2
// # Ask the user to enter the numbers one at a time, 
// # putting them into a list. If the user enters 'done',
// # then calculate and display the average. 
// # The following code demonstrates how to add an
// # element to the end of a list.

// # nums = []
// # nums.append(5)
// # print(nums)
// # Below is an example input/output:

// # > enter a number, or 'done': 5
// # > enter a number, or 'done': 3
// # > enter a number, or 'done': 4
// # > enter a number, or 'done': done
// # average: 4



// numbers = []

// while True:
//     user_input = input("Enter your numbers then type done: ")
//     if user_input == "done": 
//         numbers.pop(-1)      
//         average_num = sum(numbers)/ len(numbers)
//         print(f"Your average numer is {average_num}") 
//     else:
//         numbers.append(int(user_input))
//         print(numbers)
let numbers = []

while (true) {
    user_input = prompt("Enter your numbers then type done");
    if(user_input == "done") {
        numbers.pop(-1)
        average_num = sum(numbers)/length(numbers)
        alert(`Your average number is ${average_num}`)
    }else {
        numbers.append(int(user_input))
        alert(numbers)
        }
}







const average_title = document.getElementById("title");

// const eightball_title = document.querySelector("#title")
// const sect = document.querySelector("secttion")
// const home = document.querySelector("#button")
// const text = document.createElement("")
// text.textContent= "Welcome to eightball"
// sect.appendChild(text)



