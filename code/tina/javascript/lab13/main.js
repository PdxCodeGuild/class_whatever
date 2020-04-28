Vue.component('quotes',{
  data () {
    return {
      info: [],
      author: '',
      last_page: false
    }
  },
  template:
  
  `<div class="class">
    <input placeholder='author' type='Text' v-model='author'>
    <button @click="getData">Quote</button>
    <ul>
      <li v-for="object in info">
        {{object.body}}
      </li>
    </ul>

  </div>
  `
  ,
  methods:{
    getData: function() {
      axios({
        method:"get",
        url:"https://favqs.com/api/quotes",
        headers: {
          Authorization:
          'Token token="486c11b9bd4c82f3fce1627f2897f3b5"'
        },
        params: {
          fliter:this.author,
          type: 'author'
        }
      }).then(response =>{
        this.info = response.data.quotes;
        
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



 