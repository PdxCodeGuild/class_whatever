/*
Nick Barker
Vue practice
Methods, Data Binding, etc.
*/


// var app = new Vue({    //create a new Vue instance
//     el: '#app',           //element: #app, DOM with id of 'app;
//     data: {               //giving it a data object, with ONE key, which is message, the value of message is 'Hello Vue!'
//       message: 'Hello Vue!'    //if we change this text, it will update retroactively
//     }
//   })
//   app.message = "I have balls of steel!";  //haha


let app = new Vue({
  el: '#app',
  data: {
    secrets: "moo moo buckaroo!",
    fruit: "bananas",
    cigar: "joint",
    virus: "negative",
    website: "http://www.thenetninja.co.uk",
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
    },
    methods: {
      greet: function(time) {
        return "Good "+ time +"!"; //return something that the DOM can display, the function IS an object, the string that it returns is NOT an object
      }
    }
  })