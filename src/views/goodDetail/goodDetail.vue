<!--
 * @Description: 商品详情页
 * @Author: yaolin
 * @Date: 2021-02-18 09:17:34
 * @LastEditors: yaolin
-->
<template>
  <div class="goodDetailComponent">
    <div class="header">
      <van-nav-bar title="商品详情" fixed @click-left='back' left-text="返回" left-arrow>
        <!-- <template #right>
          <van-icon name="search" size="18" />
        </template> -->
      </van-nav-bar>
    </div>
    <div class="imgContain">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(imageUrl, index) in item.imgUrls" :key="index">
          <van-image :src="imageUrl" fit="contain"  />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goodInfoContain">
      <van-card
      style="background-color:white"
        :price="item.price"
        :desc="item.info"
        :title="item.title"
        :originPrice='item.originPrice'>
        <template #tags>
          <van-tag plain v-for="(tag, index) in item.tags" :key="index" type="danger">{{tag}}</van-tag>
        </template>
        <template #footer>
          <div class="footerRight">
            已售{{item.sold}}件
          </div>
        </template>
      </van-card>
    </div>

    <div class="sizeInfoContain"> 
      <van-divider />
      <p class="title">规格</p>
      <van-divider />
      <p class="item">保存条件： {{item.sizeInfo}}</p>
      <van-divider />
      <p class="item">保质期： {{item.keepTime}}个月</p>
            <van-divider />
    </div>
    <div class="detailImgs">
      <van-image v-for="(imgUrl, index) in item.detailImgUrls" :key="index" :src="imgUrl" fit="contain"  />  
    </div>

    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
        <van-goods-action-button
          type="danger"
          text="加入购物车"
          @click="handleAddCart"/>
      </van-goods-action>
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
      item:{
        imgUrls:[require('../../assets/loginPics/pic3.jpg'), require('../../assets/loginPics/pic5.jpg')],
        detailImgUrls:[require('../../assets/loginPics/pic5.jpg'), require('../../assets/loginPics/pic1.jpg')],
        price:'19.4',
        originPrice:'11',
        info:'wowowowoow',
        title:'垃圾时评',
        tags:['菜鸟', '垃圾'],
        sold:'89',
        sizeInfo:'冷藏',
        keepTime: '12'
      }
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    handleAddCart() {
      this.$store.commit('addGood', this.item)
    },
    toCart() {
      this.$router.push('cart')
    }
  }
}
</script>

<style lang="less" scoped>
.footerRight{
  color: #e25450;
  font-size: 1rem;
}
.goodInfoContain{
  background: white;
}
.sizeInfoContain{
  background: white;
  .item{
    margin-left: 1rem;
    font-size: .5rem;
  }
  .title{
    margin-left: 1rem;
    
  }
}
.goodDetailComponent{
  background: #f5f5f5;
}
.detailImgs{
  margin-top: 2rem;
}
</style>