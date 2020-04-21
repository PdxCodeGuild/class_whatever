const add_text = document.getElementById("_add_text");
const add_button = document.getElementById("_add_button");
const list = document.getElementById("_list");

let the_list = [];

let findItem = function(to_find){
    for(let i = 0; i < the_list.length; ++i){
        if(the_list[i][0] === to_find){ return i; }
    }
    return -1;
}

let remove = function(index){ // seems the delete function would leave holes, this is to get around that
    let ret = [];
    for(let i = 0; i < the_list.length; ++i){
        if(i !== index){ ret.push(the_list[i]); }
    }
    the_list = ret;
}

let display = function(item) {
    let list_item = document.createElement("li");
    list_item.id = item[0];
    if(item[1]){ list_item.className = "complete"; }
    list_item.appendChild(document.createTextNode(item[0]));

    let complete_button = document.createElement("input");
    complete_button.type = "button";
    complete_button.name = item[0];
    complete_button.value = !item[1] ? "Mark Complete" : "Mark Incomplete";
    complete_button.addEventListener("click", function(){
        let index = findItem(complete_button.name);
        the_list[index][1] = !the_list[index][1];
        let temp = the_list[index];
        if(the_list[index][1]){
            document.getElementById(complete_button.name).className = "complete";
            if((index+1) < the_list.length && !the_list[index+1][1]) { //don't need to move anything if already in the complete section
                remove(index);
                the_list.push(temp);
            }
        } else {
            document.getElementById(complete_button.name).className = "";
            if(index > 0 && the_list[index-1][1]) {
                remove(index);
                the_list.unshift(temp);
            }
        }
        display_all();
    });
    list_item.appendChild(complete_button);

    let remove_button = document.createElement("input");
    remove_button.type = "button";
    remove_button.name = item[0];
    remove_button.value = "Remove for list";
    remove_button.addEventListener("click", function(){
        remove(findItem(remove_button.name));
        display_all();
    });
    list_item.appendChild(remove_button);

    return list_item;
}

let display_all = function() {
    list.innerHTML = "";
    the_list.forEach(function(li){
        list.appendChild(display(li));
    });
}

add_button.addEventListener("click", function() {
    if(add_text.value !== "" && findItem(add_text.value) < 0){
        the_list.unshift([add_text.value, false]);
        display_all();
        add_text.value = "";
    }
});