const input = document.getElementById("input");
const rot_num = document.getElementById("rot_num");
const enter = document.getElementById("enter");
const output = document.getElementById("output");

enter.onclick = function() {
    let to_rot = Number(rot_num.value);
    let final_str = ""

    for(let i = 0; i < input.value.length; ++i) {
        if (input.value.charCodeAt(i) > 64 && input.value.charCodeAt(i) < 91){
            final_str += String.fromCharCode((input.value.charCodeAt(i) - 65 + to_rot) % 26 + 65);
        } else if (input.value.charCodeAt(i) > 96 && input.value.charCodeAt(i) < 123) {
            final_str += String.fromCharCode((input.value.charCodeAt(i) - 97 + to_rot) % 26 + 97);
        } else {
            final_str += input.value.charAt(i);
        }
    }

    output.innerText = final_str
}