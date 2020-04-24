let vm=new Vue({
    el: '#app',
    data: {
        title:'to-do list',
        todos:[
            {text: "test 1"},
            {text: "test 2"},
            {text: "test 3"},
        ],
        newTodo: {text: '', checked: false, id: 4, editing:false}
    },
    methods: {
        addTodo: function(){ 
            this.todos.push({
                text: this.newTodo.text,
                checked: this.newTodo.checked, 
                id: this.newTodo.id,
                editing: this.newTodo.editing
            });
            newTodo.id++
            this.newTodo.text=""
        },
        toggleEditTodo: function(todo){
            // if (todo.editing) {
            //     todo.editing= false
            // } else {
            //     todo.editing = true
            // }
            todo.editing = todo.editing ? false: true

        },

        removeTodo: function(todo){
            
            this.todos.splice(this.todos.indexOf(todo),1)
            },
        completed: function(todo){
            this.todos.splice(this.todos.indexOf(todo),1)
            this.todos.push({text: todo.strike()})
        }
        },
    computed: {
        incompleteTodos: function(){
            return this.todos.filter(todo => todo.completed === false)
        },
        completeTodos: function(){
            return this.todos.filter(todo => todo.completed === true)

        },
    }
})
