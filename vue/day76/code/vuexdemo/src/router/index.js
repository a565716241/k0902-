import Vue from 'vue'
import Router from 'vue-router'

import  Home from '../views/home'
import  List from '../views/list'




Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/list',component:List}
  ]
})
