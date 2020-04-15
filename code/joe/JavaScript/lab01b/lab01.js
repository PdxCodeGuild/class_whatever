// Python Lab 10: Average Numbers

/*** Version 2 ***/
let num_in = document.querySelector('#num_in');
let enter = document.querySelector('#enter');
let output = document.querySelector('#output');

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