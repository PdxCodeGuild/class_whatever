let user_input = document.getElementById('user_input');
let btn = document.getElementById("btn");
let output = document.getElementById('output');

// let input = user_input.value;
// console.log(input);

// let user_input = parseInt(prompt('Enter a whole number 0 to 999 to determine its English representation: '))

// const hundreds_digit = Math.floor(user_input / 100);
// const ones_digit = user_input % 10;

const under_twenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

btn.addEventListener("click", function() {
  let input = user_input.value;
  const hundreds_digit = Math.floor(input / 100);
  const ones_digit = input % 10;
  console.log(input);
  if (input == 0) {
    // alert("zero")
    console.log("zero");
    // output.innerText = "zero";
    output.innerText = "zero";
    // document.getElementById("output").innerHTML = x
  } else if (input < 20) {
    tens_digit = Math.floor(input / 10);
    // alert(under_twenty[user_input]);
    console.log(under_twenty[input]);
    output.innerText = under_twenty[input];
  } else if (20 <= input && input <= 99) {
    tens_digit = Math.floor(input / 10);
    // alert(tens[tens_digit] + ' ' + under_twenty[ones_digit]);
    console.log(tens[tens_digit])
    console.log(under_twenty[ones_digit])
    console.log(tens[tens_digit] + ' ' + under_twenty[ones_digit]);
    output.innerText = tens[tens_digit] + ' ' + under_twenty[ones_digit];
  } else if (100 <= input && input <= 119) {
    tens_digit = Math.floor(input / 10);
    // alert(hundreds[hundreds_digit] + ' ' + under_twenty[user_input - (hundreds_digit * 100)]);
    console.log(hundreds[hundreds_digit] + ' ' + under_twenty[input - (hundreds_digit * 100)]);
    output.innerText = hundreds[hundreds_digit] + ' ' + under_twenty[input - (hundreds_digit * 100)];
  } else {
    tens_digit = Math.floor((input - (hundreds_digit * 100)) / 10);
    // alert(hundreds[hundreds_digit] + ' ' + tens[tens_digit] + ' ' + under_twenty[ones_digit]);
    console.log(hundreds[hundreds_digit] + ' ' + tens[tens_digit] + ' ' + under_twenty[ones_digit]);
    output.innerText = hundreds[hundreds_digit] + ' ' + tens[tens_digit] + ' ' + under_twenty[ones_digit];
  }
});
