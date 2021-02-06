/*
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 09:21:38
 * @LastEditors: yaolin
 */
import Vue from 'vue'
import App from '../App.vue'
import router from '../router/index'
import store from '../store'
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/utils/request.js'

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
