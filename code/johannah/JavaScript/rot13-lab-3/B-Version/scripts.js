let user_input = document.getElementById('user_input');
let btn = document.getElementById("btn");
let output = document.getElementById('output');

// let input_val = user_input.value;

let result_output = ''
// let user_input = prompt("Enter a word/phrase/sentence (letters only) to find out each character's ROT13 correspondence: ")
// const input_lowered = input_val.toLowerCase();

const chars = 'abcdefghijklmnopqrstuvwxyz'

btn.addEventListener("click", function() {
  let input_val = user_input.value;
  const input_lowered = input_val.toLowerCase();
  
  for (let i=0; i<input_lowered.length; i++) {
    let index_of_letter = parseInt(chars.search(input_lowered[i]))
    let index_for_chars = index_of_letter + 13

    if ((index_for_chars) > 25) {
      let index_of_chars_thirteen = index_for_chars - 26
      result_output += (chars[index_of_chars_thirteen])
      // output.innerText = result_output + (chars[index_of_chars_thirteen])
      // let result_output = result_output + (chars[index_of_chars_thirteen])
    } else {
      result_output += (chars[index_for_chars])
      // output.innerText = result_output + (chars[index_for_chars])
      // let result_output = result_output + (chars[index_for_chars])
    }
  }
  output.innerText = result_output
  // console.log(result_output)
})

// output.innerText = result_output
// console.log(result_output)
// console.log(output)