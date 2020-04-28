Vue.component('calc',{
    template:`   
        <button @click="divide" id="divide" class="btn">/</button>
        <button @click="push('7')" id="seven" class="btn">7</button>
        <button @click="push('8')" id="eight" class="btn">8</button>
        <button @click="push('9')" id="nine" class="btn">9</button>
        <button @click="push('*')" id="muil" class="btn">*</button>
        <button @click="push('4')" id="four" class="btn">4</button>
        <button @click="push('5')" id="five" class="btn">5</button>
        <button @click="push('6')" id="six" class="btn">6</button>
        <button @click="minus" id="minus" class="btn">-</button>
        <button @click="push('2')" id="two" class="btn">2</button>
        <button @click="push('1)" id="one" class=btn>1</button>
        <button @click="push('3')" id="three" class="btn">3</button>
        <button @click="plus" id="plus" class="btn">+</button>
        <button @click="push('0')" id="zero" class="btn">0</button>
        <button @click="equal" id="equl" class="btn">=</butoon>
        <button @click="$emit('clear')" id="clear" class="btn">clear</button>
        <button @click="$emit('ce')" id="clearentry" class="btn">CE</button>
        <button @click="dems('.)" id="des" class="btn">.</button
        `
})


var app = new Vue({
    el: '#app',
    data: {
      total: '',
      opclick: false


    },
    methods: {
      clearall: function(){
        return this.total = 0;
      },
      readout: function(){
        if (this.opclick){
          this.total = '',
          this.opclick = false;


        }
        this.total = `${this.total}${ofnum}` 
        console.log(total)
        console.log(digit)
      },

      math: function(){
        this.opreation = //Take in 2 numbers, return two numbers hint:fat arrow =>
        this.opclick = true
        this.total += ''
      }




    }
  })