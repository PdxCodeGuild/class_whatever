function newItem() {
  var item = document.getElementById("input").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var dele = document.createElement("button")
  li.appendChild(document.createTextNode("- " + item));
  ul.appendChild(li);
  li.appendChild(dele);
  document.getElementById("input").value = "";
  li.addEventListener("click", OnTodoClicked)
  document.getElementById("li").addEventListener("click", removeItem()); {
    document.getElementById("button")
  }
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
}


function removeItem(e){
    e.target.parentElement.removeChild(e.target); 
  }
