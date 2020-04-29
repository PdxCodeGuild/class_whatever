Vue.component('active',{
    data () {
      return {
        type: '',
        info: [],
        
        
      }
    },
    template:
    
    `<form class="form">
      <input placeholder='what type of active' type='text' v-model='type'>
      <button @click.prevent="getData">type</button>
    </form>
    `
    ,
    methods:{
      getData: function() {
        axios({
          method:"get",
          url:"http://www.boredapi.com/api/activity",

        params: {
            // filter: this.type,
            type: this.type,
  
          }
          
        }).then(response =>{
          this.info = response.data;
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