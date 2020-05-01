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
    message3: 'to mark complete check the box',
    user_input: '',
    added: [],   // array of the: todos
    // completed: [],
    // addedId: 1,
  },
  methods: {
    add_input: function() {  // first button: to add input
      this.added.push({
        // id: this.addedId++,
        title: this.user_input,
        done: false
      })
      this.user_input = ''
    },
    delete_btn(add) {  // btn to delete in added div
      this.added.splice(this.added.indexOf(add), 1);
    },
    // completed_box: function() {  // btn to mark complete 
    //   this.completed.push({  // push to completed div
    //     title: this.added,
    //   })
    //   this.delete_btn(added)  // remove input from added div
    // },
  },
})