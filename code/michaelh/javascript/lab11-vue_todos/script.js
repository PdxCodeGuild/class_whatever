Vue.component('todo-item',{
    props: ['todo'],
    template:`
        <li> 
            {{ todo.text }}
            <button @click="$emit('remove', todo)">remove</button>
            <input type="checkbox" id="checkbox" v-model="todo.completed">
        </li>
    `,
})

Vue.component('add-todo', {
    data: function(){
        return{  
            newTodo : { text: '', completed: false, id: 4 } 
        }
    },
    template:`
        <div>
            <input type="text" v-model="newTodo.text" placeholder="todo text"/> 
            <button @click="add">add</button>
        </div>
    `,
    methods:{
        add: function () {
            this.$emit('add', {
                    text: this.newTodo.text,
                    completed: this.newTodo.completed,
                    id: this.newTodo.id,
                }
            ),
            this.newTodo.text = '';
            this.newTodo.id++; 
        },
    },
})

var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'Sweep the floor', completed: false, id: 1},
            { text: 'Empty the dishwasher', completed: false, id: 2},
            { text: 'Drink plenty of water', completed: false, id: 3}
        ],
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push(todo)
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