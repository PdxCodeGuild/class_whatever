const new_object = new Vue({
    el: "#new_object",
    data: {
        designator: 'Much To Do About Nothing',
        new_much_todo: '',
        much_todos: []
    },
    methods: {
        add_new_much_todo() {
            this.much_todos.push({
               title: this.new_much_todo, 
               complete: false
            })
            this.new_much_todo = '';
        },
        remove_old_much_todo(x) {
            const ledger = this.much_todos.indexOf(x);
            this.much_todos.splice(ledger, 1);
        }
    }
});