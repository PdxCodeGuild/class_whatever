// window.alert("Hi");
// console.log("Hello");

// let name_input = document.querySelector('#name_input');
// let run_bt = document.querySelector('#run_bt');
// let output_div = document.querySelector('#output_div');
const operation = ["+", "-", "*", "/"]
while (true) {
  const op_input = prompt("What is the operation you'd like to perform (+, -, *, or /) or type done: ")
  if (op_input === "done") {
    break;
  } else {
    let num1 = parseFloat(prompt("first number: "));
    let num2 = parseFloat(prompt("second number: "));
    if (op_input === "+") {
      const add = num1 + num2
      alert(`${num1} ${op_input} ${num2} = ${add}`);

    } else if (op_input === "-") {
      const subtract = num1 - num2
      alert(`${num1} ${op_input} ${num2} = ${subtract}`);
      
    } else if (op_input === "*") {
      const multiply = num1 * num2
      alert(`${num1} ${op_input} ${num2} = ${multiply}`);
      
    } else if (op_input === "/") {
      const divide = num1 / num2
      alert(`${num1} ${op_input} ${num2} = ${divide}`);
      
    } else {
      alert("Invalid input");
    }
  }
}
// run_bt.onclick = function() {

// }