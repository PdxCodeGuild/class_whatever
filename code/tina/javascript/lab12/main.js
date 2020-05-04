var app = new Vue({
  el: "#app",
  data: {
    current : '',
    operator: null,
    
    
  },
  methods : {
    setNumber(digit){
      if(this.operator === null){
        this.x += digit;
        this.display = this.x;
      }
      else{
        this.y += digit;
        this.display = this.y;
      }
    },
    press: function (event) {
      let key = event.target.innerText;
      if( key === "=") {
        equals();
      } else if (key === "C") {
        clear();
      } else if (key === "*") {
      multiply();
      } else if (key === "/") {
        divide();
      } else if (key === "+") {
        plus();
      } else if (key === "-") {
        minus();
      } 
  }
  
}
});



function equals() {
  if ((app.current).indexOf("^") > -1) {
    var base = (app.current).slice(0, (app.current).indexOf("^"));
    var exponent = (app.current).slice((app.current).indexOf("^") + 1);
    app.current = ("Math.pow(" + base + "," + exponent + ")");
    
  } else {
   console.log( String.raw`${app.current}`);
                        
  }



function clear() {
  app.current = "";
}


function backspace() {
  app.current = app.current.substring(0, app.current.length - 1);
}


function multiply() {
  app.current += "*";
}


function divide() {
  app.current +=  "/";
}


function plus() {
  app.current +=  "+";
}


function minus() {
  app.current +=  "-";
}




