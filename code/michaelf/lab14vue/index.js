console.log("hello")
let app=new Vue({
    el: '#app',
    data: {
       results: null,
       searchTerm: 'The Beatles',
       slicedResults: null,
       page:1,
       lastPage: false,
       a: 0,
       b: 15,


    },

    methods: {
        request: function(){
            this.page=1
            this.a=0
            this.b=15
            let config= {
                params: {
                    'pattern': this.searchTerm,
                }
            }
            axios
                .get('http://www.songsterr.com/a/ra/songs.json', config)
                .then(response => {
                    this.results=response.data
                    console.log(this.results)
                    this.sliceResults()
                })
        },

        sliceResults: function(){
            this.slicedResults=this.results.slice(this.a,this.b)
            if (this.slicedResults.length < 15){
                this.lastPage=true
            }
            else{
                this.lastPage=false
            }
        },
        nextPage: function(){
            this.a=this.b
            this.b+=15
            this.page++
            this.sliceResults()
        },
        previousPage: function(){
            this.b=this.a
            this.a-=15
            this.page-=1
            this.sliceResults()
        }

    },

    
    mounted: function(){
        this.page=1
        this.a=0
        this.b=15
        let config= {
            params: {
                'pattern': this.searchTerm,
            }
        }
        axios
            .get('http://www.songsterr.com/a/ra/songs.json', config)
            .then(response => {
                this.results=response.data
                console.log(this.results)
                this.sliceResults()
            })
    }
})