Vue.component('active',{
    data () {
      return {
        selected: '',
        info: [],
    
        
        
      }
    },
    template:
    
    `
    <select id="selected" @change="getData" v-model="selected">
        <option value="">Please select one</option>
        <option>education</option>
        <option value="recreational">Recreational</option>
        <option>social</option>
        <option>diy</option>
        <option>charity</option>
        <option>cooking</option>
        <option>relaxation</option>
        <option>music</option>
        <option>busywork</option>
    </select>
    `
    ,
    methods:{
      getData: function() {
        axios({
          method:"get",
          url:"http://www.boredapi.com/api/activity",
          params: {
              type: this.selected,
              filter: this.selected,
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