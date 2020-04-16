let result_output = ''
let user_input = prompt("Enter a word/phrase/sentence (letters only) to find out each character's ROT13 correspondence: ")
const input_lowered = user_input.toLowerCase()
alert(input_lowered)

const chars = 'abcdefghijklmnopqrstuvwxyz'

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

for (let i=0; i<input_lowered.length; i++) {
  console.log(i)
  let index_of_letter = parseInt(chars.search(input_lowered[i]))
  console.log(index_of_letter)
  // alert(input_lowered[i])
  // # index of letter in input_lowered
  let index_for_chars = index_of_letter + 13
  console.log(index_for_chars)
  // # index of chars to be translated back to letters in ROT13
  // let result_output = ''
  if ((index_for_chars) > 25) {
    let index_of_chars_thirteen = index_for_chars - 26
    console.log(index_of_chars_thirteen)
    // alert(chars[index_of_chars_thirteen])
    // result_output += (chars[index_of_chars_thirteen])
    // let result_output = result_output + (chars[index_of_chars_thirteen])
    result_output.concat(chars[index_of_chars_thirteen])
    console.log(result_output)
    // # new index of chars to be add to result_output
    // alert(result_output)
    // alert(result_output.join(chars[index_of_chars_thirteen]))
  } else {
    // alert(chars[index_for_chars])
    // result_output += (chars[index_for_chars])
    // let result_output = result_output + (chars[index_for_chars])
    result_output.concat(chars[index_for_chars])
    console.log(result_output)
    // alert(result_output)
    // alert(result_output.join(chars[index_for_chars]))
  }
}

alert(result_output)