
new Vue({
    el: '#app',
    data () {
        return {
            author: '',
            quote: '',
            subject: '',
        }
    },
    mounted() {
    axios
    .get('https://favqs.com/api/qotd').then(response => (this.subject = response.data.quote))
    },
})

//make new component
//dont make a new Vue
//dont touch anything in new Vue*

