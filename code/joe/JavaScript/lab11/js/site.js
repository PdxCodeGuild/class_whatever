let vm = new Vue({
    el: '#app',
    data: {
        id_counter : 2,
        add_item : "",
        my_list : [
            // { text: "Testing", id: 0, complete: false },
            // { text: "1, 2, 3", id: 1, complete: false }
        ]
    },
    methods: {
        remove : function(id){
            let new_list = [];
            this.my_list.forEach(function(item) {
                if(item.id !== id){
                    new_list.push(item);
                }
            });
            this.my_list = new_list;
            this.my_list.sort(compare);
        },
        add : function() {
            if(this.add_item){ //no adding empty strings to our list
                this.my_list.push({ text: this.add_item, id: this.id_counter++, complete: false});
                this.add_item = ""; //remove the text from the box
                this.my_list.sort(compare);
            }
        },
        complete_text : function(is_complete) {
            return is_complete ? "Incomplete" : "Complete";
        },
        complete : function(item) {
            item.complete = !item.complete;
            this.my_list.sort(compare);
        }
    }
})

function compare(a, b) {
    if(a.complete !== b.complete) {
        return a.complete ? 1 : -1;
    } else {
        return a.id - b.id;
    }
}