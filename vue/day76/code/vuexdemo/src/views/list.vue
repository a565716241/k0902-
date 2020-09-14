<template>
  <div>

 <h1>  list</h1>

 <div>{{$store.state.count}}</div>


 <button @click='change'>点击更改</button>


  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
      //直接更改store 里面的mutations里面的方法 这个方法是同步的  如有要操作异步采用 actions
      change(){
        //   this.$store.commit('写mutations里面的方法名字')
          this.$store.commit('add')
      }
      
  },
};
</script>

<style scoped>
</style>