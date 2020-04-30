// let howLongString = prompt("How many characters in your password?")
// let howLong = parseInt(howLongString, 10);
// console.log(howLong);
// //how long they would like their password

// let stringaling = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// function makeLetters(stringaling) {
//     let individualChars = stringaling.split('');
// console.log(individualChars)};

// makeLetters(stringaling)

// function randomCharacter(individualChars) {
//     return individualChars[Math.floor(Math.random() * howlong)];
// };

// console.log( randomCharacter() )

//user can set desired password length
let passwordLength = prompt("how many characters in your password?");
console.log(passwordLength);

//we have a characterset with upper, lower, special, and ints
let charSet = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ");
let new_charSet = charSet.split(''); //split it up!
console.log(new_charSet); //beautiful!

//I need random indexes, as long as passwordLength -1 


applesauce = function randomNumber(passwordLength) {
    return (passwordLength-1)}

console.log(applesauce);

function getRandomIndex(applesauce) {
    return Math.random() * (applesauce - 0) + 0;
}

bbq = getRandomIndex()


text = "<ul>";
for (i = 0; i <= passwordLength; i++) {
    text += "<li>" + new_charSet[Math.random(bbq)] + "</li>"
};
text += "</ul>";

document.getElementById("passgen").innerHTML = text;