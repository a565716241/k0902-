<template>
  <div id="xxx">
   <img src="./assets/logo.png" alt="">
   <router-link  to='/home'> home</router-link>
    <router-link  to='/list'> list</router-link>
    <router-view/>

    <h2>我是App 组件</h2>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#xxx {
  color: red;
}
</style>
