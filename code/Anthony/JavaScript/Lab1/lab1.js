
function Calculator(){
    let operation = true;
while (operation){
    let user_input = prompt("Would you like to do an operation or exit?");
    if (user_input = "exit"){
        console.log("Goodbye");
        break;
    }
    let operation = prompt("Enter the operation: +, - , *: ");
    let operand1 = parseInt(prompt("Enter the first operand: "));
    let operand2 = parseInt(prompt("Enter the second operand: "));

    if (operation === "+"){
        console.log("operand1 + operand2");
    } else if (operation === "-"){
        console.log("operand1 - operand2");
    } else if (operation === "*"){
        console.log("operand1 * operand2");
    } else if (operation === "/"){
        console.log("operand1 / operand2");
    } else {
        console.log("Wrong nput, Pls try again!")
    }
}

}
Calculator();
