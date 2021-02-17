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
      <GoodItem v-for="(item, index) in lists_0" :key="index" :item='item'></GoodItem>
    </div>
    
    <div class="itemContain">
      <van-tabs  v-model="active" color='#3bba63' background='#eee' title-active-color='#3bba63' swipeable animated sticky>
        <van-tab>
          <template #title>
            <div>猜你喜欢</div>
          </template>
          <div class="item">
            <GoodItem v-for="(item, index) in lists_0" :key="index" :item='item'></GoodItem>
          </div>
        </van-tab>
        <van-tab>
          <template #title>
            <div>特价促销</div>
          </template>
          <div class="item">
            <GoodItem v-for="(item, index) in lists_1" :key="index" :item='item'></GoodItem>
          </div>
          <!-- <GoodItem></GoodItem> -->

        </van-tab>
        <van-tab>
          <template #title>
            <div>丰盛午餐</div>
          </template>
          <div class="item">
            <GoodItem v-for="(item, index) in lists_2" :key="index" :item='item'></GoodItem>
          </div>
          
          <!-- <GoodItem></GoodItem> -->

        </van-tab>
        <van-tab>
          <template #title>
            <div>火锅到家</div>
          </template>
          <div class="item">
            <GoodItem v-for="(item, index) in lists_3" :key="index" :item='item'></GoodItem>
          </div>
          <!-- <GoodItem></GoodItem> -->

        </van-tab>
        <van-tab>
          <template #title>
            <div>时令新品</div>
          </template>
          <div class="item">
            <GoodItem v-for="(item, index) in lists_4" :key="index" :item='item'></GoodItem>
          </div>
          <!-- <GoodItem></GoodItem> -->

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
      active: 0,
      lists_0:[],
      lists_1:[],
      lists_2:[],
      lists_3:[],
      lists_4:[]
    }
  },
  methods: {
    getData() {
      
      let data = {
        // phone: this.userLogin.phone,
        // password:this.userLogin.password
      }
      let url='/goodsData'

      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.lists_0 = res.data.lists
        }
      })
      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.lists_1 = res.data.lists
        }
      })
      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.lists_2 = res.data.lists
        }
      })
      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.lists_3 = res.data.lists
        }
      })
      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.lists_4 = res.data.lists
        }
      })


    }
  },
  mounted() {
    this.getData()
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
  padding: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar{
    background-color:transparent;
  }
}
.item{
  display: flex;
  flex-wrap: wrap;
}
</style>