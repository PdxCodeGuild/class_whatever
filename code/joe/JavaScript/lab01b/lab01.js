// Python Lab 10: Average Numbers

/*** Version 2 ***/
const num_in = document.getElementById("num_in");
const enter = document.getElementById("enter");
const output = document.getElementById("output");

let total = 0;
let nums = 0;

enter.onclick = function() {
    if(num_in.value !== "quit") {
        total += Number(num_in.value);
        ++nums;
    } else {
        output.innerText = "The average is " + (total / nums);
        total = 0;
        nums = 0;
    }
}