var app = new Vue({
  el: '#app',
  data: {
      new_todo: '',
      
      todos: [

      ],

      completed_todos: [

      ]
  },
  methods: {
      Todo: function(){
          this.todos.unshift(this.newtodo)
            
      },
      removeTodo: function(todo) {
        this.todos.splice(this.todos.indexOf(todo),1);
      },

      completeTodo: function(todo) {
        this.completed_todos.push(todo)
        this.removeTodo(todo)
      },

      remove: function(completed_todo) {
        this.completed_todos.splice(this.completed_todos.indexOf(completed_todo),1);
      },

      un_completeTodo: function(completed_todos) {
        this.todos.push(completed_todos)
        this.remove(completed_todos)
      },

      

      
  }
})