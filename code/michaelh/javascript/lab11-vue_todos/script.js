var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Sweep the floor', completed: false, id: 1},
            { text: 'Empty the dishwasher', completed: false, id: 2},
            { text: 'Drink plenty of water', completed: false, id: 3}
        ],
        newTodo : { text: 'whatever', completed: false, id: 4},
    },
    methods: {
        addTodo: function () {
            this.todos.push( { text: this.newTodo.text, completed: false, id: this.newTodo.id} )
            this.newTodo.id = this.newTodo.id + 1 
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
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