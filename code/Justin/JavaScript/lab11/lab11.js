const new_object = new Vue({

    el: "#new_object",

    data: {

        designator: 'Much To Do About Nothing',

        new_much_todo: '',

        much_todos: []

    },

        // template

//         var list = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.Name = "close";
//   span.append(txt);
//   myNodelist[i].appendChild(span);

    methods: {

        add_new_much_todo() {

            this.much_todos.push({

               title: this.new_much_todo, 

               complete: false

            })

            this.new_much_todo = '';

        },


//Maybe useful?

//         var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";

        remove_old_much_todo(x) {

            const ledger = this.much_todos.indexOf(x);

            this.much_todos.splice(ledger, 1);

        }
    }
});