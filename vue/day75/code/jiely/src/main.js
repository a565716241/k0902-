
import Vue from 'vue'
import App from './App'
import router from './router/index.js'  
/* 默认index可以省略 */



/* eslint-disable no-new */    //eslint-disable  不用eslint 规范
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
