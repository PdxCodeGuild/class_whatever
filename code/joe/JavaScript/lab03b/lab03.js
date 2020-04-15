let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let enter = document.querySelector("#enter");
let output = document.querySelector("#output");

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
            return 210;
    }
}

enter.onclick = function() {
    let cards = [];
    cards.push(card1.value);
    cards.push(card2.value);
    cards.push(card3.value);

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

    output.innerText = advice + ` (${r_total})`;
}
