let phrase=prompt("give me a phrase to encode:").toLowerCase().split('')
let rot=prompt("give me the number of rotation you'd like for your encryption: ")

function rot_encryption(phrase, rot) {
    let english = "abcdefghijklmnopqrstuvwxyz".split('')
    let encode = english
    let encoded_dict={}
    let encoded= []
    for (let i=0; i < 26; i++){
        encoded_dict[english[i]] = encode[i-rot]
    }
    let encoded = [encoded_dict.map()]
}

console.log(rot_encryption(phrase, rot))