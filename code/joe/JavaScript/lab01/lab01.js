// Python Lab 10: Average Numbers

let num_list = [];
let input = "";

while (input !== "quit") {
    input = prompt("Enter a number or 'quit'");
    if (input !== "quit") {
        num_list.push(Number(input));
    }
}

let total = 0

num_list.forEach(function(x) {
    total += x;
});

let average = total / num_list.length;

alert(`The average is ${average}`);