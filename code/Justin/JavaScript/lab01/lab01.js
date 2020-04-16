var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue,outputTypeValue;

input.addEventListener("keyup", Result);
inputType.addEventListener("change", Result)
outputType.addEventListener("change", Result)

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;
function Result(){

    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    if (inputTypeValue === "meter" && outputTypeValue === "kilometer"){
        output.value = Number(input.value) = 0.001;

    }else if (inputTypeValue === "meter" && outputTypeValue === "feet"){
        output.value = Number(input.value) = 3.281;

    }else if (inputTypeValue === "meter" && outputTypeValue === "miles"){
        output.value = Number(input.value) = 0.0006;

    }else if (inputTypeValue === "meter" && outputTypeValue === "meter"){
        output.value = input.value
}

