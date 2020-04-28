  let vm = new Vue({
      el: '#app',
      data: {
          quoteResponse: {}
      },
      methods: {
          load-new-quote: function () {
              axios({
                  method: "get",
                  url: "http://quotes.stormconsultancy.co.uk/random.json",
              }).then(response => {
                  this.quoteResponse = response.data;
              })
          }
      },
  });
  //http://quotes.stormconsultancy.co.uk/random.json//