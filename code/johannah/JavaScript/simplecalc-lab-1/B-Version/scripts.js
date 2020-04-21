// let user_input = document.getElementById("user_input");
let num1 = document.getElementById("num1");
let op_input = document.getElementById("op_input");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

// function calculate() {}

// button.onclick = function()

const operation = ["+", "-", "*", "/"]

btn.addEventListener("click", function() {
  let op_input = document.getElementById("op_input");
  if (op_input === "+") {
    const add = num1 + num2
    // alert(`${num1} ${op_input} ${num2} = ${add}`);
    // let output = document.getElementById("output")
    // output.innerText = `${num1} ${op_input} ${num2} = ${add}`;
    output.innerText = add;
    // const added = `${num1} ${op_input} ${num2} = ${add}`;
    // document.getElementById(output).appendChild(added);
    // p.appendChild(added);
    // p.show(added);

  } else if (op_input === "-") {
    const subtract = num1 - num2
    // output.innerText = `${num1} ${op_input} ${num2} = ${subtract}`;
    output.innerText = subtract;
    
  } else if (op_input === "*") {
    const multiply = num1 * num2
    // output.innerText = `${num1} ${op_input} ${num2} = ${multiply}`;
    output.innerText = multiply;
    
  } else if (op_input === "/") {
    const divide = num1 / num2
    // output.innerText = `${num1} ${op_input} ${num2} = ${divide}`;
    output.innerText = divide;
    
  } else {
    output.innerText = "Invalid input";
  }
});