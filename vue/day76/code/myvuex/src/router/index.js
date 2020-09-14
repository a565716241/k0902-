import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home'
import  List  from 'jie/list'


Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/list', component: List }

  ]
})


export default router
