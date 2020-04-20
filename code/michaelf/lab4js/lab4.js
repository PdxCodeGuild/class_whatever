function add_item(item, list){
    list.unshift(item)
    console.log(list)
    return list
}

function remove_item(item, list){
    list.splice(list.indexOf(item),1)
    console.log(list)
    return list
}

function completed(item, list){
    list.splice(list.indexOf(item),1)
    list.push(item.strike())
    console.log(list)
    return list
}

function render_list(list){
    let div=document.getElementById('list-content')
    div.innerHTML=''
    list.forEach(function(item){
        let list_item=document.createElement("p")
        list_item.innerHTML=`${item}<input type="checkbox" class="checked"id="${item}-check" name="${item}">` 
        div.appendChild(list_item)
    })
}

let todo=[]

let add_btn=document.getElementById('add')
add_btn.addEventListener('click', function(){
    let item=document.getElementById('user-item').value
    add_item(item, todo)
    render_list(todo)
})


let completed_btn=document.getElementById('completed')
completed_btn.addEventListener('click', function(){
    let items=document.getElementsByClassName('checked')
    console.log(items)
    for(let i=0; i<items.length;i++){
        if (items[i].checked===true){
            completed(items[i].name,todo)
        }
    }
    render_list(todo)
})

let delete_btn=document.getElementById('delete')
delete_btn.addEventListener('click', function(){
    let items=document.getElementsByClassName('checked')
    console.log(items)
    for(let i=0; i<items.length;i++){
        if (items[i].checked===true){
            remove_item(items[i].name,todo)
        }
    }
    render_list(todo)
})