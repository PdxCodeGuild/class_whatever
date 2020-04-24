Vue.component('clear',{
  template: 
  `
    <button @click="$emit('clear')" id="nclear" class="btn">clear</button>
    <button @click="$emit('ce')" id="nclearentry" class="btn">CE</button>
  `
})

Vue.component('number',{
    template:
        `
          <button @click="append('7')" id="seven" class="btn">7</button>
          <button @click="append('8')" id="eight" class="btn">8</button>
          <button @click="append('9')" id="nine" class="btn">9</button>
          <button @click="append('4')" id="n4" class="btn">4</button>
          <button @click="append('5')" id="n5" class="btn">5</button>
          <button @click="append('6')" id="n6" class="btn">6</button>
          <button @click="append('2')" id="n2" class="btn">2</button>
          <button @click="append('1)" id="n1" class=btn>1</button>
          <button @click="append('3')" id="n3" class="btn">3</button>
          <button @click="append('0')" id="n0" class="btn">0</button>`
})

Vue.component('math',{
  template:
    `
      <button @click="append('delete')" id="ndelete" class="btn">delete</button>
      <button @click="append('/')" id="n/" class="btn">/</button>
      <button @click="append('*')" id="n*" class="btn">*</button>
      <button @click="append('-')" id="n-" class="btn">-</button>
      <button @click="append('+')" id="n+" class="btn">+</button>
      <button @click="append('=')" id="n=" class="btn">=</butoon>
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