let card1 = prompt("Enter first card").toUpperCase();
let card2 = prompt("Enter second card").toUpperCase();
let card3 = prompt("Enter third card").toUpperCase();

let card_value = function(card) {
    switch(card) {
        case "A": return 1;
        case "2": return 2;
        case "3": return 3;
        case "4": return 4;
        case "5": return 5;
        case "6": return 6;
        case "7": return 7;
        case "8": return 8;
        case "9": return 9;
        case "10":
        case "J":
        case "Q":
        case "K":
            return 10;
        default:
            return card_value(prompt(`${card} is not a valid card, please try again`).toUpperCase());
    }
}

let cards = [];
cards.push(card1);
cards.push(card2);
cards.push(card3);

let aces = 0;
let total = [0];

cards.forEach(function(card) {
    total[0] += card_value(card);
    if(card === "A") {
        ++aces;
    }
});

for(let a = 0; a < aces; ++a) {
    total.push(total[a] + 10);
}

let r_total = 0;
let advice = "";

total.forEach(function(option) {
    if((option < 17) &&  ((r_total < 17) || (r_total > 21))) {
        r_total = option;
        advice = "Hit";
    } else if(option === 21) {
        r_total = option;
        advice = "Blackjack!!!";
    } else if(option > 21 && r_total === 0) {
        r_total = option;
        advice = "Already Busted!";
    } else if(r_total !== 21 && option < 21) {
        r_total = option;
        advice = "Stay";
    }
});

alert(advice + ` (${r_total})`);

