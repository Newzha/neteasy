// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'

import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'
import router from './router/index'
import store from './store'


Vue.config.productionTip = false

import 'swiper/dist/css/swiper.min.css'
import './mock/index'
import './filters'
import loading from './common/imgs-lazy/loading.gif'

Vue.component('HeaderGuide', HeaderGuide)

Vue.use(VueLazyload, { // 内部添加一个全局指令: lazy
  loading,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  router,
  store
})
