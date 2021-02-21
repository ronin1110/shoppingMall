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
    <div class="imgContain" @click="toDetail">
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
          <van-stepper v-model="num" @minus='reduce' @plus='add' integer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index:Number
  },
  components: {

  },
  computed: {
    checkAll() {
      return this.$store.state.checkAll
    },

  },
  data(){
    return {
      checked:false,
      num:1
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
    toDetail() {
      this.$router.push('goodDetail')
    },
    add() {
      if(this.checked) {
        let tempSum = this.item.price * 1
        this.$store.commit('changeSum', tempSum)
      }
    },
    reduce() {
      if(this.checked) {
        let tempSum = -this.item.price * 1
        this.$store.commit('changeSum', tempSum)
      }
    }
  },
  watch: {
    checkAll() {
      if(this.checkAll) {
        this.checked = true
      } else{
        this.checked = false
      }
    },
    checked() {
      if(this.checked) {
        let tempSum = this.item.price * this.num
        this.$store.commit('changeSum', tempSum)
        this.$store.commit('addTitle', this.item.title)
      } else {
        let tempSum = -this.item.price * this.num
        this.$store.commit('changeSum', tempSum)
        this.$store.commit('deleteTitle', this.item.title)
      }
    },
  },
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