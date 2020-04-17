let options = ["rock", "paper", "scissors"];
let comChoice,userChoice,result;
userChoice = prompt('Please enter your choice("rock", "paper", "scissors")', '');
let randomChoice = Math.floor((Math.random() * 3) + 0);
comChoice = options[randomChoice];

if (userChoice === comChoice) {
        result = "It's a tie!";
    }
    if (userChoice === "rock") {
        if (comChoice === "scissors") {
           
            result = "You win!";
        } else {
           
            result = "You lose! Computer win.";
        }
    }
    if (userChoice === "paper") {
        if (comChoice === "rock") {
            
            result = "You win!";
        } else {
           
            result = "You lose! Computer win.";
        }
    }
    if (userChoice === "scissors") {
        if (comChoice === "rock") {
            result = "You lose! Computer win.";
        } else {
           
            result = "You win!";
        }
    }
 alert(result);