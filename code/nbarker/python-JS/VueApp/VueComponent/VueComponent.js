new Vue({
    el: '#app',
    data () {
        return {
            author: '',
            quote: '',
            tags: '',            
        }
    },
    mounted() {
    axios({
        url: 'https://favqs.com/api/quotes',
        method: 'get', 
        headers: {
            authorization: 'Token token = "b8dd7605093aa3ff39a5a061b2070560"'
    },
})
.then(response => console.log(response));
//make new component
//dont make a new Vue
//dont touch anything in new Vue*

