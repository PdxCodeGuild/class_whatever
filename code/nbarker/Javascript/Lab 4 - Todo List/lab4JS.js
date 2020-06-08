// okay! We have our html ready, buttons and inputs are ready, I probably won't have to do much more CSS than I have already done

//first I need to select the items in the document that we want to interact with the text input, the button itself, and the lists we will be adding to.. I think that's all

// first, a test to make sure we're connected
//console.log('hello, javascript!') CHECK!
//let NOT VAR

//select text input first (it's at the top)
let add_new_todo = document.querySelector('#add_new_todo');
// test console.log(add_new_todo) pass
let add_button = document.querySelector("#add_button");
//test console.log(add_button) pass
let un_list = document.querySelector('#un_list');
//test console.log(un_list) pass
let completed_list = document.querySelector('#completed_list');
//test 3 times! (i couldn't spell queryselector to save my life! console.log(completed_list) pass finally!

//everything is selected in the document! input, button, 2 lists! Woo!
//now we add some functions!
//what happens when we click the add button?
//-----if there's nothing in the input, BREAK!
//-----if there is SOMETHING in the input, move it to the un_list, which should probably be called the 'in_list' as in IN_complete not un_complete lol, good stuff!
//other moving parts...
//we'll need a button to delete and a button to complete! the delete button will remove the todo from the universe, the complete button will move the todo to the 'completed_list' (need to add an effect! strikethrough? make it red? the possibilities are endless!)

//add an event when we click the 'add_button' button, we add the textCon... (VALUE!) from the add_new_todo textline to the un_list, oh shit make sure there is SOMETHING in add_new_todo
add_button.onclick = function(){
    let new_item = add_new_todo.value; //.value not textContent
    if (new_item === ''){ //blank!
        return; //not break!
    }
    //still in 2nd curly-boy!

    add_new_todo.value = ''; //not textContent! ugh sets blank
    //create li elements with createElement
    let li = document.createElement('li');
    //classList! 
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    li.classList.add('new_item');
    let new_item_div = document.createElement('div'); //create a div!
    new_item_div.innerHTML = new_item;

    let complete_button = document.createElement('button');
    complete_button.innerHTML = 'I did it!'; //i had inHerHTML forever, god
    complete_button.onclick = function() {
        un_list.removeChild(this.parentElement); //on completetion, remove from un_list
        alert("great job!")
        let li = document.createElement('li'); //create a new li
        li.innerHTML = new_item; 
        completed_list.appendChild(li); //add to completed list
    };
//make the remove button, USEinnerHTML! or you'll get a little rectangle!
    let remove_button = document.createElement('button');
    remove_button.innerHTML = 'Delete';
    remove_button.onclick = function(){ //remove the child from the parent element (un_list)
        un_list.removeChild(this.parentElement);
    };

    //WE HAVE TO ADD THEM UUGGHHHH

    li.appendChild(new_item_div); //gotta create a div! or no text
    li.appendChild(complete_button); 
    li.appendChild(remove_button);
    un_list.appendChild(li);

}
