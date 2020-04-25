let user_input = document.getElementById('user_input');
let btn = document.getElementById("btn");
let added = document.getElementById("added");
let completed = document.getElementById("completed");
// let completed_btn = document.createElement("button");

// let input_val = user_input.value;


btn.addEventListener("click", function() {
  // this all needs to be appended to 'added'
  let input_val = user_input.value;
  // console.log(input_val)
  let create_add = document.createElement("p");
  let add_input = document.createTextNode(input_val);
  create_add.appendChild(add_input);
  let completed_btn = document.createElement("input");
  completed_btn.type = "button";
  completed_btn.value = "completed";
  create_add.appendChild(completed_btn);
  added.appendChild(create_add);
  let delete_btn = document.createElement("input");
  delete_btn.type = "button";
  delete_btn.value = "remove";
  create_add.appendChild(delete_btn);
  added.appendChild(create_add);

  function clear_input() {
    if(document.getElementById) {
    document.user_input.reset();
    }
    }
  
})

function completed_task(input_val) {
  document.getElementById("completed").appendChild(input_val.parentNode);
  input_val.remove();   // removes the "completed" button
  input_val.strike();
  // let complete = input_val.strike();
  // document.getElementById("ul").innerHTML = complete;
}

// function delete_me() {}


// element.appendChild(child)
// element.removeChild(child)
// ChildNode.remove()

// when an item is added to list add a completed and a delete button


// btn.addEventListener("click", addListAfterClick);
// delete_btn.addEventListener("click", delete_me);
// completed_btn.addEventListener("click", completed_task);