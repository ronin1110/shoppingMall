<!--
 * @Description: 种类界面
 * @Author: yaolin
 * @Date: 2021-02-17 13:03:54
 * @LastEditors: yaolin
-->

<template>
  <div class="category">
    <div class="search">
      <Search></Search>
    </div>
    <van-tabs class="firstNav" v-model="activeKeyFirst" @change="handleChange">
      <van-tab :title="item.title" v-for="(item, index) in tabsFirst" :key=index>
        <template #title>
          <div class="tabContent">
            <img :src="item.imgUrl" width='20px' fit="contain"  />
            <p style="margin:0">{{item.title}}</p>
          </div>
        </template>
        <div class="contain">
          <div class="sidebarNav">
            <van-sidebar v-model="activeKeySecond">
              <van-sidebar-item v-for="(item, index) in tabsSecond" :key="index"  :title="item.title" />
            </van-sidebar>
          </div>
          <div class="mainContent">
            <div class="contentHeader">
              
            </div>
            <div class="goodItems">
              <GoodItem v-for="(item, index) in goodItems" :key="index" :item='item'></GoodItem>
            </div>
          </div>
          
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Search from './components/Search'
import GoodItem from './components/GoodItem'
export default {
  props: {

  },
  components: {
    Search,
    GoodItem,
  },
  data(){
    return {
      activeKeyFirst: 0,
      activeKeySecond: 0,
      tabsFirst:[],
      tabsSecond:[],
      goodItems:[],
    }
  },
  methods: {
    handleChange(index) {
      console.log(index);
      this.getTabsSecond()
    },
    getTabsFirst() {
      let data = {
        // phone: this.userLogin.phone,
        // password:this.userLogin.password
      }
      let url='/categoryFirstNav'

      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.tabsFirst = res.data.tabsFirst
        }
      })

    },
    getTabsSecond() {
      let data = {
        // phone: this.userLogin.phone,
        // password:this.userLogin.password
      }
      let url='/categorySecondNav'

      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.tabsSecond = res.data.tabsSecond
        }
      })

    },
    getGoodItems() {
      let data = {
        // phone: this.userLogin.phone,
        // password:this.userLogin.password
      }
      let url='/categoryGoodItems'

      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.goodItems = res.data.goodItems
        }
      })

    }
  },
  mounted() {
    this.getTabsFirst()
    this.getTabsSecond()
    this.getGoodItems()
  },
}
</script>

<style lang="less" scoped>
.tabContent{
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.category{
  margin-bottom: 50px;
}
.search{
  position: sticky;
  top: 0;
  background: white;
  padding: .3rem;
  z-index: 100;
  
}
.firstNav{

}
/deep/ .van-tabs__wrap {
  position: sticky;
  top: 47.6px;
  z-index: 2;
}
.contain{
  display: flex;
  width: 100vw;
}
.van-sidebar-item--select::before{
  width: .2rem !important;
  height: 60%;
}
.goodItems{
  width: calc(100vw - 80px);
}
</style>
