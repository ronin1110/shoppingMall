<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 09:21:38
 * @LastEditors: yaolin
 	362de121d41b4efb0323b9328f6d3f9e
-->
<template>
  <div id="app">
    <router-view style="margin-bottom:50px"/>
    
    <van-tabbar route v-if="flag">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="cluster-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/myInfo" icon="user-circle-o">我的</van-tabbar-item>
      <van-tabbar-item replace to="/goodDetail" icon="user-circle-o">商品详情页 方便跳转</van-tabbar-item>
    </van-tabbar>
  </div>  

</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    flag(){
      return this.$route.name !== 'goodDetail'
    }
  },
  mounted() {
    // if(this.$router.name === 'goodDetail') {
    //   flag = false
    // }
    console.log(this.$route.name === 'goodDetail');
  },
}
</script>

<style lang="less" scoped>

</style>
