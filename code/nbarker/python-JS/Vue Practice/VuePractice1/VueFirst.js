var app = new Vue({    //create a new Vue instance
    el: '#app',           //element: #app, DOM with id of 'app;
    data: {               //giving it a data object, with ONE key, which is message, the value of message is 'Hello Vue!'
      message: 'Hello Vue!'    //if we change this text, it will update retroactively
    }
  })

  app.message = "I have balls of steel!";  //haha
  
