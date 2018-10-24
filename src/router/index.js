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

// 懒加载主路由


Vue.use(VueRouter)

const router = new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/findthings',
      component: FindThings,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/shopcar',
      component: ShopCar,
      meta: {
        showFooter: true // 标识需要显示footer
      }
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
