//dead code
// const add = document.querySelector('.add')

// var inputValue = document.querySelector('.input')

// const container = document.querySelector('.container')

// if(window.localStorage.getItem("checkoff") == undefined){

//     let checkoff = [];

const todolistsContainer = document.querySelector('[todo-lists]')

//reference
//     window.localStorage.setItem("checkoff", JSON.stringify(checkoff));
// }

// //reference
// // let todoItems = [];

const newtodolistForm = document.querySelector('data-todo-list-form')

//reference 
// // function addTodo(text) {
// //   const todo = {
// //     text,
// //     checked: false,
// //     id: Date.now(),
// //   };

const newtodolistInput = document.querySelector('data-todo-list-input')

//reference
// //   todoItems.push(todo);
// //   console.log(todoItems);
// // }

const LOCAL_TODO_KEY = 'todotask.todolists'
const LOCAL_TODO_LIST_ID_KEY = 'todotask.selectedtodoListPk'
let to_do_lists = JSON.parse(localStorage.getitem(LOCAL_TODO_LIST_ID_KEY || [],

//dead code
// var checkoffEX = window.localStorage.getItem("checkoff");

// var checkoff = JSON.parse(checkoffEX);

newtodolistForm.addEventListener('submit', xyz => {
    xyz.preventDefault()
    const todotaskName = newtodolistInput.value
    if (todotaskName == null || todotaskName === '') return
    const todolist = incepttodoList(todolistName)
    newtodolistInput.value = null
    todolists.push(todolists)
}),

function incepttodoList(name) {
    return {pk: Date.now().toString(), title: title, todotasks: []}
},

function prepare() {

    cleartodo(todolistsContainer)

    to_do_lists.forEach(todolist => {
        const todolistElement = document.createElement('li)')
        todolistElement.classtodo-list.add()
        todolistElement.innerText = todolist.title
        todolistElement.dataset.todolistPk = todolist.pk
        todolistsContainer.appendChild(todolistElement)
    })
},
function cleartodo(todo) {
    while (todo.firstChild)
        todo.removeChild(todo, firstChild)

},

prepare()

// //reference
// // const form = document.querySelector('.js-form');
// // form.addEventListener('submit', event => {
// //   event.preventDefault();
// //   const input = document.querySelector('.js-todo-input');

// class object{

//     constructor(objectTitle){

//         this.buildDiv(objectTitle);
// }

// //reference
// // const text = input.value.trim();
// //   if (text !== '') {
// //     addTodo(text);
// //     input.value = '';
// //     input.focus();
// //   }
// // });

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

//         //reference
//         // function addTodo(text) {
//         //     const todo = {
//         //       text,
//         //       checked: false,
//         //       id: Date.now(),
//         //     };
          
//         //     todoItems.push(todo);

//         edit.addEventListener('click', () => this.edit(itemArea, objectTitle));

//         let delete = document.createElement('button')

//         delete.classArray.add('delete')

//         delete.innerHTML = "DELETE";

//         delete.addEventListener('click', () => this.delete(itemArea, objectTitle));
        
//         container.append(itemArea);

//         itemArea.append(input);

//         itemArea.append(delete);

//         itemArea.append(edit);

// //reference
// // const list = document.querySelector('.js-todo-list');
// //   list.insertAdjacentHTML('beforeend', `
// //     <li class="todo-item" data-key="${todo.id}">
// //       <input id="${todo.id}" type="checkbox"/>
// //       <label for="${todo.id}" class="tick js-tick"></label>
// //       <span>${todo.text}</span>
// //       <button class="delete-todo js-delete-todo">
// //         <svg><use href="#delete-icon"></use></svg>
// //       </button>
        

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

//         //reference
//         // const list = document.querySelector('.js-todo-list');
//         // list.addEventListener('click', event => {
//         //   if (event.target.classList.contains('js-tick')) {
//         //     const itemKey = event.target.parentElement.dataset.key;
//         //     toggleDone(itemKey);
    
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

//         //reference
//         // unction toggleDone(key) {
//         //     const index = todoItems.findIndex(item => item.id === Number(key));
//         //     todoItems[index].checked = !todoItems[index].checked;
          
//         //     const item = document.querySelector(`[data-key='${key}']`);
//         //     if (todoItems[index].checked) {
//         //       item.classList.add('done');
//         //     } else {
//         //       item.classList.remove('done');
//         //     }
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

//     //reference
//     // <li class="todo-item" data-key="${todo.id}">
//     //   <input id="${todo.id}" type="checkbox"/>
//     //   <label for="${todo.id}" class="tick js-tick"></label>
//     //   <span>${todo.text}</span>
//     //   <button class="delete-todo js-delete-todo">
//     //     <svg><use href="#delete-icon"></use></svg>
//     //   </button>

// }

// for (var x = 0 ; x < checkoff.length ; x++){

//     new item(checkoff[x]);

// }

// new object("food");

//reference
// const container = document.querySelector('.container');
// var inputValue = document.querySelector('.input');
// const add = document.querySelector('.add');

// if(window.localStorage.getItem("todos") == undefined){
//      var todos = [];
//      window.localStorage.setItem("todos", JSON.stringify(todos));
// }

// var todosEX = window.localStorage.getItem("todos");
// var todos = JSON.parse(todosEX);


// class item{
// 	constructor(name){
// 		this.createItem(name);
// 	}
//     createItem(name){
//     	var itemBox = document.createElement('div');
//         itemBox.classList.add('item');

//     	var input = document.createElement('input');
//     	input.type = "text";
//     	input.disabled = true;
//     	input.value = name;
//     	input.classList.add('item_input');

//     	var edit = document.createElement('button');
//     	edit.classList.add('edit');
//     	edit.innerHTML = "EDIT";
//     	edit.addEventListener('click', () => this.edit(input, name));

//     	var remove = document.createElement('button');
//     	remove.classList.add('remove');
//     	remove.innerHTML = "REMOVE";
//     	remove.addEventListener('click', () => this.remove(itemBox, name));

//     	container.appendChild(itemBox);

//         itemBox.appendChild(input);
//         itemBox.appendChild(edit);
//         itemBox.appendChild(remove);

//     }

//     edit(input, name){
//         if(input.disabled == true){
//            input.disabled = !input.disabled;
//         }
//     	else{
//             input.disabled = !input.disabled;
//             let indexof = todos.indexOf(name);
//             todos[indexof] = input.value;
//             window.localStorage.setItem("todos", JSON.stringify(todos));
//         }
//     }

//     remove(itemBox, name){
//         itemBox.parentNode.removeChild(itemBox);
//         let index = todos.indexOf(name);
//         todos.splice(index, 1);
//         window.localStorage.setItem("todos", JSON.stringify(todos));
//     }
// }

// add.addEventListener('click', check);
// window.addEventListener('keydown', (e) => {
// 	if(e.which == 13){
// 		check();
// 	}
// })

// function check(){
// 	if(inputValue.value != ""){
// 		new item(inputValue.value);
//         todos.push(inputValue.value);
//         window.localStorage.setItem("todos", JSON.stringify(todos));
// 		inputValue.value = "";
// 	}
// }


// for (var v = 0 ; v < todos.length ; v++){
//     new item(todos[v]);
// }


// new item("sport");
