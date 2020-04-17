
let user_input = parseInt(prompt('Enter a whole number 0 to 999 to determine its English representation: '))
const hundreds_digit = Math.floor(user_input / 100)
// const tens_digit = Math.floor(user_input / 10)
const ones_digit = user_input % 10

const under_twenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']

if (user_input === 0) {
  alert("zero")
} else if (user_input < 20) {
  tens_digit = Math.floor(user_input / 10)
  alert(under_twenty[user_input]);
} else if (20 <= user_input && user_input <= 99) {
  tens_digit = Math.floor(user_input / 10)
  alert(tens[tens_digit] + ' ' + under_twenty[ones_digit]);
} else if (100 <= user_input && user_input <= 119) {
  tens_digit = Math.floor(user_input / 10)
  alert(hundreds[hundreds_digit] + ' ' + under_twenty[user_input - (hundreds_digit * 100)]);
} else {
  tens_digit = Math.floor((user_input - (hundreds_digit * 100)) / 10)
  alert(hundreds[hundreds_digit] + ' ' + tens[tens_digit] + ' ' + under_twenty[ones_digit]);
}