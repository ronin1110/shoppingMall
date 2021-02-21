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
    position: localStorage['position'] ? JSON.parse(localStorage['position']) : {},

    cart: localStorage['cart'] ? JSON.parse(localStorage['cart']) : [],
    sum:0,
    choiceTitles:[],
    checkAll:false,

  },
  getters: {
    cartItemNum(state) {
      return state.cart.length
    }
  },
  mutations: {
    changeAddress(state,position) {
      this.state.position = position
      localStorage.setItem('position', JSON.stringify(state.position))
    },
    
    addGood(state,item){
      state.cart.push(item)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    deleteGood(state, title){
      state.cart.forEach((item, index) => {
        if(item.title === title) {
          console.log(index);
          state.cart.splice(index, 1)
        }
      })

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    changeSum(state, tempSum){
      state.sum += tempSum 
    },
    changeCheckAll(state) {
      state.checkAll = !state.checkAll
    },

    addTitle(state, title) {
      state.choiceTitles.push(title)
    },
    deleteTitle(state, data) {
      state.choiceTitles.forEach((title , index) => {
        if(title === data) {
          // console.log('9');
          state.choiceTitles.splice(index, 1)
        }
      })
    },
    clearTitle(state) {
      state.choiceTitles = []
    },
    clearSum(state) {
      state.sum = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
