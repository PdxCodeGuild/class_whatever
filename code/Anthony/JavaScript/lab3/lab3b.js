function playGame(){
    var options = ["rock", "paper", "scissors"];
    var comChoice,userChoice,result;
    userChoice = document.getElementById("userChoice").value ;
    userChoice = userChoice.toLowerCase();
    var randomChoice = Math.floor((Math.random() * 3) + 0);
    comChoice = options[randomChoice];

    if (userChoice === comChoice) {
            result = "It's a tie!";
        }
        if (userChoice === "rock") {
            if (comChoice === "scissors") {
                
                result = "You Win!";
            } else {
                
                result = "You lose! Computer Win.";
            }
        }
        if (userChoice === "paper") {
            if (comChoice === "rock") {
                
                result = "You Win!";
            } else {
                
                result = "You lose! Computer Win.";
            }
        }
        if (userChoice === "scissors") {
            if (comChoice === "rock") {
                result = "You lose! Computer Win.";
            } else {
                
                result = "You Win!";
            }
        }

        document.getElementById("result").innerHTML = result;
}