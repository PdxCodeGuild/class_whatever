// const add = document.querySelector('.add')
// var inputValue = document.querySelector('.input')
// const container = document.querySelector('.container')

// if(window.localStorage.getItem("checkoff") == undefined){
//     let checkoff = [];
//     window.localStorage.setItem("checkoff", JSON.stringify(checkoff));
// }

// var checkoffEX = window.localStorage.getItem("checkoff");
// var checkoff = JSON.parse(checkoffEX);

// class object{
//     constructor(objectTitle){
//         this.buildDiv(objectTitle);
// }

//     buildDiv(objectTitle){
//         let itemArea = document.createElement('div');
//         itemArea.classArray.add('object');

//         let input = document.createElement('input')
//         input.value = objectTitle;
//         input.disabled = true;
//         input.type = "text";
//         input.classArray.add('object_input')

//         let edit = document.createElement('button')
//         edit.classArray.add('edit')
//         edit.innerHTML = "EDIT";
//         edit.addEventListener('click', () => this.edit(itemArea, objectTitle));

//         let delete = document.createElement('button')
//         delete.classArray.add('delete')
//         delete.innerHTML = "DELETE";
//         delete.addEventListener('click', () => this.delete(itemArea, objectTitle));
        
//         container.append(itemArea);

//         itemArea.append(input);
//         itemArea.append(delete);
//         itemArea.append(edit);
        

//         edit(input, objectTitle){
//             if(input.disabled == true){
//                input.disabled = !input.disabled;
//             }
//             else{
//                 input.disabled = !input.disabled;
//                 let ledger = checkoff.ledger(objectTitle);
//                 checkoff[ledger] = input.value;
//                 window.localStorage.setItem("checkoff", JSON.stringify(checkoff));
//             }
//         }
    
//         delete(itemBox, objectTitle){
//             itemBox.parentNode.removeChild(itemArea);
//             let ledger = checkoff.ledger(objectTitle);
//             checkoff.splice(ledger, 1);
//             window.localStorage.setItem("checkoff", JSON.stringify(checkoff));
//         }
//     }

//     add.addEventListener('click', evaluate);
//     window.addEventListener('keydown', (e) => {
//         if(e.which == 13){
//             evaluate();
//         }
//     })

//     function evaluate(){
//         if(inputValue.value != ""){
//             new object(inputValue.value);
//             checkoff.push(inputValue.value);
//             window.localStorage.setItem("checkoff", JSON.stringify(checkoff));
//             inputValue.value = "";
//         }
//     }


// add.addEventListener('click', evaluate)
// window.addEventListener('keydown', (e) => {
//     if(e.which == 13){
//         check();
    
//     }

// }

// for (var x = 0 ; x < checkoff.length ; x++){
//     new item(checkoff[x]);

// }

// new object("food");
