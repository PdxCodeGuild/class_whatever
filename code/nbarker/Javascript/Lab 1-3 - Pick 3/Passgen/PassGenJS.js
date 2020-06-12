function random_list_item(array){
    let random_number = Math.floor(Math.random()*howLong);
    return array[random_number]
}



let howLong = prompt("How many characters in your password?");
console.log(howLong);
//how long they would like their password

let stringaling = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ");

result = '';
for (let i=0; i<howLong; i++){
    result += random_list_item(stringaling);
}

document.getElementById('password').innerHTML = result;

document.getElementById("generate").addEventListener("click", function () {
    document.getElementById("password").innerHTML = result;
});