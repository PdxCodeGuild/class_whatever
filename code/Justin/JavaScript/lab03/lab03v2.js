let array = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9,]

var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue,outputTypeValue;

input.addEventListener("keyup",Peaks);
inputType.addEventListener("change",Peaks);
outputType.addEventListener("change",Peaks);

input.addEventListener("keyup",Valleys);
inputType.addEventListener("change",Valleys);
outputType.addEventListener("change",Valleys);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function Peaks(){

  inputTypeValue = inputType.value;
  outputTypeValue = outputType.value;

  let user_input = input.value

  total = 0

  let split = user_input.split(" ").map(Number);
    
    for (let i=1; i<split.length-1; i++) {
        if (split[i-1] < split[i] && split[i+1] < split[i]) {
            output.value=split[i]
        }
    }

    if(inputTypeValue === "input" && outputTypeValue === "Peaks"){
        output.value = peaks_output;
    }
   
}

function Valleys(){

    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
  
    let user_input_two = input.value
  
    total = 0
  
    let split_two = user_input_two.split(" ").map(Number);
    
        for (let i=1; i<split_two.length-1; i++) {
            if (split_two[i-1] > split_two[i] && split_two[i+1] > split_two[i]) {
                output.value=split_two[i]
            }
        }
        // if(inputTypeValue === "input" && outputTypeValue === "Valleys"){
        //     output.value = valleys_output;
    }

    // function peaks_and_valleys(){

    //     inputTypeValue = inputType.value;
    //     outputTypeValue = outputType.value;
      
    //     let user_input = input.value
      
    //     total = 0
      
    //     let split = user_input.split(" ");
      
    //     for(var i=0; i<split.length;i++) 
    //       split[i] = parseInt(split[i], 10)
      
    //     var i;
    //     for (i = 0; i < split.length; i++) {
    //       total += split[i];
    //     }
    
    //     let peaks_two = Peaks(array);
    //     let valleys_two = Valleys(array);
    //     return peaks_two.concat(valleys_two);
        
    // }
    // if(inputTypeValue === "input" && outputTypeValue === "Peaks and Valleys"){
    //     output.value = peaks_two.concat(valleys_two);
    


