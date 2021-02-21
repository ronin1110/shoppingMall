<!--
 * @Description: goodItem
 * @Author: yaolin
 * @Date: 2021-02-15 16:06:26
 * @LastEditors: yaolin
-->
<template>
  <div class="goodItem" v-if="item">
    <div class="pic" @click="toDetail">
      <img :src="item.imgUrls[0]" width="150px" height="150px" alt="">
    </div>
    <div class="introduce">{{item.title}}</div>
    <div class="priceOut">
      <div class="priceIn">
        <div class="newPrice">￥{{item.price}}</div>
        <div class="oldPrice">￥{{item.oldPrice}}</div>
      </div>
      <div class="cart">
        <van-icon size='1.5rem' @click="handleAddCart" color='white' name="cart-o"/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    item:Object
  },
  components: {

  },
  data(){
    return {
      // item: {
      //   imgUrl:require('../../../assets/loginPics/pic2.jpg'),
      //   introduce:'美国车厘子 250g',
      //   oldPrice: '19.2',
      //   price: '10.2',
      // }
    }
  },
  methods: {
    handleAddCart() {
      this.$store.commit('addGood', this.item)
      this.$notify({ type: 'success', message: '添加成功' })
    },
    toDetail() {
      this.$router.push('goodDetail')
    }
  }
}
</script>

<style lang="less" scoped>
.goodItem{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pic{
  margin: 1rem;
}
.introduce{
  font-size: .8rem;
  margin-bottom: 1rem;
}
.priceOut{
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.oldPrice{
  text-decoration: line-through;
  color: #999;
  font-size: 1rem;
  height: 1rem;
}
.newPrice{
  font-size: 1.5rem;
  height: 2rem;
  color: #f37078;
}
.cart{
  background-color: #3bba63;
  padding: .2rem;
  border-radius: 50%;
}
</style>