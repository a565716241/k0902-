<template>
  <div>
    <h1>list</h1>

    <div>{{this.$store.state.count}}</div>

    <button @click="inCont">增加数量++</button>
    <button @click="jianjian">减少数量--</button>



     <div>  商品的价格： 数量乘以单价 ：  单价 100   
       
       总价：  {{this.$store.getters.computedCount}}
          </div> 
  </div>
</template>

<script>
// 局部引入store
import store from "../vuex/store.js";
export default {
  // store:store,
  store,
  name: "",
  data() {
    return {};
  },

  methods: {
    inCont() {
      this.$store.commit("incCount");
    },

    jianjian() {

        this.$store.commit("reduceCount");
        
    }
  },
};
</script>

<style scoped>
</style>