/*
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 09:21:38
 * @LastEditors: yaolin
 * 362de121d41b4efb0323b9328f6d3f9e
 */
import Vue from 'vue'
import App from '../App.vue'
import router from '../router/index'
import store from '../store'
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/utils/request.js'
{/* <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.8&key=362de121d41b4efb0323b9328f6d3f9e"></script>  */}
// import 'https://webapi.amap.com/maps?v=1.4.8&key=362de121d41b4efb0323b9328f6d3f9e'

Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
