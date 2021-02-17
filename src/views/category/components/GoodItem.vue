<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-17 17:22:18
 * @LastEditors: yaolin
-->
<template>
  <div class="GoodItemComponent">
      <van-card
        :price="item.price"
        :desc="item.info"
        :title="item.title"
        :thumb="item.imgUrl">
        <template #tags>
          <van-tag v-for="(tag, index) in item.tags" :key="index" plain type="danger">{{tag}}</van-tag>
          <!-- <van-tag plain type="danger">标签</van-tag> -->
        </template>
        <template #footer>
          <!-- <van-button size="mini">按钮</van-button> -->
          <!-- <van-button size="mini">按钮</van-button> -->
          <van-icon size='1.6rem' name="cart-o"/>
        </template>
      </van-card>
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
      //   imgUrl:require('../../../assets/loginPics/pic4.jpg'),
      //   title:'菜名菜名',
      //   info:'我wodewoewopeidop ',
      //   price:'19.2',
      //   tags:['没用lalal 过', '傻逼']
      // }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.GoodItemComponent{
  // display: flex;
  // width: 100%;
  // width: calc(100% - 80px);
  // height: 100px;
}
</style>