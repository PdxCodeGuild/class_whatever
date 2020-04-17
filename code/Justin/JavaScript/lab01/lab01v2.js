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

	if(inputTypeValue === "meter" && outputTypeValue==="kilometer"){
        output.value = Number(input.value) * 0.001;
        
	}else if(inputTypeValue === "meter" && outputTypeValue==="Centimeter"){
		output.value = Number(input.value) * 100;

	}else if(inputTypeValue === "meter" && outputTypeValue==="meter"){
        output.value = input.value
        
	}

	if(inputTypeValue === "kilometer" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 1000;
        
	}else if(inputTypeValue === "kilometer" && outputTypeValue==="Centimeter"){
        output.value = Number(input.value) * 100000;
        
	}else if(inputTypeValue === "kilometre" && outputTypeValue==="kilometer"){
		output.value = input.value
	}

	if(inputTypeValue === "Centimeter" && outputTypeValue==="kilometer"){
        output.value = Number(input.value) * 0.00001;
        
	}else if(inputTypeValue === "Centimeter" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 0.01;
        
	}else if(inputTypeValue === "Centimeter" && outputTypeValue==="Centimeter"){
		output.value = input.value
	}
	





}
