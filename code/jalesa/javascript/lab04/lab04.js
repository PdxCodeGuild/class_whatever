// Lab 4: Todo List
// Let's make a simple todo-list which supports the following operations:

// add an item to the list
// remove an item from the list
// mark an item as completed
// Removed items should disappear entirely. Completed items should appear at the bottom (or in a separate list) with a line through them.

let clear_button = document.getElementById("clear_button").addEventListener("click",clear);

let add_button = document.getElementById("add_button").addEventListener("click",add );

let delete_button = document.getElementById("delete_button").addEventListener("click", remove);

let add_item = document.getElementById("add_item")


function add () {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let p = document.createElement("p");
    let i_tag = <i class="fa fa-circle-o" job="complete"> </i>
    let text = document.createTextNode(add_item.value);
 
    ul.appendChild(li);
    p.appendChild(text);
    li.appendChild(p,i_tag);

}

function complete (){
    if (i_tag == "checked"){
        text.remove()
        // remove from to do list
        // move to completed list 
        // draw a line through the word.
        let complete_item = "lineThrough";
    }
}

function remove () {

}


function clear () {

}

