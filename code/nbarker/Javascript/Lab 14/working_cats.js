new Vue({
    el: '#app',
    components:{
        //
    },
    methods:{
        getPostByTag(){
            axios.get(`http://jsonplaceholder.typicode.com/posts?q=$this.searchPhrase.trim()}`, config).then(response => (this.searchResult=response.data))
        },
        getPostByAuthor(){
            axios.get(`http://jsonplaceholder.typicode.com/posts?q=$this.searchPhrase.trim()}`, config).then(response => (this.searchResult = response.data))
        
        },
        nextPage(){
            axios.get('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10')
            .then(response => this.posts = response.data)
        },
        nextPage2() {
            axios.get('http://jsonplaceholder.typicode.com/posts?_start=20&_limit=10')
                .then(response => this.posts = response.data)
                        },
        prevPage(){
            axios.get('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10').then(response => this.posts = response.data)
            
        },
    },


    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => this.posts = response.data)
        .catch(error => this.posts = [{title: "meow! no posts found."}])
        .finally(() => console.log('data loaded'));
        },

    data : {
        posts: null,
        page: 0,  
    },
    
});