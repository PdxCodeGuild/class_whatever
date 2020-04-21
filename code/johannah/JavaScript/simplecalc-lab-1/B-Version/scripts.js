let num1 = document.getElementById("num1");
let op_input = document.getElementById("op_input");
let num2 = document.getElementById("num2");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

// console.log(num1)
// console.log(op_input)
// console.log(num2)

// function calculate() {}

// button.onclick = function()

const operation = ["+", "-", "*", "/"]

btn.addEventListener("click", function() {
  // let op_input = document.getElementById("op_input");
  let num1_val = Number(num1.value);
  let op_val = op_input.value;
  let num2_val = Number(num2.value);
  console.log(num1_val)
  console.log(op_val)
  console.log(num2_val)
  if (op_val === "+") {
    const add = num1_val + num2_val
    console.log(add)
    // const add = `${num1_val} ${op_input_val} ${num2_val}`
    // alert(`${num1} ${op_input} ${num2} = ${add}`);
    // let output = document.getElementById("output")
    // output.innerText = `${num1} ${op_input} ${num2} = ${add}`;
    output.innerText = add;
    // const added = `${num1} ${op_input} ${num2} = ${add}`;
    // document.getElementById(output).appendChild(added);
    // p.appendChild(added);
    // p.show(added);

  } else if (op_val === "-") {
    const subtract = num1_val - num2_val
    // output.innerText = `${num1} ${op_input} ${num2} = ${subtract}`;
    output.innerText = subtract;
    
  } else if (op_val === "*") {
    const multiply = num1_val * num2_val
    // output.innerText = `${num1} ${op_input} ${num2} = ${multiply}`;
    output.innerText = multiply;
    
  } else if (op_val === "/") {
    const divide = num1_val / num2_val
    // output.innerText = `${num1} ${op_input} ${num2} = ${divide}`;
    output.innerText = divide;
    
  } else {
    output.innerText = "Invalid input";
  }
});