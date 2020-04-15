function blackjack(card_1, card_2, card_3){
    let card_to_value = {'A': 1, '2': 2, '3' : 3, '4' : 4, '5': 5, '6': 6, '7' : 7, '8' : 8, '9': 9, '10': 10, 'J' : 10, 'Q': 10, 'K': 10}
    let x = card_to_value[card_1]
    let y = card_to_value[card_2]
    let z = card_to_value[card_3]
    let total = x + y + z 
    if (total===21){
        return `${total.toString()}. Blackjack!`
    }
    else if (total < 17){
        return `${total.toString()}. Blackjack!`
    }
    else if (16 < total < 21){
        return `${total.toString()}. Blackjack!`
    }
    else {
        return `${total.toString()}. Blackjack!`
    }
}

let card_1 = prompt("pick a card (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K): ").toUpperCase()
let card_2 = prompt("pick another card (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K): ").toUpperCase()
let card_3 = prompt("pick another card (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K): ").toUpperCase()
alert(blackjack(card_1, card_2, card_3))