// Build a Vue application that allows a user to search for quotes on FavQs.
// -Your app must use Vue to fetch data and interact with the results.
// -Let the user enter a search term and select whether to search by keyword, author, or tag.
// -Implement pagination buttons when the search returns more than 25 quotes.
// -When the page first loads, show the user a set of completely random quotes.
// -You must have at least one Vue component in your app.

Vue.component('quotes', {
  data: function () {
    return {
      // user_input: '',
      author: '',
      reveal: [],  // array of the: quotes
    }
  },
  template:
    `<h3>Enter a keyword or author to find a quote:</h3>
    <input v-model="user_input" id="user_input" type="text">
    <button v-on:click="quote_btn">reveal quotes!</button>`
,
// let vm = new Vue({
//   el: '#app',
//   data: {
//     message: 'Enter a keyword or author to find a quote:',
//     user_input: '',
//     author: '',
//     reveal: [],  // array of the: quotes
//   },
  methods: {
    quote_btn: function() {
      axios({
        method: 'get',
        url: 'https://favqs.com/api/qotd',
      })
      // mounted() {
      //   axios
      //   .get('https://favqs.com/api/qotd')
      //   .then(response => {
      //     this.reveal = response.data.quote
      //   }),
      // },
      // axios
      //   .get('https://favqs.com/api/qotd')
      //   .then(response => (this.reveal = response.data))
    },
  },
})