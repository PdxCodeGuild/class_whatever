// Lab 4: Todo List
// Let's make a simple todo-list which supports the following operations:

// add an item to the list
// remove an item from the list
// mark an item as completed
// Removed items should disappear entirely. Completed items should appear at the bottom (or in a separate list) with a line through them.

// -------------    TOP BUTTONS   ------------------
let clear_button = document.getElementById("clear_button").addEventListener("click",clear);

let add_button = document.getElementById("add_button").addEventListener("click",add );
// --------------- YOUR LIST BUTTONS  -----------------
let delete_button = document.getElementById("delete_button")

let complete_button = document.getElementById("complete_button")


// ----------    MY DIVS   ----------------
let incomplete_div = document.createElement("div")
incomplete_div.classList.add("new")

let add_item = document.getElementById("add_item")

let list_div = document.getElementById("list_div")
let completed_div = document.getElementById("completed_div")


function add () {
    let text = document.getElementById("add_thing").value;
    let li = document.createElement("li");
    let p = document.createElement("p");
    
    
    // add event listner to checkbox
    let check_box = document.createElement("input");
    check_box.type = "checkbox";
    check_box.classList.add("delete_check_box");
    
    
    p.append(text);
    li.append(check_box);
    li.append(p);
    incomplete_div.append(li);
    

    list_div.insertBefore(incomplete_div,list_div.firstChild)
}



delete_button.addEventListener("click", function(){
    let all_check_boxes = list_div.querySelectorAll("input[type='checkbox'].delete_check_box");
    // .delete_check_box is a class name on the line above
    for (let i = 0; i < all_check_boxes.length; i++) {
        if (all_check_boxes[i].checked) {
            all_check_boxes[i].parentElement.remove()
        }
         // .remove just roves checkboxes
        //  .parentElement.remove() removes all items
    }
});

complete_button.addEventListener("click",function() {
    let complete_check_boxes = list_div.querySelectorAll("input[type='checkbox'].delete_check_box")
    let p = document.querySelector("p")
    p.classList.add("complete_ptag");
    for (let i = 0; i < complete_check_boxes.length; i++) {
        if (complete_check_boxes[i].checked) {
            completed_div.append(complete_check_boxes[i].parentElement)
            complete_check_boxes[i].remove()
            text0 = p.innerText
            let text = text0
            console.log(text)
        // put line through word
        // var result = str.strike();

           
        }
    }
});



// fix clear button

function clear () {
   
    completed_div.remove()   
    
        
}

// for loop in delete_button function explanation:
// set variable all_check_boxes equal to the input [type="checkbox"].delete_c_b; we are grabbing the input by the type and the class name which is delete_check_box
// for loop in javascript has to have 3 parameters. 
// when i is less than all_check_boxes add one(i++)
// i will always be less than unless nothing is checked.