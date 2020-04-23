var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Sweep the floor', completed: false },
            { text: 'Empty the dishwasher', completed: false },
            { text: 'Drink plenty of water', completed: false }
        ],
        newTodo : 'whatever',
    },
    methods: {
        addTodo: function () {
            this.todos.push( { text : this.newTodo, completed : false } )
        },
        removeTodo: function (text) {
            this.todos = this.todos.filter(todo => todo.text != text)
        },
        completeTodo: function (text) {
            // this.todos = this.todos.filter(todo => todo.text != text)
        }
    },
    computed: {
        completed: function (){
            return this.todos.filter(function (todo) {
                return todo.completed
            })
        },
        incompleted: function (){
            return this.todos.filter(function (todo) {
                return !todo.completed
            })
        }
    }
})