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
        return `${total.toString()}. Draw!`
    }
    else if (total > 16 & total < 21){
        return `${total.toString()}. Hold`
    }
    else if (total > 21){
        return `${total.toString()}. Busted!`
    }
}

let bt =  document.getElementById('bt')
let div = document.getElementById('result-container')
let body = document.querySelector('body')
bt.addEventListener('click', () => {
    let card_1 = document.getElementById('card1').value.toUpperCase()
    console.log(card_1)
    let card_2 = document.getElementById('card2').value.toUpperCase()
    console.log(card_2)
    let card_3 = document.getElementById('card3').value.toUpperCase()
    console.log(card_3)
    let result= blackjack(card_1, card_2, card_3)
    let exception= "Please check your entries and try again!"
    console.log(result)
    let new_div=document.getElementById('result-container')
    if (result.nodeValue==="undefined"){
        result=exception
        div.innerText=result
    }
    else {
        div.innerText=result
    }
})

// let card_1 = document.getElementById('card1').value.toUpperCase()
// let card_2 = document.getElementById('card2').value.toUpperCase()
// let card_3 = document.getElementById('card3').value.toUpperCase()
// alert(blackjack(card_1, card_2, card_3))

