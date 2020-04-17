// Pick 3 Python labs and re-do them in JavaScript. You should first try to write them using JavaScript's prompt and alert in place of Python's input and print.

// Once you have that working, use input and button elements, with events. You can read the docs on DOM Manipulation and Events. You can view a demo here.

// '''Lab 10: Average Numbers

let input_box = document.getElementById("input_box")

let submit_button = document.getElementById('button');
submit_button.addEventListener('click', average);

let done_button = document.getElementById("done");
done_button.addEventListener("click", average_1);

let nums = []
function average () {
    box = Number(input_box.value) 
    nums.push(box)
    console.log(nums)
}


function average_1() {
    const summation = (accumulator,currentValue) => accumulator + currentValue;
    total = nums.reduce(summation);
    x = nums.length;
    average = (total/x);
    // ------------create & append Elements  -------------
    var p = document.createElement("p"); //let variab =error
    var text = document.createTextNode(`Your average number is ${average}`);
    p.appendChild(text)
    document.body.append(p)
}



// -------------- OLD JAVASCRIPT -------------

// function average() {  
//     let user_input = parseFloat(user_input.value) 
//     let nums = []
//     let i = 1;
  

//     while (i <5){
//         if (user_input != "done"){
//             int_num = parseInt(user_input);
//             nums.push(int_num);
//             // console.log(nums)
            
    
//         } else if (user_input === "done"){
//             // nums = [parseInt(i) for i in nums]
//             console.log("above reduce");
//             totaltwo = nums.reduce(total);
//             console.log(nums.reduce(total));
//             for(i in nums){
//                 console.log(i);
//             }
//             average_one = (totaltwo/i)
//             average.innerText = average_one
//             console.log(average)
        
            
//         } else {
//                 for (i in nums) {
//                 // average = nums.reduce(function(){}) / nums.length
//                 alert(average)
//                 }
//             }
//     }
// }




// # Version 2
// # Ask the user to enter the numbers one at a time, 
// # putting them into a list. If the user enters 'done',
// # then calculate and display the average. 
// # The following code demonstrates how to add an
// # element to the end of a list.


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

// -------- JAVASCRIPT ANSWER  --------------------

// let numbers = []

// while (true) {
//     user_input = prompt("Enter your numbers then type done");
//     if(user_input == "done") {
//         numbers.pop(-1)
//         totaltwo = numbers.reduce(total)
//         console.log(totaltwo.length)
//         console.log(average)
//         average = (totaltwo/totaltwo.length)

//         alert(`Your average number is ${average}`)
//     }else {
//         numbers.push(parseInt(user_input))
//         alert(numbers)
//         }
// }











