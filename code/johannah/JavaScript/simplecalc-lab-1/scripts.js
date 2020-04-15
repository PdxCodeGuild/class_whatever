// 1. Ask the user for an operator and each operand. Don't forget that input returns a string, which you can convert to a float using float(user_input) where user_input is the string you got from input. Below is some sample input/output.
//   > What is the operation you'd like to perform? +
//   > What is the first number? 5
//   > What is the second number? 12
//   > 5 + 12 = 17

// 2. Allow the user to keep performing operations until they say 'done'. Use while True and break. Below is some sample input/output.
//   > what is the operation you'd like to perform? +
//   > what is the first number? 5
//   > what is the second number? 12
//   > 5 + 12 = 17
//   > what is the operation you'd like to perform? done
//   > goodbye!

let name_input = document.querySelector('#name_input');
let run_bt = document.querySelector('#run_bt');
let output_div = document.querySelector('#output_div');
const operation = ["+", "-", "*", "/"]
run_bt.onclick = function() {
  const op_input = prompt("What is the operation you'd like to perform (+, -, *, or /) or type done: ")
  if (op_input === "done") {
    break;
  } else if (op_input in op_input) {
    let num1 = float(prompt("first number: "));
    let num2 = float(prompt("second number: "));
    if (op_input === "+") {
      alert(`${num1} ${op_input} ${num2} = `);
      alert(num1 + num2);
    } else if (op_input === "-") {
      alert(`${num1} ${op_input} ${num2} = `);
      alert(num1 - num2);
    } else if (op_input === "*") {
      alert(`${num1} ${op_input} ${num2} = `);
      alert(num1 * num2);
    } else if (op_input === "/") {
      alert(`${num1} ${op_input} ${num2} = `);
      alert(num1 / num2);
    } else {
      alert("Invalid input");
    }
  }
}