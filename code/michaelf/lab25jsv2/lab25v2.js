class ATM {
    constructor(balance=0){
        this.balance = balance
        this.transactions=[]
    }
    check_balance(){
        return this.balance
    }
    deposit(amount){
        this.amount=amount
        this.balance += this.amount
        this.transactions.unshift(` user deposited ${this.amount}`)
        return `user deposited ${this.amount}, current balance is ${this.balance}`
    }
    check_withdraw(amount){
        this.amount=amount
        return this.amount <= this.balance
    }
    withdraw(amount){
        this.amount = amount
        this.balance -= this.amount
        this.transactions.unshift(` user withdrew ${this.amount}`)
        return `user withdrew ${this.amount}, current balance is ${this.balance}`
    }
    alert_transactions(){
        return this.transactions
    }

}

let account1=new ATM

let check = document.getElementById('check')
let deposit = document.getElementById('deposit')
let withdraw = document.getElementById('withdraw')
let history = document.getElementById('history')
let quit = document.getElementById('quit')
let div= document.querySelector('div')


check.addEventListener('click', function(){
    div.innerText=account1.check_balance()
})
deposit.addEventListener('click', function(){
    let amount=parseInt(prompt("How much would you like to deposit? "))
    div.innerText= account1.deposit(amount)
})
withdraw.addEventListener('click', function(){
    let amount=parseInt(prompt("How much would you like to withdraw? "))
    if (account1.check_withdraw(amount)){
        div.innerText= account1.withdraw(amount)
    }
    else{
        alert('Insufficient Funds.')
    }
})

history.addEventListener('click', function(){
    alert(account1.alert_transactions())
})
quit.addEventListener('click', function(){
    
})

// let account1=new ATM

// while (true){
//     let user_choice = prompt("1. check balance\n2. deposit\n3. withdrawal\n4. transaction history\n5. quit\n>>> ")

//     if (user_choice === "1"){
//         alert(account1.check_balance())
//     }
        
//     else if (user_choice === "2"){
//         amount = parseFloat(prompt("how much would you like to deposit? "))
//         alert(account1.deposit(amount))
//     }

//     else if (user_choice === "3"){
//         amount = parseFloat(prompt("How much would you like to withdraw? "))
//         if (account1.check_withdraw(amount)){
//             alert(account1.withdraw(amount))
//         }     
//         else{
//             alert("Insufficient funds.")
//         }
//     }
//     else if (user_choice === "4"){
//         account1.alert_transactions()
//     }
//     else if (user_choice === "5"){
//         break
//     }
//     else{
//         alert("I'm sorry, i don't understand. Please try again.")
//     }

// }   