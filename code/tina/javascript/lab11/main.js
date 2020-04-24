
  var app = new Vue({
    el: '#app',
    data: {
        new_todo: '',
        
        todos: [

        ],
    },
    methods: {
        Todo: function(){
            this.todos.unshift(this.newtodo)
        },
        removeTodo: function(todo) {
          this.todos.splice(this.todos.indexOf(todo),1);
        },

        editTodo: function(todo) {
          this.todos.edit(this.todos.indexOf(todo),1);
        },
    }
  })