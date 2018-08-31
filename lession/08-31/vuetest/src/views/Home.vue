<template>
  <div class="home">
    <h1 @click="getdata">click me to get data!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
import jsonp from "jsonp"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      list: []
    }
  },
  methods: {
    getdata: function() {
      console.log(this.list);
    }
  },
  created: function() {
    var that = this;
    axios.get("https://easy-mock.com/mock/5b712abe3ec6e13ce517da93/Ranking/rankingList")
      .then(function(res){
        // console.log(res);
        that.list = res.data.data.result;
      })
      .catch(function(err){
        console.log(err);
      });
    jsonp("http://api.douban.com/v2/movie/top250?start=0&count=10",null,function(err,res){
      if(!err) {
        console.log(res);
      }
    });
  }
}
</script>
