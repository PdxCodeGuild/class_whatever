let vm = new Vue({
    el: '#app',
    data: {
        user_input: '',
        reveal: [],
        qotd:null
    },
    methods: {
        btn: function() {
            axios({
                method: 'get',
                url:"https://www.goodreads.com/search/index.xml",
                headers:{
                    Authorization: 'Token token="8T4Bj1ceH62SO0btgPfjTg"'
                    // secret: 6Jn4JXPQ48QyKqCexUR5204oa7eP8WDMJl5jodRBbY
                },
                params: {
                    // filter: this.user_input,
                    // // type: 'tag',
                    // type: this.user_input,
                    q: 'word',

                    // q: The query text to match against book title, author, and ISBN fields. Supports boolean operators and phrase searching.

                    // page: Which page to return (default 1, optional)

                    // key: Developer key (required).

                    // search[field]: Field to search, one of 'title', 'author', or 'all' (default is 'all')
                }
            })
            .then(response => {(this.reveal = response.data);
            console.log(this.reveal);
            // this.$emit('output', this.reveal)
            })
        }
    },
})