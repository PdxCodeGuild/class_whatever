// # Lab 11: Simple Calculator
// # Let's write a simple REPL (read evaluate print loop) 
// # calculator that can handle addition, subtraction,
// #  multiplication, and division. Ask the user for an
// #  operator and each operand. Don't forget that input
// #  returns a string, which you can convert to a float
// #  using float(user_input) where user_input is the string
// #  you got from input. Below is some sample input/output.

//    --------  # ANSWER  --------------------------
// operation = input("What is the operation you\'d like to perform? ")
// first_number = int(input("What is the first number? ") )
// second_number = int(input("What is the second number? "))


// if operation == ("*"):
//     print(first_number * second_number)
// elif operation == ("+"):
//     print(first_number + second_number)
// elif operation == ("-"):
//     print(first_number - second_number)
// elif operation == ("/"):
//     print(first_number / second_number)

// ----------- JAVASCRIPT ANSWER --------------
let submit_button = document.getElementById("submit");
submit_button.addEventListener("click", run);

let done_button = document.getElementById("done_button")
done_button.addEventListener("click", done)


let first_num1 = document.getElementById("first_num");
let second_num1 = document.getElementById("second_num");

function run() {
    let operation = document.getElementById("operation").value;
    let first_num = parseFloat(first_num1.value)
    let second_num = parseFloat(second_num1.value)
    let result;
    console.log(Number(first_num))
    if (operation === "*") {
        console.log(first_num.value)

        result = (first_num * second_num)
       
    } else if (operation === "+") {
        result = (first_num + second_num)
    } else if (operation === "-") {
       result = (first_num - second_num)
    } else if (operation === "/") {
        result = (first_number/second_number)
    }
    console.log(result)
    let p = document.createElement("p");
    let text = document.createTextNode(`Your result is ${result}`);
    p.appendChild(text)
    document.body.append(p)
}

function done() {
    var p01 = document.createElement("p")
    text01 = document.createTextNode("Good-bye")
    p01.appendChild(text01)
    document.body.append(p01)
}







