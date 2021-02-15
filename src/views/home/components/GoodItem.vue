<!--
 * @Description: goodItem
 * @Author: yaolin
 * @Date: 2021-02-15 16:06:26
 * @LastEditors: yaolin
-->
<template>
  <div class="goodItem">
    <div class="pic">
      <img :src="item.imgUrl" width="120px" height="120px" alt="">
    </div>
    <div class="introduce">{{item.introduce}}</div>
    <div class="priceOut">
      <div class="priceIn">
        <div class="newPrice">￥{{item.newPrice}}</div>
        <div class="oldPrice">￥{{item.oldPrice}}</div>
      </div>
      <div class="cart">
        <van-icon size='1.5rem' color='white' name="cart-o"/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  data(){
    return {
      item: {
        imgUrl:require('../../../assets/loginPics/pic2.jpg'),
        introduce:'美国车厘子 250g',
        oldPrice: '19.2',
        newPrice: '10.2',
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.goodItem{
  width: 150px;
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