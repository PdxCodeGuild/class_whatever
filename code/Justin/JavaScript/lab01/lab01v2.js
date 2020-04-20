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
        
	}else if(inputTypeValue === "meter" && outputTypeValue==="feet"){
		output.value = Number(input.value) * 0.305;

	}else if(inputTypeValue === "meter" && outputTypeValue==="meter"){
        output.value = input.value
        
	}else if(inputTypeValue === "meter" && outputTypeValue==="inch"){
        output.value = Number(input.value) * 0.025;
        
	}else if(inputTypeValue === "meter" && outputTypeValue==="yard"){
        output.value = Number(input.value) * 0.914;
        
	}else if(inputTypeValue === "meter" && outputTypeValue==="miles"){
        output.value = Number(input.value) * 1609;
        
	}

	if(inputTypeValue === "kilometer" && outputTypeValue==="kilometer"){
        output.value = input.value
        
	}else if(inputTypeValue === "kilometer" && outputTypeValue==="feet"){
		output.value = Number(input.value) * 3280;

	}else if(inputTypeValue === "kilometer" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 1000;
        
	}else if(inputTypeValue === "kilometer" && outputTypeValue==="inch"){
        output.value = Number(input.value) * 39370;
        
	}else if(inputTypeValue === "kilometer" && outputTypeValue==="yard"){
        output.value = Number(input.value) * 1093;
        
	}else if(inputTypeValue === "kilometer" && outputTypeValue==="miles"){
        output.value = Number(input.value) * 1.609;
        
	}

	if(inputTypeValue === "feet" && outputTypeValue==="kilometer"){
        output.value = Number(input.value) * 0.0003;
        
	}else if(inputTypeValue === "feet" && outputTypeValue==="feet"){
		output.value = input.value

	}else if(inputTypeValue === "feet" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 3.281;
        
	}else if(inputTypeValue === "feet" && outputTypeValue==="inch"){
        output.value = Number(input.value) * 12;
        
	}else if(inputTypeValue === "feet" && outputTypeValue==="yard"){
        output.value = Number(input.value) * 3;
        
	}else if(inputTypeValue === "feet" && outputTypeValue==="miles"){
        output.value = Number(input.value) * 0.0001893932;
	}

	if(inputTypeValue === "inch" && outputTypeValue==="kilometer"){
        output.value = Number(input.value) * 0.0000254;
        
	}else if(inputTypeValue === "inch" && outputTypeValue==="feet"){
		output.value = Number(input.value) * 0.0833333333;

	}else if(inputTypeValue === "inch" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 0.0254;
        
	}else if(inputTypeValue === "inch" && outputTypeValue==="inch"){
        output.value = input.value
        
	}else if(inputTypeValue === "inch" && outputTypeValue==="yard"){
        output.value = Number(input.value) * 0.0277777778;
        
	}else if(inputTypeValue === "inch" && outputTypeValue==="miles"){
        output.value = Number(input.value) * 0.0000157828;
	}

	if(inputTypeValue === "yard" && outputTypeValue==="kilometer"){
        output.value = Number(input.value) * 0.0009144;
        
	}else if(inputTypeValue === "yard" && outputTypeValue==="feet"){
		output.value = Number(input.value) * 3;

	}else if(inputTypeValue === "yard" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 0.9144;
        
	}else if(inputTypeValue === "yard" && outputTypeValue==="inch"){
        output.value = Number(input.value) * 36;
        
	}else if(inputTypeValue === "yard" && outputTypeValue==="yard"){
        output.value = input.value
        
	}else if(inputTypeValue === "yard" && outputTypeValue==="miles"){
        output.value = Number(input.value) * 0.0005681797;
	}

	if(inputTypeValue === "miles" && outputTypeValue==="kilometer"){
        output.value = Number(input.value) * 1.60935;
        
	}else if(inputTypeValue === "miles" && outputTypeValue==="feet"){
		output.value = Number(input.value) * 5280.019685;

	}else if(inputTypeValue === "miles" && outputTypeValue==="meter"){
        output.value = Number(input.value) * 1609.35;
        
	}else if(inputTypeValue === "miles" && outputTypeValue==="inch"){
        output.value = Number(input.value) * 63360.23622;
        
	}else if(inputTypeValue === "miles" && outputTypeValue==="yard"){
        output.value = Number(input.value) * 1760.0065617;
        
	}else if(inputTypeValue === "miles" && outputTypeValue==="miles"){
        output.value = input.value
	}
}
