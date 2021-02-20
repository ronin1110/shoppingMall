/*
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 09:21:38
 * @LastEditors: yaolin
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/home/components/Map.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/goodDetail',
    name: 'goodDetail',
    component: () => import('../views/goodDetail/goodDetail.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
