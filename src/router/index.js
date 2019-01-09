import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/content/index'
import Joinus from '@/components/content/joinus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/joinus',
      name: 'Joinus',
      component: Joinus
    }
  ]
})
