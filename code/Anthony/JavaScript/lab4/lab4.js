// Let's make a simple todo-list which supports the following operations: {% endcomment %}

// add an item to the list
// remove an item from the list
// mark an item as completed
// Removed items should disappear entirely. Completed items should appear at the bottotm through them.


todo_list = document.getElementById("todo_list"); 
completed_list = document.getElementById("completed_list");
let new_job = document.getElementById("add_new_jobs").value;
function addJobs(){
    var new_job = document.getElementById("add_new_jobs").value;
    if(new_job != ""){    
    var node = document.createElement("LI");
    node.innerHTML = new_job + ' <button onclick="markComplete(this)">Mark Complete</button>';
    document.getElementById("todo_list").appendChild(node);
    }    
       
   }
   
   function markComplete(job_li){
    var li_text = "";
    var res = job_li.parentElement.innerHTML.split(" ");
    for(var i = 0; i<res.length ; i++){
        if(res[i] != "<button"){
           li_text = li_text + " "+ res[i];
           
        }else{
            break;
        }
    }
    var node = document.createElement("LI");
    node.innerHTML = '<strike>'+  li_text +'</strike>';
    completed_list.appendChild(node);
    job_li.parentElement.remove();
      
   }