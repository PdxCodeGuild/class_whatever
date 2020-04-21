// # Lab 4: Todo List
// Let's make a simple todo-list which supports the following operations:
// - add an item to the list
// - remove an item from the list
// - mark an item as completed
// Removed items should disappear entirely. Completed items should appear at the bottom (or in a separate list) with a line through them.
let list_input = document.getElementById('list_input');
let add_button = document.getElementById('add_button');
let completed_div = document.getElementById('completed_div');
let incompleted_div = document.getElementById('incompleted_div');

add_button.onclick = function() {
    //making the text and whatnot
    let list_item_string = list_input.value;
    let list_item_div = document.createElement('div');
    let list_item_p = document.createElement('p');
    list_item_p.innerText = list_item_string;
    list_item_div.appendChild(list_item_p)

    //remove button stuff
    let remove_button = document.createElement('button');
    remove_button.innerText = 'remove';
    remove_button.onclick = function() {
        incompleted_div.removeChild(list_item_div)
    }
    list_item_div.appendChild(remove_button);

    //complete button stuff
    let complete_button = document.createElement('button');
    complete_button.innerText = 'complete';
    complete_button.onclick = function() {
        let list_item_s = document.createElement('s');
        let br = document.createElement('br');//need a br since s doesn't make a new line
        list_item_s.innerText = list_item_string //
        incompleted_div.removeChild(list_item_div)
        completed_div.appendChild(list_item_s)
        completed_div.appendChild(br)
    }
    list_item_div.appendChild(complete_button)

    incompleted_div.appendChild(list_item_div)
}
