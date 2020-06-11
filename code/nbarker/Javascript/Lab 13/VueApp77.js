new Vue({
    el: '#app',
    data() {
        return {
            subject: '',
        }
    },
    headers: {
        Authorization: 'Token token="5af2584eb44c954475e62bdaa2667fac"'
    },
    methods: {
        reloadPage() {
            window.location.reload()
        },
        searchByAuthor(){

        },
        searchByTag(){

        },
        searchByKeyword(){

        },
    },
    mounted() {
        axios
            .get('https://favqs.com/api/qotd').then(response => (this.subject = response.data.quote))
    },
})


//make new component
//dont make a new Vue
//dont touch anything in new Vue*