var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue,outputTypeValue;

input.addEventListener("keyup",Output);
inputType.addEventListener("change",Output);
outputType.addEventListener("change",Output);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function Output(){

  inputTypeValue = inputType.value;
  outputTypeValue = outputType.value;

  let user_input = input.value

  total = 0

  let split = user_input.split(" ");

  for(var i=0; i<split.length;i++) 
    split[i] = parseInt(split[i], 10)

  var i;
  for (i = 0; i < split.length; i++) {
    total += split[i];
  }

  average = total/split.length

  if(inputTypeValue === "input" && outputTypeValue === "output"){
    output.value = average;

  }

}

// function Output(){

//   nums2 = []

//   while True:

  //   user_input = prompt("pick a number:")

  //   nums2.append(user_input)

  //   if (user_input == "done"){
  //     nums2.pop();
  //   }

  // var i;
  // for (i = 0; i < nums.length; i++) {
  //   total += nums[i];
  
  // }
  //   answer = (total/nums2.length)
  //     break

//     do {
//         function myappend() {
//         var num_two = [];
//         var i = prompt("Enter a number");
//         var i_two = parseInt(i)
//         num_two += i_two;
//         i++;
//         }
//     while (i < 5);

// alert(num_two/num_two.length);
// console.log(num_two/num_two.length);

// let user_input = prompt("Enter an array:");

// var sum = 0;
// for(var i in user_input) {
//     sum += user_input[i];

// var length = user_input.length;

// var average = sum / length;

// let (inputTypeValue === "." && outputTypeValue === "."){
//   output.value = input.value;
// }
 
// var sum = 0;
// for(var i in user_input) {
//     sum += user_input[i];
// }
// 
 
// 
 

// function Average(user_input){

//   inputTypeValue = inputType.value;
//   outputTypeValue = outputType.value;
  
//   var sum = 0;
//   for(var i in user_input) {
//       sum += user_input[i];
//   }

//   var length = user_input.length;

//   return (sum / length);
