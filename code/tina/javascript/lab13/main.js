Vue.component('quotes',{
  data () {
    return {
      author: '',
      info: [],
      
      
    }
  },
  template:
  
  `<form class="form">
    <input placeholder='author' type='text' v-model='author'>
    <button @click.prevent="getData">Quote</button>
  </form>
  `
  ,
  methods:{
    getData: function() {
      axios({
        method:"get",
        url:"https://favqs.com/api/quotes/",
        headers: {
          Authorization:
          'Token token="486c11b9bd4c82f3fce1627f2897f3b5"'
        },
        params: {
          filter: this.author,
          type: 'author',

        }
      }).then(response =>{
        this.info = response.data.quotes;
        this.$emit('results',this.info)
      })

      
      
    }
    
  }
  
  
})


  new Vue({
    el: '#app',
    data () {
      return {
        info: [],
        
      }
    },
    
    
  })



 