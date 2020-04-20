// let user_input = document.getElementById("user_input");
let num1 = document.getElementById("num1");
// let op_input = document.getElementById("op_input");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

// function calculate() {}

// button.onclick = function()

const operation = ["+", "-", "*", "/"]

btn.addEventListener("click", function() {
  while (true) {
    let op_input = document.getElementById("op_input");
    if (op_input === "done") {
      break;
    } else {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      if (op_input === "+") {
        const add = num1 + num2
        // alert(`${num1} ${op_input} ${num2} = ${add}`);
        // let output = document.getElementById("output")
        output.innerText = `${num1} ${op_input} ${num2} = ${add}`;

      } else if (op_input === "-") {
        const subtract = num1 - num2
        output.innerText = `${num1} ${op_input} ${num2} = ${subtract}`;
        
      } else if (op_input === "*") {
        const multiply = num1 * num2
        output.innerText = `${num1} ${op_input} ${num2} = ${multiply}`;
        
      } else if (op_input === "/") {
        const divide = num1 / num2
        output.innerText = `${num1} ${op_input} ${num2} = ${divide}`;
        
      } else {
        output.innerText = "Invalid input";
      }
    }
  }
});