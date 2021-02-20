<!--
 * @Description: 购物车页面
 * @Author: yaolin
 * @Date: 2021-02-20 12:49:53
 * @LastEditors: yaolin
-->
<template>
  <div class="cartComponents">
    <div class="header">
      <van-nav-bar
        fixed
        title="购物车"
        right-text="删除"
        @click-right="deleteItem"/>
    </div>
    <div class="contain">
      <CartItem v-for="(item, index) in goodList" :key="index" :item='item'></CartItem>
    </div>
    <div class="line">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        猜你喜欢
      </van-divider>
    </div>
    <div class="Guess">
      <GoodItem :item='item' v-for="(item, index) in otherGood" :key="index"></GoodItem>
    </div>
    
    <div class="submitBar">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import CartItem from './components/CartItem'
import GoodItem from './components/GoodItem'
export default {
  props: {

  },
  components: {
    CartItem,
    GoodItem
  },
  data(){
    return {
      checkAll:'false',
      otherGood:[]
    }
  },
  computed: {
    goodList() {
      return this.$store.state.cart
    }
  },
  methods: {
    deleteItem() {

    },
    onSubmit() {
      
    },
    getOtherGoods() {
      let data = {
        // phone: this.userLogin.phone,
        // password:this.userLogin.password
      }
      let url='/goodsData'

      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.otherGood = res.data.lists
        }
      })
    }
  },
  mounted() {
    this.getOtherGoods()
  },
}
</script>

<style lang="less" scoped>
.cartComponents{
  background-color: #f3f3f3;
}
.contain{
  margin-top: 50px;
}
.Guess{
  display: flex;
  flex-wrap: wrap;
}
.submitBar{
  position: fixed;
}
/deep/.van-submit-bar {
bottom: 50px;
}
</style>