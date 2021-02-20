/*
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 09:21:38
 * @LastEditors: yaolin
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address:'',
    position: {},

    cart: localStorage['cart'] ? JSON.parse(localStorage['cart']) : []
  },
  mutations: {
    changeAddress(state,position) {
      this.state.position = position
    },
    addGood(state,item){
      state.cart.push(item)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
  },
  modules: {
  }
})
