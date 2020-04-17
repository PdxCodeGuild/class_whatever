
var num;
var sum = 0;
var average;
var numbers = [];
do{
    var num = prompt("Please enter a number(enter done to quit)", "");
    if(num != "done"){
    numbers.push(num);
    }
}while(num != "done")
for(i = 0;i < numbers.length;i++){
    sum = sum + parseInt(numbers[i]);
}
average = sum/numbers.length;
alert("Average is: " + average);
