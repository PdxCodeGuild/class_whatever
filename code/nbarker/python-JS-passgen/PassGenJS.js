
//a lot going on here! the first 2 are syncing the range slider and number, defining variables for length of password
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

//these are the checkbox elements, and form info the toggle is in the lower event listener(submit)
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//corresponding character codes, i was so ready to type all of that shit in!
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
    arrayFromLowToHigh(91, 96)
    ).concat(
    arrayFromLowToHigh(123, 126)
    )
characterAmountNumber.addEventListener('input', syncCharacterAmount) //on INPUT sync these puppies!
characterAmountRange.addEventListener('input', syncCharacterAmount) //puppies being the slider and counter

form.addEventListener('submit', e=> {  //when you press the submit button
    e.preventDefault() //
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) //takes ALL of the info from our form
    passwordDisplay.innerText = password
})

//make the password function after you know what you're putting in it!
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    const passwordCharacters = []
    for ( let i = 0; i < characterAmount; i++ ) { //add 1 to loop until we have proper length
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)] //random number between 0 and nour amount, making sure it's an integer with math.floor, give us our charactercode
        passwordCharacters.push(String.fromCharCode(characterCode)) //in order to get character, we need random value from list of character codes
    }
    return passwordCharacters.join('') //join on empty string, turn our array into a string

}

function arrayFromLowToHigh(low, high) { 
    const array = []//we can write a function to make our arrays for us!
    for (let i = low; i <= high; i++) {//loopping through all variables until the low becomes the high
    array.push(i) //generates array from low to high
 }
 return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value //set both values to the same, thus they will update together
    characterAmountRange.value = value
}