token = "15c48e13210b3398945322a34754b742"

Vue.component("quote", {
    props: ["quote"],
    template: `<div class="quote"><p>
    <span v-if="quote.body">
        <blockquote>{{ quote.body }}</blockquote>
    </span><span v-else>
        <span v-for="line in quote.lines"><blockquote>{{ line.body }}</blockquote></span>
    </span>
    </p><a v-bind:href="quote.url">
    <span v-if="quote.author">
        {{quote.author}}
    </span><span v-else>
        <span v-for="line in quote.lines">{{ line.author }}<br/></span>
    </span></a></div>`
});

function getRandQuotes() { //still needs work
    let ret = [];
    for(let i = 0; i < 10; ++i) {
        axios.get(`https://favqs.com/api/quotes/${Math.floor(Math.random()*20000)}`, { headers: { "Authorization": `Token ${token}` }})
        .then(response => {
            ret.push(response.data);
        }).catch(error => {
            console.log(`CATCH ${error}`)
        })
    }
    return ret;
}

let vm = new Vue({
    el: "#app",
    data: {
        search_text: "",
        search_type: "keyword",
        cached_text: "",
        cached_type: "keyword",
        current_page: {
            page: 1,
            last_page: true,
            quotes: getRandQuotes()
        }
    },
    methods: {
        search : function() {
            this.cached_text = this.search_text;
            this.cached_type = this.search_type;
            axios.get(`https://favqs.com/api/quotes?filter=${this.cached_text}&type=${this.cached_type}`, {
                headers : { "Authorization": `Token ${token}` }
            }
            ).then(response => {
                this.current_page = response.data;
                this.search_text = "";
            }).catch( error=> {
                console.log(`search ERR: ${error}`);
            });
        },
        next : function() {
            axios.get(`https://favqs.com/api/quotes?filter=${this.cached_text}&type=${this.cached_type}&page=${this.current_page.page + 1}`, {
                headers : { "Authorization": `Token ${token}` }
            }
            ).then(response => {
                this.current_page = response.data;
            }).catch( error=> {
                console.log(`next ERR: ${error}`);
            });
        },
        prev : function() {
            console.log("PREV start");
            axios.get(`https://favqs.com/api/quotes?filter=${this.cached_text}&type=${this.cached_type}&page=${this.current_page.page - 1}`, {
                headers : { "Authorization": `Token ${token}` }
            }
            ).then(response => {
                console.log("PREV get");
                this.current_page = response.data;
            }).catch( error=> {
                console.log(`ERR: ${error}`);
            });
        },
        lastPage : function() {
            return this.current_page.last_page || this.current_page.quotes.length <= 1;
        }
    }
});