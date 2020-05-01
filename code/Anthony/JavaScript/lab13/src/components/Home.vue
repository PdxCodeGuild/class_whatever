<template>
  <div class="container">
    <h1 class="text-center pt-4">FAQS Search</h1>
    <div class="row" id="search form">
      <form @submit.prevent="getQuotes">
        <div class="form form-inline">
          <label for="search">Search Quote:</label>
          <input type="text" v-model="search" id="search" class="form-control mx-3"  required/>
          <label for="by">Search By:</label>
          <select v-model="by" id="by" class="form-control mx-3">
            <option>Keyword</option>
            <option value="author" >Author</option>
            <option value="tag">Tag</option>
          </select>
          <input type="submit" class="btn btn-primary" value="search">
        </div>
        
      </form>
    </div>
    <div class="row m-3" v-if="quotes" id="pagination">
      <div class="col-6 text-right">
        <button :disabled="!search  || quotes.page < 2" @click="getQuotes(quotes.page -1)" class="btn btn-primary">Prev Page</button>
      </div>
       <div class="col-6">
        <button :disabled="quotes.last_page || !search" @click="getQuotes(quotes.page + 1)" class="btn btn-primary">Next Page</button>
      </div>
    </div>

    <div class="row m-4" v-if="quotes" id="search content">
      <div class="list-group">
        <div v-for="(quote,index) in quotes.quotes" :key="index" class="list-group-item m-2">
          <div>
            <span class="text-danger">
            Author:
          </span> {{quote.author}}
          </div>
          <div>
            <h6 class="text-danger">Quote</h6>
            {{quote.body}}
          </div>
        </div>
      </div>
    </div>
    <div class="row " v-else>
      <div class="col-12 text-center">
        <img src="200_d.gif" alt="">
      </div>
    </div>
    <div class="row m-3" v-if="quotes" id="pagination">
      <div class="col-6 text-right">
        <button :disabled="!search  || quotes.page < 2" @click="getQuotes(quotes.page -1)" class="btn btn-primary">Prev Page</button>
      </div>
       <div class="col-6">
        <button :disabled="quotes.last_page || !search" @click="getQuotes(quotes.page + 1)" class="btn btn-primary">Next Page</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Home",
  methods: {
    getQuotes (page=1) {
      let url = ''
      if(!this.search){
        url =  'https://favqs.com/api/quotes'
      }
      else {
        url = 'https://favqs.com/api/quotes' + '?filter=' + this.search
      }

      if(this.by){
        url += '&type=' + this.by
      }
      if(page > 1){
        url += '&page=' + page
      }
      
      axios.get(encodeURI(url),
      {
        headers: {
          Authorization: 'Token token="88a751e7ff32b5d0fe02a40d9590ffcd"'
        }
      })
      .then(resp => {
        console.log(resp.data);
        this.quotes = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
    
    }
  },
  data() {
    return {
      quotes: "",
      by: "",
      search: ""
    };
  },
  mounted() {
    axios
      .get("https://favqs.com/api/quotes", {
        headers: {
          Authorization: 'Token token="88a751e7ff32b5d0fe02a40d9590ffcd"'
        }
      })
      .then(resp => {
        console.log(resp.data);
        this.quotes = resp.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
