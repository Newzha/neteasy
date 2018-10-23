/*
  路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite.vue'
import FindThings from '../pages/FindThings/FindThings.vue'
import Category from '../pages/Category/Category.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/findthings',
      component: FindThings
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcar',
      component: ShopCar
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    },


  ]
})

export default router
