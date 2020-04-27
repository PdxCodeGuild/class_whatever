

Vue.component('char', {
    props: ['char'],
    data: function(){
        return{
    

        }
    },
    template:
    `<div class="btn" @click="append">
    {{char}}
    </div>
    `,
    methods:{
        append: function(){
            this.$emit('append',{
                value: this.char
            })
        }
    }


})

Vue.component('operator', {
    props: ['operator'],
    data: function(){
        return{

        }
    },
    template:
    `<div class="btn operator" @click="operate">
    {{operator}}
    </div>
    `,
    methods:{
        operate: function(){
            this.$emit('operate',{
                value: this.operator
            })
        }

    },

})

Vue.component('evaluate', {
    props: ['evaluate'],
    data: function(){
        return{

        }
    },
    template:
    `<div class="btn operator" @click="equal">
    =
    </div>
    `,
    methods:{
        equal: function(){
            this.$emit('equal',{
            })
        }

    },

})

Vue.component('clear', {
    props: [],
    data: function(){
        return{

        }
    },
    template:
    `<div class="btn" @click="clear">
    C
    </div>
    `,
    methods:{
        clear: function(){
            this.$emit('clear',{
                
            })
        }
    },

})


Vue.component('percent', {
    props: ['current'],
    data: function(){
        return{

        }
    },
    template:
    `<div class="btn" @click="percent">
    %
    </div>
    `,
    methods:{
        percent: function(){
            this.$emit('percent',{
                current: this.current
            })
        }
        
        

    },

})

Vue.component('negate', {
    data: function(){
        return{

        }
    },
    template:
    `<div class="btn" @click="negate">
    +/-
    </div>
    `,
    methods:{
        negate: function(){
            this.$emit('negate',{
                current: this.current
            })
        }

    },

})

let app=new Vue({
    el: '#calculator',
    data: function(){
        return{
            current: '',
            previous: null,
            operator: null,
            clicked: true
        }
    },
    methods:{
        clear(){
            this.current = ''
        },
        negate(){
            this.current = this.current.charAt(0)=== '-' ? this.current.slice(1) : `-${this.current}`
        },
        percent(){
            this.current = `${parseFloat(this.current)/100}`
        },
        append(char){
            if (this.clicked){
                this.current= ''
                this.clicked=false
            }
            this.current = `${this.current}${char.value}`
        },
        dot(){
            if (this.current.indexOf('.') === -1){
                this.append({value: '.'})
            }
        },

        reset(){
            this.previous = this.current
            this.clicked = true
        },
        // operate(operator){
        //     this.reset()
        //     if operator.value==="+"

    
        // },
        divide(){
            this.operator = function(a,b){
                return a / b
            }
            this.reset()

        },
        multiply(){
            this.operator =  function(a,b){
                return a * b
            }
            this.reset()

        },
        subtract(){
            this.operator =  function(a,b){
                return a - b
            }
            this.reset()

        },
        add(){
            this.operator =  function(a,b){
                return a + b
            }
            this.reset()

        },
        equal(){
            this.current= `${this.operator(
                parseFloat(this.previous),
                parseFloat(this.current)
            )}`
            this.previous=null

        }

    }
})