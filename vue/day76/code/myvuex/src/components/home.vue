<template>
  <div>
    <h1>home</h1>

    <div> 数量： {{this.$store.state.count}}</div>


     <button @click="inCont">增加数组++</button>


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
         
         //这里是组件直接触发   commit('incCount')
        //  this.$store.commit('incCount') ;
        // 这里我们用组件的dispatch 触发actions    然后就是actions 触发  mutations里面的方法
        this.$store.dispatch('incMutationsCoun')


      }
  },
};
</script>

<style scoped>
</style>