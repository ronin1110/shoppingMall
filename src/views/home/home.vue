<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-09 09:46:47
 * @LastEditors: yaolin
-->
<template>
  <div id="home">
    <div class="con">
      <div>
        <Header></Header>
      </div>
      <div class="shuffling">
        <Banner></Banner>
      </div>
      <div class="tips">
        <Tips></Tips>
      </div>
      <div class="adImg">
        <van-image src="http://518taole.7-orange.cn/homead2.gif" alt="广告位" height="105px" width="100%" />
      </div>
    </div>


    <div class="nav">
      <Nav></Nav>
    </div>
    
    <div id="vipTip">
      <VipTip></VipTip>
    </div>
    <div id="titleWrapper">
      <TitleWrapper></TitleWrapper>
    </div>
    <div id="goodItems">
      <GoodItem></GoodItem>
      <GoodItem></GoodItem>
      <GoodItem></GoodItem>
      <GoodItem></GoodItem>
    </div>
    <div class="itemContain">
      <van-tabs v-model="active" swipeable animated>
        <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
          <template #title>
          </template>
          
          内容 {{ index }}
          <GoodItem></GoodItem>

        </van-tab>
      </van-tabs>
    </div>

    





  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Tips from './components/Tips.vue'
import VipTip from './components/VipTip.vue'
import Nav from './components/Nav.vue'
import TitleWrapper from './components/TitleWrapper'
import GoodItem from './components/GoodItem'
export default {
  props: {

  },
  components: {
    Header,
    Banner,
    Tips,
    Nav,
    VipTip,
    TitleWrapper,
    GoodItem
  },
  data(){
    return {
      active: 0
    }
  },
  methods: {

  },
  mounted() {
    
  },
}
</script>

<style lang="less" scoped>
#home{
  width: 100vw;
  // height: 90vh;
  height: 100%;
  margin: 0 0 50px 0;
  padding: 0;

  .con{
    background-image: url('http://518taole.7-orange.cn/backImage.png');
    background-position: 100% 100%;
  }
}
#test{

}
.shuffling{
  // padding: 1rem;
  // display: flex;
  // justify-content: center;
  // margin: 0 0 300px 0;
  margin: auto;
  width: 90vw;

}
.adImg{
  height: 105px;
}
#vipTip{
  background-color: white;
}
#titleWrapper{
  width: 90%;
  margin: 0 auto;
}
#goodItems{
  display:flex;
  overflow-x: scroll;
  scrollbar-width: 0px;
}
</style>