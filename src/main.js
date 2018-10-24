// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HeaderGuide from './components/HeaderGuide/HeaderGuide.vue'
import router from './router/index'
import store from './store'


Vue.config.productionTip = false

import 'swiper/dist/css/swiper.min.css'
import './mock/index'
import './filters'


Vue.component('HeaderGuide', HeaderGuide)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  router,
  store
})
