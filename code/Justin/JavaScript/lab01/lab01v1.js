// var input = document.getElementById('input');
// var output = document.getElementById('output');
// var inputType = document.getElementById('inputType');
// var outputType = document.getElementById('outputType');
// var inputTypeValue,outputTypeValue;

// input.addEventListener("keyup", Result);
// inputType.addEventListener("change", Result)
// outputType.addEventListener("change", Result)

// inputTypeValue = inputType.value;
// outputTypeValue = outputType.value;
// function Result(){

//     inputTypeValue = inputType.value;
//     outputTypeValue = outputType.value;

//     if (inputTypeValue === "meter" && outputTypeValue === "kilometer"){
//         output.value = Number(input.value) = 0.001;

//     }else if (inputTypeValue === "meter" && outputTypeValue === "feet"){
//         output.value = Number(input.value) = .3048;

//     }else if (inputTypeValue === "meter" && outputTypeValue === "miles"){
//         output.value = Number(input.value) = 1609.34;

//     }else if (inputTypeValue === "meter" && outputTypeValue === "meter"){
//         output.value = input.value
//     }

//     if (inputTypeValue === "kilometer" && outputTypeValue === "kilometer"){
//         output.value = input.value

//     }else if (inputTypeValue === "kilometer" && outputTypeValue === "feet"){
//         output.value = Number(input.value) = .0003;

//     }else if (inputTypeValue === "kilometer" && outputTypeValue === "miles"){
//         output.value = Number(input.value) = 1.61;

//     }else if (inputTypeValue === "kilometer" && outputTypeValue === "meter"){
//         output.value = Number(input.value) = 1000;
//     }

//     if (inputTypeValue === "feet" && outputTypeValue === "kilometer"){
//         output.value = Number(input.value) = 3280.84;

//     }else if (inputTypeValue === "feet" && outputTypeValue === "feet"){
//         output.value = input.value

//     }else if (inputTypeValue === "feet" && outputTypeValue === "miles"){
//         output.value = Number(input.value) = 1609.34;

//     }else if (inputTypeValue === "feet" && outputTypeValue === "meter"){
//         output.value = Number(input.value) = 3.3;
//     }

//     if (inputTypeValue === "miles" && outputTypeValue === "kilometer"){
//         output.value = Number(input.value) = 0.6;

//     }else if (inputTypeValue === "miles" && outputTypeValue === "feet"){
//         output.value = Number(input.value) = 0.0002;

//     }else if (inputTypeValue === "miles" && outputTypeValue === "miles"){
//         output.value = input.value

//     }else if (inputTypeValue === "miles" && outputTypeValue === "meter"){
//         output.value = Number(input.value) = 0.0006;
//     }

// }


let user_input = prompt("What is the distance?");

let user_unit = prompt("What is the unit?");

if (user_unit === "feet"){
    alert(user_input * 0.3048)
    console.log(user_input * 0.3048);
}
    

else if (user_unit === "miles"){
    alert(user_input * 1609.34);
    console.log(user_input * 1609.34);
}
    
else if (user_unit === "meters"){
    alert(user_input * 1)
    console.log(user_input * 1);
}
    
else if (user_unit === "kilometers"){
    alert(user_input * 1000)
    console.log(user_input * 1000)
}

else if (user_unit === "yard"){
    alert(user_input * 0.9144)
    console.log(user_input * 0.9144)
}

else if (user_unit === "inch"){
    alert(user_input * 0.0254)
    console.log(user_input * 0.0254)
}

if (user_inputunit === "feet"){
    user_inputunit2 = 1/0.3048;
}

else if (user_inputunit === "miles"){
    user_inputunit2 = 1/1609.34;
}

else if (user_inputunit === "kilometers"){
    user_inputunit2 = 1/1000;
}

if (user_outputunit === "feet"){
    user_outputunit2 = user_inputunit2 * 0.3048;
}

else if (user_outputunit === "miles"){
    user_outputunit2 = user_inputunit2 * 1609.34;
}

else if (user_outputunit === "kilometers"){
    user_outputunit2 = user_inputunit2 * 1000;
}

alert(int(user_distance), user_inputunit, 'is', int(user_inputunit2), user_outputunit)
console.log(int(user_distance), user_inputunit, 'is', int(user_inputunit2), user_outputunit)

