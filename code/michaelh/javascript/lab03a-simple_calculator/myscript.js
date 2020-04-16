// # Lab 11: Simple Calculator
// Let's write a simple REPL (read evaluate print loop) calculator that can handle addition, subtraction, multiplication, and division. Ask the user for an operator and each operand. Don't forget that `input` returns a `string`, which you can convert to a float using `float(user_input)` where `user_input` is the string you got from `input`. Below is some sample input/output.
// > What is the operation you'd like to perform? +
// > What is the first number? 5
// > What is the second number? 12
// > 5 + 12 = 17
// ## Version 2
// Allow the user to keep performing operations until they say 'done'. Use `while True` and `break`. Below is some sample input/output.
// > what is the operation you'd like to perform? +
// > what is the first number? 5
// > what is the second number? 12
// > 5 + 12 = 17
// > what is the operation you'd like to perform? done
// > goodbye! 
// ## Version 3 (optional)
// Allow the user to enter a full arithmetic expression and use [eval](https://docs.python.org/3/library/functions.html#eval) to evaluate it.
let operation = ''
let first_num = ''
let second_num = ''
let result = 0

do {
    operation = prompt('What is the operation you would like to perform?');
    if (operation === 'done') {
        break;
    }
    first_num = prompt('What is the first number?');
    second_num = prompt('What is the second number?');
    
    if (operation === '+'){
        result = parseFloat(first_num) + parseFloat(second_num);
    } else if (operation === '-') {
        result = parseFloat(first_num) - parseFloat(second_num);
    } else if (operation === '*') {
        result = parseFloat(first_num) * parseFloat(second_num);
    } else {
        result = parseFloat(first_num) / parseFloat(second_num);
    }
    alert(`${first_num} ${operation} ${second_num} = ${result.toString()}`)
} while (true);
alert('Bye')