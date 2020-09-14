<template>
  <div>
            <h1>  home</h1>            
 <div>{{$store.state.count}}</div>

 <button @click="change">点击更改</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
       change(){
        //   this.$store.commit('写mutations里面的方法名字')
          this.$store.commit('add')
      }
      
  }
}
</script>

<style scoped>

</style>