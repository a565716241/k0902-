import Vue from 'vue'
import Router from 'vue-router'


import List from '../views/list.vue'

import New from '../views/news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/news',
      name: 'news',
      component: New
    }
  ]
})
