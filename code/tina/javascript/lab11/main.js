
  var app = new Vue({
    el: '#app',
    data: {
        new_todo: '',
        
        todos: [

        ],
    },
    methods: {
        Todo: function(){
            this.todos.unshift(this.new_todo)
        }
    }
  })