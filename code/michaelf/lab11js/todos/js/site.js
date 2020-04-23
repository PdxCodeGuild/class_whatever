let vm=new Vue({
    el: '#app',
    data: {
        title:'to-do list',
        todos:[
            {text: "test 1"},
            {text: "test 2"},
            {text: "test 3"},
        ],
        newTodoText:'',},
    methods: {
        addTodo: function(){ 
            this.todos.push({text: `${this.newTodoText}`})
            },
        removeTodo: function(todo){
            this.todos.splice(this.todos.indexOf(todo),1)
            },
        completed: function(todo){
            this.todos.splice(this.todos.indexOf(todo),1)
            this.todos.push({text: todo.strike()})
        }
        }
})
