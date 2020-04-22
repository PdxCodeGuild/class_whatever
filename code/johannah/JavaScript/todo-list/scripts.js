let user_input = document.getElementById('user_input');
let btn = document.getElementById("btn");
let added = document.getElementById("added");
let completed = document.getElementById("completed");
// let completed_btn = document.createElement("button");

let input_val = user_input.val;


btn.addEventListener("click", function() {
  // append to 'added'
  // let input_val = user_input.val;
  let create_add = document.createElement("li");
  let user_add = document.createTextNode(input_val);
  create_add.appendChild(user_add);
  let completed_btn = document.createElement("button");
  completed_btn.value = "completed";
  create_add.appendChild(completed_btn);
  let delete_btn = document.createElement("button");
  delete_btn.value = "remove";
  create_add.appendChild(delete_btn);
})

function completed_task(input_val) {
  document.getElementById("completed").appendChild(input_val.parentNode);
  input_val.remove();
  input_val.strike();
  // let complete = input_val.strike();
  // document.getElementById("ul").innerHTML = complete;
}

function delete_me() {}


// element.appendChild(child)
// element.removeChild(child)
// ChildNode.remove()

// when an item is added to list add a completed and a delete button


// btn.addEventListener("click", addListAfterClick);
delete_btn.addEventListener("click", delete_me);
completed_btn.addEventListener("click", completed_task)
