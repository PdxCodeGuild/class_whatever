    new Vue({
      el: '#app',
      data () {
        return {
          info: [],
          
        }
      },
      mounted(){
          axios
          .get('api.census.gov/data/2019/pep/population')
          .then(response => this.info = response.data)

      }
        
      
      
    })