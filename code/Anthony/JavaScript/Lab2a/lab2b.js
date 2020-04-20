var num;
var sum = 0;
var average;
var numbers = [];
function addNumber(){
    var num = document.getElementById("number").value;
    if (num != "done"){
        numbers.push(num);
    }
}
function calculateAverage(){
    for(i = 0;i < numbers.length;i++){
        sum = sum + parseInt(numbers[i]);
    }
    average = sum/numbers.length;
    document.getElementById("result").innerHTML = "Average is: " + average
    
}