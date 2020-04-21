var completedTasks=document.getElementById("done")
var addbutton = document.getElementsByTagName("button")[0];


function newItem() {
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);
  var deletebutton = document.createElement("button");

  document.getElementById("input").value = "";
  li.addEventListener("click", OnTodoClicked)
  deletebutton.addEventListener("click", removeItem);
  deletebutton.innerText="Delete";
  deletebutton.classname="delete";

  li.appendChild(deletebutton)

  
  
}

document.getElementById("input").addEventListener("keyup", function(e)
{
  if (e.keyCode === 13)
  {
      newItem()
  }
})



function OnTodoClicked(e)
{
  e.currentTarget.classList.toggle("strike")
  let todo=this
  completedTasks.appendChild(todo);
  let strikelist = document.querySelector('.strike')
  if (this.classList.contains("strike")) {
    done.appendChild(this) }
  else {
    list.appendChild(this)
  }
  }


function removeItem(e){
  e.stopPropagation()
  this.parentNode.remove();
  }



