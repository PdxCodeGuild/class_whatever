// Let's build a simple calculator in Vue. You can use a CSS framework if you wish, or you can style things yourself. Find some examples of calculators on Google.

// It should support the following functions at a minimum:

// 0-9 and . (decimal place)
// = (show result)
// +/- (negate the number)
// % (divide the number by 100)
// + - * \ (basic arithmetic)
// backspace
// Each button should be a component (there should not be any <button>s in your root component). For many buttons you can use multiple instances of a common component, i.e. each digit button can use the same component and emit its value to the app root.

// HINT: You'll probably want root data attributes to store the current total, subtotal (screen display), and current operation. Some of your listener methods will change the total, some the subtotal, and some the operation.


Vue.component('digit', {
  // props: ['name'],
  template: ``,
  data: function(){
    return {
      num: '',
    }
  }
});
Vue.component('operator', {
  // props: ['name'],
  template: ``,
  data: function(){
    return {
      // num: '',
    }
  }
})
Vue.component('clear', {
  // props: ['name'],
  template: ``,
  data: function(){
    return {
      // num: '',
    }
  }
})
Vue.component('negate', {
  // props: ['name'],
  template: ``,
  data: function(){
    return {
      // num: '',
    }
  }
})
Vue.component('backspace', {
  // props: ['name'],
  template: ``,
  data: function(){
    return {
      // num: '',
    }
  }
})
Vue.component('clear', {
  // props: ['name'],
  template: ``,
  data: function(){
    return {
      // num: '',
    }
  }
})

let vm = new Vue({
  el: '#app',
  data: {
    answer: '',  // string since 1 answer
  },
  methods: {
    clear_entry() {
      // delete #answer
    },
    negate(
      // make answer/output (number) negative
    ) {},
    divide_hundred() {
      /100
    },
    divide() {
      /
    },
    seven() {
      7
    },
    eight() {
      8
    },
    nine() {
      9
    },
    multiply() {
      *
    },
    four() {
      4
    },
    five() {
      5
    },
    six() {
      6
    },
    subtract() {
      -
    },
    one() {
      1
    },
    two() {
      2
    },
    three() {
      3
    },
    add() {
      +
    },
    zero() {
      0
    },
    backspace() {
      delete last digit
    },
    decimal() {
      . which means for int
    },
    equals() {},
  },
})