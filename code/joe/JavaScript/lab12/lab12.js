
Vue.component("num-button", {
    props: ["digit"],
    template: `<button @click="$emit('num', digit)"
    v-bind:class="{'three columns': (digit !== '0'), 'six columns': (digit === '0') }"
    >{{ digit }}</button>`
});

Vue.component("op-button", {
    props: ["operator"],
    template: `<button class="three columns"
    @click="$emit('op', operator)"
    style="background-color: orange;"
    >{{ operator }}</button>`
});

Vue.component("func-button", {
    props: ["func"],
    template: `<button v-bind:class="{'three columns': (func[0] !== 'C'), 'six columns': (func[0] === 'C')}"
    @click="$emit('func', func)"
    style="background-color: lightgray;"
    >{{ func }}</button>`
});


let vm = new Vue({
    el: "#app",
    data : {
        result: 0, // the previous number entered/the previous total
        display: "0", // what is being displayed
        func: "+", // +, -, *, /
        has_decimal: false, // will use to prevent multiple decimals from being entered at once
        entered_func: true, // when true, will replace display with next number/decimal entered
    },
    methods: {
        addNum : function(digit) {
            if(this.entered_func) {
                if(digit === ".") {
                    this.display = "0.";
                    this.has_decimal = true;
                } else {
                    this.display = digit;
                    this.has_decimal = false;
                }
                this.entered_func = false;
            } else {
                if(digit === ".") {
                    if(!this.has_decimal) {
                        this.display += ".";
                        this.has_decimal = true;
                    }
                } else if(this.display == 0 && this.display[this.display.length-1] !== ".") {
                    this.display = digit;
                } else {
                    this.display += digit;
                }
            }
        },
        doOp : function(op) {
            if(!this.entered_func){ //do the previously loaded operation
                if(this.display[this.display.length-1] === ".") {
                    this.display = this.display.slice(0, this.display.length - 1);
                    this.has_decimal = false;
                } //get rid of ending decimal point if
                switch(this.func){
                    case "+":
                        this.result = this.result + Number(this.display);
                        break;
                    case "-":
                        this.result = this.result - Number(this.display);
                        break;
                    case "×":
                        this.result = this.result * Number(this.display);
                        break;
                    case "÷":
                        this.result = this.result / Number(this.display);
                        break;
                    case "=":
                        this.result = Number(this.display);
                        break;
                }
                this.display = String(this.result);
                this.entered_func = true;
            }
            this.func = op;
        },
        clear : function(func) {
            if(func === "C"){
                this.result = 0;
                this.func = "+";
            }
            this.display = "0";
            this.has_decimal = false;
            this.entered_func = true;
        },
        negate : function() {
            if(this.display != 0) {
                this.display = this.display[0] === "-" ? this.display.slice(1, this.display.length) : "-" + this.display;
                if(this.entered_func) { 
                    this.result *= -1;
                }
            }
        },
        percent : function() {
            this.doOp("=");
            this.result /= 100;
            this.display = String(this.result);
        },
        backspace : function() {
            if(!this.entered_func) {
                if(this.display.length === 1 || (this.display.length === 2 && this.display[0] === "-")) {
                    this.clear("CE");
                } else {
                    if(this.display[this.display.length-1] === ".") {
                        has_decimal = false;
                    }
                    this.display = this.display.slice(0, this.display.length - 1)
                }
            }
        }
    }

});