import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'
import {store} from './store/store.js'

// 配置默认根路径
axios.defaults.baseURL = "http://localhost:3000/"

// 配置Vue原型 (在任何组件中都可以正常使用axios)
Vue.prototype.$axios = axios

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode:'history',
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
