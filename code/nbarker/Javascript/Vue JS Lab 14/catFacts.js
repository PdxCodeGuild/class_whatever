new Vue({
    el: '#app',
    data () {
        return {
            subject: '', 
            something: '',
            another_thing: '',
        }
    },
    mounted() {
    axios({
        url: 'https://cat-fact.herokuapp.com/facts/random',
        method: 'get',
    })
    .then(response => (this.subject = response.data.text))},
})
//make new component
//dont make a new Vue
//dont touch anything in new Vue*