// Your Vue app will need to do a few things:
// -Store an array of objects (the todos themselves)
// -List each todo
// -Allow the user to add and remove todos
// -Allow a user to toggle if a task is complete or not

let vm = new Vue({
  el: '#app',
  data: {
    message1: 'To Do List',
    message2: 'Need To Do:',
    message3: 'Completed:',
    user_input: '',
    added: [],   // array of the: todos
    completed: [],
  },
  methods: {
    add_input: function() {  // first button: to add input
      this.added.push(user_input)
    },
    delete_btn: function() {  // btn to delete in added
      this.added.splice(this.added.indexOf(added), 1);
    },
    completed_btn: function() {  // btn to mark complete 
      this.completed.push(added)
      this.delete_btn(added)
    },
  },
})