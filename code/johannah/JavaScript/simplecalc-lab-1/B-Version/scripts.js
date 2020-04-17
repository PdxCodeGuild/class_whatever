let user_input = document.getElementById('user_input')
let btn = document.getElementById('btn')
let output = document.getElementById('output')

// function calculate() {}

// button.onclick = function()

const operation = ["+", "-", "*", "/"]
while (true) {
  // const op_input = prompt("What is the operation you'd like to perform (+, -, *, or /) or type done: ")
  const op_input = document.getElementById('op_input')
  if (op_input === "done") {
    break;
  } else {
    // let num1 = parseFloat(prompt("first number: "));
    // let num2 = parseFloat(prompt("second number: "));
    let num1 = parseFloat("first number: ");
    let num2 = parseFloat("second number: ");
    if (op_input === "+") {
      const add = num1 + num2
      // alert(`${num1} ${op_input} ${num2} = ${add}`);

    } else if (op_input === "-") {
      const subtract = num1 - num2
      // alert(`${num1} ${op_input} ${num2} = ${subtract}`);
      
    } else if (op_input === "*") {
      const multiply = num1 * num2
      // alert(`${num1} ${op_input} ${num2} = ${multiply}`);
      
    } else if (op_input === "/") {
      const divide = num1 / num2
      // alert(`${num1} ${op_input} ${num2} = ${divide}`);
      
    } else {
      // alert("Invalid input");
    }
  }
}