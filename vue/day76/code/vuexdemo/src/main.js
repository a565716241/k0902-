// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 引入vuex 里面的store
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 挂载 store
  // store
  store:store,

  components: { App },
  template: '<App/>'
})
