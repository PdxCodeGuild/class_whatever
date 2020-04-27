let user_input = document.getElementById('user_input');
let btn = document.getElementById("btn");
let added = document.getElementById("added");
let completed = document.getElementById("completed");

// let input_val = user_input.value;


btn.addEventListener("click", function() {
  // this all needs to be appended to 'added'
  let input_val = user_input.value;
  // console.log(input_val)
  let create_add = document.createElement("p");
  let add_input = document.createTextNode(input_val);
  create_add.appendChild(add_input);  // add input to p tag
  let completed_btn = document.createElement("input");
  completed_btn.type = "button";
  completed_btn.value = "completed";
  create_add.appendChild(completed_btn);  // add this btn to p tag
  let delete_btn = document.createElement("input");
  delete_btn.type = "button";
  delete_btn.value = "remove";
  create_add.appendChild(delete_btn);  // add this btn to p tag
  added.appendChild(create_add);  // add this all to the div
  // console.log(create_add.appendChild(add_input))

  // make delete_btn work
  delete_btn.addEventListener("click", function() {
    create_add.remove();
  })
  
  // make completed_btn work
  completed_btn.addEventListener("click", function() {
    // console.log(input_val);
    // move input (create_add) to completed
    // let node_completed = document.createElement("p");
    // let move_completed = document.createTextNode(input_val);
    // node_completed.appendChild(create_add.parentNode);  // move to completed div/p tag
    
    completed.appendChild(create_add);
    // document.getElementById("completed").appendChild(input_val.parentNode);
    completed_btn.remove();   // removes the "completed" button
    delete_btn.remove();
    create_add.strike();
    // input_val.strike();
    // move_completed.strike();
  }) 
})