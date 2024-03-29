import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './permission'
// 全局css
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
