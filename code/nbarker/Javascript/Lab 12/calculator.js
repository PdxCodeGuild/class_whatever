var Calculator = new Vue({
    el: "#app",
    data:{
        result: '',
        numbers: [1,2,3,4,5,6,7,8,9,0],
        operations: ['+','-','*','/'],
    },
    methods:{
        input: function(char){
            this.result+=char;
        },

        //trickiest part! remembering it was this.result, not the result itself
        backspace: function(){
            this.result = this.result.substring(0, this.result.length - 1);
        },
        //so much easier than last time we did this in python
        reset: function(){
            this.result = '';
        },
        // EVAL IS SENT FROM THE GODS!!!!!!!!!!!!!
        calc: function(){
            this.result = eval(this.result);
        }
    }
})