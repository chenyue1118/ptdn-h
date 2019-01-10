import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/content/index'
import Joinus from '@/components/content/joinus'
import News from '@/components/content/news'
import Profile from '@/components/content/profile'
import Morenews from '@/components/content/morenews'
import Product from '@/components/content/product'

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
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: '/morenews',
      name: 'Morenews',
      component: Morenews
    }, {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
