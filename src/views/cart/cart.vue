<!--
 * @Description: 购物车页面
 * @Author: yaolin
 * @Date: 2021-02-20 12:49:53
 * @LastEditors: yaolin
-->
<template>
  <div class="cartComponents" v-if="reFresh">
    <div class="header">
      <van-nav-bar
        fixed
        title="购物车"
        right-text="删除"
        @click-right="deleteGood"/>
    </div>
    
    <div class="contain" >
      <CartItem :index='index' v-for="(item, index) in goodList" :key="index" :item='item'></CartItem>
    </div>
    <div v-if="goodList == 0">
      <van-empty description="购物车为空" />
    </div>

    <div class="line">
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        猜你喜欢
      </van-divider>
    </div>
    <div class="Guess">
      <GoodItem :item='item' v-for="(item, index) in otherGood" :key="index"></GoodItem>
    </div>
    
    <div class="submitBar">
      <van-submit-bar :price="sum * 100" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checkAll">全选</van-checkbox>
        <!-- <div style="margin-left:1rem">已选{{cartItemNum}}件</div> -->
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import CartItem from './components/CartItem'
import GoodItem from './components/GoodItem'
export default {
  props: {

  },
  components: {
    CartItem,
    GoodItem
  },
  data(){
    return {
      checkAll:false,
      otherGood:[],
      reFresh: true
    }
  },
  computed: {
    // checkAll() {
    //   return this.$store.state.checkAll
    // },
    choiceTitles() {
      return this.$store.state.choiceTitles
    },
    goodList() {
      return this.$store.state.cart
    },
    cartItemNum(){
      return this.$store.getters.cartItemNum
    },
    sum() {
      console.log(this.$store.state.sum); 
      return this.$store.state.sum
    }
  },
  watch: {
    checkAll() {
      this.$store.commit('changeCheckAll')
    }
  },
  methods: {
    deleteGood() {
      this.choiceTitles.forEach(title => {
        this.$store.commit('deleteGood', title)
        this.reFresh= false // 骚东西，通过v-if来实现重绘
        this.$nextTick(()=>{
          this.reFresh = true
        })
      });

      this.$store.commit('clearTitle')
      this.$store.commit('clearSum')
      this.checkAll = !this.checkAll
      // this.$store.commit('changeCheckAll')

    },
    onSubmit() {
      this.$toast.success('没得提交')
    },
    getOtherGoods() {
      let data = {
        // phone: this.userLogin.phone,
        // password:this.userLogin.password
      }
      let url='/goodsData'
      this.$post(url, data).then(res => {
        if(res.code = 200) {
          this.otherGood = res.data.lists
        }
      })
    }
  },
  mounted() {
    this.getOtherGoods()
  },
}
</script>

<style lang="less" scoped>
.cartComponents{
  background-color: #f3f3f3;
}
.contain{
  margin-top: 50px;
}
.Guess{
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  margin-bottom: 100px;
}
.submitBar{
  position: fixed;
}
/deep/.van-submit-bar {
bottom: 50px;
}
</style>