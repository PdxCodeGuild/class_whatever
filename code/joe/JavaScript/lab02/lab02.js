let input = prompt("Enter string to encrypt")
let to_rot = Number(prompt("Number to rotate by"));
let final_str = ""

for(let i = 0; i < input.length; ++i) {
    if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91){
        final_str += String.fromCharCode((input.charCodeAt(i) - 65 + to_rot) % 26 + 65);
    } else if (input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) {
        final_str += String.fromCharCode((input.charCodeAt(i) - 97 + to_rot) % 26 + 97);
    } else {
        final_str += input.charAt(i);
    }
}

alert(final_str)