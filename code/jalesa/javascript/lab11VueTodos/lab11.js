let vm = new Vue();

new Vue({
    el: '#app',
    data: {
        title:"hello",
        items : [
        {message: 'Hello world!'},
        {message: 'Goodbye'},
        {message: 'new-item'},
    ],
    newMessage: "",
        
    },

    methods: {
        addButton: function() {
            this.items.push({message: `${this.newMessage}`})
            // this.newItem = '';
        }
    }
})