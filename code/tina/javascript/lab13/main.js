
  new Vue({
    el: '#app',
    data () {
      return {
        info: {}
      }
    },
    mounted () {
      axios
        .get('https://favqs.com/api/quotes')
        .then(response => (this.info = response))
        .header()
        
    }
  })