var app = new Vue({
    el: '#app',
    data: {
        quotes: {},
        search_method: 'author',
        // search_phrase : 'Karl Marx',
        search_phrase: null,
        page_number: 1,
        last_page: false
    },
    methods: {
        loadQuote: function() {
            axios({
                method: "get",
                url: "https://favqs.com/api/quotes",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token token=21e310bc4568cbca4cb081a1978ef6e7'
                },
                params: {
                    filter: this.search_phrase,
                    type: this.search_method,
                    page: this.page_number,
                }
            }).then(response => {               
                this.quotes = response.data.quotes;
                this.page_number = response.data.page;
                this.last_page = response.data.last_page;
            })
        },
        pageChange: function(value){
            if (value === 'next') {
                this.page_number = this.page_number + 1;
            } else {
                this.page_number = this.page_number - 1;
            }
            this.loadQuote()
        }
    }, 
    mounted(){
        this.loadQuote()
    }
})
Vue.component('quote-item', {
    props: ['quote'],
    template:`<p>{{ quote.body }}<br>— <strong id="author">{{ quote.author }}</strong></p>`,
})