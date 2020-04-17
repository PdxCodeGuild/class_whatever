let result_output = ''
let user_input = prompt("Enter a word/phrase/sentence (letters only) to find out each character's ROT13 correspondence: ")
const input_lowered = user_input.toLowerCase()
alert(input_lowered)

const chars = 'abcdefghijklmnopqrstuvwxyz'

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

for (let i=0; i<input_lowered.length; i++) {
  // console.log(i)
  let index_of_letter = parseInt(chars.search(input_lowered[i]))
  // console.log(index_of_letter)
  let index_for_chars = index_of_letter + 13
  // console.log(index_for_chars)
  if ((index_for_chars) > 25) {
    let index_of_chars_thirteen = index_for_chars - 26
    // console.log(index_of_chars_thirteen)
    result_output += (chars[index_of_chars_thirteen])
    // let result_output = result_output + (chars[index_of_chars_thirteen])
    // result_output.concat(chars[index_of_chars_thirteen])
    // console.log(chars[index_of_chars_thirteen])
    // console.log(result_output)
  } else {
    result_output += (chars[index_for_chars])
    // let result_output = result_output + (chars[index_for_chars])
    // result_output.concat(chars[index_for_chars])
    // console.log(chars[index_for_chars])
    // console.log(result_output)
  }
}

alert(result_output)