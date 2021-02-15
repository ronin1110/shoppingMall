<!--
 * @Description: nav
 * @Author: yaolin
 * @Date: 2021-02-14 16:39:30
 * @LastEditors: yaolin
-->
<template>
  <div class="nav">
    <van-grid :border='false' :column-num='5' :gutter='0'>
       <van-grid-item v-for="(item, index) in imgs" :key="index">
         <van-image :src="item.imgUrl" alt="img" width='28px' />
         <div>{{item.text}}</div>
       </van-grid-item>

    </van-grid>
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
      imgs:[
        {
          imgUrl: require('../../../assets/navPic/bottle.jpg'),
          text: '奶瓶'
        },
        {
          imgUrl: require('../../../assets/navPic/bun.jpg'),
          text: '面包'
        },
        {
          imgUrl: require('../../../assets/navPic/cola.jpg'),
          text: '可乐'
        },
        {
          imgUrl: require('../../../assets/navPic/fish.jpg'),
          text: '鱼'
        },
        {
          imgUrl: require('../../../assets/navPic/meet.jpg'),
          text: '肉'
        },
        {
          imgUrl: require('../../../assets/navPic/milk.jpg'),
          text: '牛奶'
        },
        {
          imgUrl: require('../../../assets/navPic/oil.jpg'),
          text: '油'
        },
        {
          imgUrl: require('../../../assets/navPic/popsicle.jpg'),
          text: '棒冰'
        },
        {
          imgUrl: require('../../../assets/navPic/vagetable.jpg'),
          text: '蔬菜'
        },
        {
          imgUrl: require('../../../assets/navPic/watermelon.jpg'),
          text: '西瓜'
        },

      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.nav{
  background-color: white;
  font-size: .6rem;
  color: #7d7e80;
}
</style>