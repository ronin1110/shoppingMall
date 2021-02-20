<!--
 * @Description: 购物车项
 * @Author: yaolin
 * @Date: 2021-02-20 13:13:43
 * @LastEditors: yaolin
-->
<template>
  <div class="cartItemComponent">
    <div class="checkBox">
      <van-checkbox v-model="checked"></van-checkbox>
    </div>
    <div class="imgContain">
      <van-image :src="item.imgUrls[0]" fit="contain" width='100'  />
    </div>
    <div class="info">
      <div class="title">
        {{item.title}}
      </div>
      <div class="priceAndNum">
        <div class="price">
          ￥{{item.price}}
        </div>
        <div class="num">
          <van-stepper v-model="item.num" integer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  components: {

  },
  data(){
    return {
      checked:true,
      // item:{
      //   num:1,
      //   imgUrls:[require('../../../assets/loginPics/pic4.jpg'), require('../../../assets/loginPics/pic5.jpg')],
      //   detailImgUrls:[require('../../../assets/loginPics/pic5.jpg'), require('../../../assets/loginPics/pic1.jpg')],
      //   price:'19.4',
      //   originPrice:'11',
      //   info:'wowowowoow',
      //   title:'垃圾时评',
      //   tags:['菜鸟', '垃圾'],
      //   sold:'89',
      //   sizeInfo:'冷藏',
      //   keepTime: '12'
      // }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.cartItemComponent{
  display: flex;
  background-color: white;
}
.checkBox{
  margin: auto 1rem;
}
.imgContain{
  margin: 1rem 0;
}
.info{
  width: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title{
    position: relative;
  }
  .priceAndNum{
    display: flex;
    justify-content: space-between;
  }
}

</style>