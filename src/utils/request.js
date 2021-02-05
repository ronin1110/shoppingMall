/*
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 15:57:52
 * @LastEditors: yaolin
 */
import axios from 'axios'
import ElementUI from 'element-ui'
import Vue from 'vue'
const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/763365f7578e614982b60a99bdc10127/api',
  timeout: 3*1000,
  headers:{
    'name': 'yaolin',
    'age': 14
  }
})

service.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

Vue.prototype.$http = service

Vue.prototype.$post = function(url, data) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(res=>{
      if(res.status == 200) {
        console.log('dlksjalkj');
        resolve(res.data)
      } else {
        ElementUI.Message.error(res.data.msg)
      }
    }).catch(error => {
      console.log(error)
      reject(error)
    })
  }) 
}

Vue.prototype.$get = function(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {params}).then(res => {


      if(res.status = 200) {
        console.log('dlksjalkj');
        resolve(res.data)
      }else {
        ElementUI.Message.error(res.data.msg)
      }
    }).catch(error => {
      console.log(error)
      reject(error)
    }) 
  })
}


