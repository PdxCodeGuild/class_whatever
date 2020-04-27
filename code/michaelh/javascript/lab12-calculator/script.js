// Let's build a simple calculator in Vue. You can use a CSS framework if you wish, or you can style things yourself. Find some examples of calculators on Google.

// It should support the following functions at a minimum:

//     0-9 and . (decimal place)
//     = (show result)
//     +/- (negate the number)
//     % (divide the number by 100)
//     + - * \ (basic arithmetic)
//     backspace

// Each button should be a component (there should not be any <button>s in your root component). For many buttons you can use multiple instances of a common component, i.e. each digit button can use the same component and emit its value to the app root.

// HINT: You'll probably want root data attributes to store the current total, subtotal (screen display), and current operation. Some of your listener methods will change the total, some the subtotal, and some the operation.

Vue.component('button-digit', {
    props: ['digit'],
    template:`<button @click="$emit('append-digit', digit)">{{digit}}</button>`,
})
Vue.component('button-equal', {
    template:`<button @click="$emit('show-result')">=</button>`,
})
Vue.component('button-operation', {
    props: ['operation'],
    template:`<button @click="$emit('change-operation', operation)">{{operation}}</button>`,
})
Vue.component('button-sv-operation', {
    props: ['operation'],
    template:`<button @click="$emit('operation', operation)">{{operation}}</button>`,
})
Vue.component('button-backspace', {
    template:`<button @click="$emit('undo')"><--</button>`,
})
var app = new Vue({
    el: '#app',
    data: {
        digits: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
        operations: ['+', '-', '*', '/'],
        svOperations: ['%', '+/-'],    
        oldResults: [],
        subtotal : '',
        total: 0,
        current_operation: '',
    },
    methods: {
        appendDigit: function (digit) {
            if (this.subtotal === '0'){
                this.subtotal = digit
            } else{
                this.subtotal += digit
            }
            if(this.current_operation === ''){
                this.total = 0
            }
        },
        showResult: function(){
            if (this.current_operation != ''){
                if (this.subtotal === ''){
                    this.subtotal = '0'
                }
                let oldTotal = this.total
                if (this.current_operation === '+') {
                    this.total += parseFloat(this.subtotal)
                } else if (this.current_operation === '-') {
                    this.total -= parseFloat(this.subtotal)
                } else if (this.current_operation === '*') {
                    this.total *= parseFloat(this.subtotal)
                } else {
                    this.total /= parseFloat(this.subtotal)
                }
                this.oldResults.unshift(oldTotal + this.current_operation + this.subtotal + '=' + this.total.toString())
                this.subtotal = ''
            }
            this.current_operation = ''
        },
        changeOperation: function (operation) {
            if (this.current_operation === ''){
                this.current_operation = operation
                if (this.subtotal != '') {
                    this.total = parseFloat(this.subtotal)
                }
                this.subtotal = ''
            }
        },
        svOperation: function (operation){
            if (this.subtotal != ''){
                if (operation === '%') {
                    this.subtotal = (parseFloat(this.subtotal) / 100).toString()
                } else {
                    this.subtotal = (parseFloat(this.subtotal) * -1).toString()
                }
            } else{
                if (operation === '%') {
                    this.total = this.total / 100
                } else {
                    this.total = this.total * -1
                }
            }
        },
        undo: function(){
            if (this.subtotal != ''){
                this.subtotal = this.subtotal.substr(0, this.subtotal.length-1)
            } else if (this.current_operation != ''){                
                this.current_operation = ''
            } else if (this.total != 0){
                this.total = 0
            } else if (this.oldResults.length > 0){
                this.oldResults.shift()
                alert('You\'ve irrevocably changed history')
            }
        }
    },
    mounted() {
        window.addEventListener("keyup", e => {
            // console.log(e.key)
            if(this.digits.indexOf(e.key)!= -1){
                this.appendDigit(e.key)
            } else if(e.key === '=' || e.key === 'Enter'){
                this.showResult()
            } else if(this.operations.indexOf(e.key)!= -1){
                this.changeOperation(e.key)
            } else if(e.key === '%'){
                this.svOperation(e.key)
            } else if(e.key === 'Backspace'){
                this.undo()
            }
        })
    },
})