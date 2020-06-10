//I appreciate vue more everyday!

//in vue!

var app = new Vue({
    el: "#app",
    data: {
        todos: [],
        completed_todos: []
    },
    methods: {
        addItem: function(){
            var input = document.getElementById('text_input2');
            if (input.value !== ''){
                this.todos.push({
                    text: input.value
                })
                input.value = "";
            }
        },
        deleteItem: function(index){
            this.todos.splice(index, 1);
        },
        completeItem: function(index){
            this.completed_todos.push();
        },
    }
});

// move from one list
// completeTodo: function (index) {
//     let text = this.todos[index];
//     this.removeTodo(index);
//     this.completed_todos.push(text);
// }