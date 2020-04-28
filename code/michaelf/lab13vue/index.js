console.log("hello world")

let app=new Vue({
    el: '#app',
    data: {
        qotd: null,
        results: null,
        loading:true,
        page: 1,
        errored:false,
        searchtype: null,
        searchinput: '',
        submitted:false
    },
    methods:{
        pagecheck: function(){
            if (this.page !== 1){
                this.page = 1
            }
            this.submit()

        },

        submit: function(){
            let config={
                headers:{
                    'Authorization': 'Token token="566fb1bae1dd557a969d40a3bb7b6102"'
                    }}
            if (this.searchtype==="tag"){
                axios 
                    .get(`https://favqs.com/api/quotes/?filter=${this.searchinput.trim()}&type=tag&page=${this.page}`,config)
                    .then(response => (this.results=response.data))
            } if (this.searchtype==="author"){
                let author=this.searchinput.trim().replace(' ','+')
                console.log(author)
                axios 
                    .get(`https://favqs.com/api/quotes/?filter=${author}&type=author&page=${this.page}`,config)
                    .then(response => (this.results=response.data))

            } if (this.searchtype==="keyword"){
                axios
                    .get(`https://favqs.com/api/quotes/?filter=${this.searchinput.trim()}&page=${this.page}`,config)
                    .then(response => (this.results=response.data))
            }
            this.submitted = true

        },
        nextpage: function(){
            this.page++
            this.submit()
            if (this.results.quotes.length < 25){
                this.results.last_page=true
            }
        },
        previouspage: function(){
            this.page-=1
            this.submit()
        }

    },
    mounted: function(){
        axios
            .get('https://favqs.com/api/qotd')
            .then(response => (this.qotd=response.data.quote))
    }
})