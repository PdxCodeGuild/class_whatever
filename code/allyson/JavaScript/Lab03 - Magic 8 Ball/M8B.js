//Emoticon Generator//

let majik_event = document.querySelector('#majikaitbol')
var btn = document.createElement('BUTTON')

function random_element(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
button_submit.addEventListener('click', function () {
    let majik = ["As I see it, yes",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don’t count on it",
        "It is certain",
        "It is decidedly so",
        "Most likely",
        "My reply is no",
        "My sources say no",
        "Outlook good",
        "Outlook not so good",
        "Reply hazy try again",
        "Signs point to yes",
        "Very doubtful",
        "Without a doubt",
        "Yes",
        "Yes, definitely",
        "You may rely on it",
        "Don't swipe right",
        "Why ask me?",
        "Consult a psychiatrist... Please",
        "Out To Lunch"
    ]

    majik_event.innerText =
        random_element(majik)
})