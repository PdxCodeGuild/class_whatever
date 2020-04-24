let vm=new Vue({
    el: '#app',
    data: {
        title:'to-do list',
        todos:[
            
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
            this.newTodo.id++
            this.newTodo.text=''
        },
        toggleEdit: function(todo){
            todo.editing = todo.editing ? false: true

        },

        removeTodo: function(todo){
            
            this.todos.splice(this.todos.indexOf(todo),1)
            },

        strikeThru(text){
            return text.split('').map(char => char + '\u0336').join('')
        }
    },
    // computed: {
    //     incompleteTodos: function(){
    //         return this.todos.filter(todo => todo.completed === false)
    //     },
    //     completeTodos: function(){
    //         return this.todos.filter(todo => todo.completed === true)

    //     },
    // }
})
