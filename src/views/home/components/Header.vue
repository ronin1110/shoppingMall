<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-09 10:03:15
 * @LastEditors: yaolin
-->
<template>
  <div id="header">
    <div class="leftPart" @click="choiceAdress">
      <van-icon name="location" size='1.5rem' />
      <div class="address" v-if="address">{{this.address}}</div>
      <div class="address" v-else>请选择地址……</div>
    </div>
    <div class="rightPart">
      <van-icon name="search" size='1.5rem' />
      <div>输入商品名称</div>
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
      
    }
  },
  computed: {
    address() {
      return this.$store.state.position.name
    }
  },
  methods: {
    choiceAdress(el) {
      // console.log(el.target);
      this.$router.replace('map')
    }
  }
}
</script>

<style lang="less" scoped>
#header{
  display: flex;
  .leftPart{
    position: relative;
    display: flex;
    align-items: center;
    width: 10rem;
    min-width: 35%;
    height: 2rem;
    background-color: #000;
    opacity: .6;
    border-radius:  3.125rem;
    color: whitesmoke;
    padding: 2px;
    margin: 5px;


    .address{
      margin: 10px;
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .rightPart{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 5px;
    padding: 2px;
    border-radius: 3.125rem;
    background-color: #fff;
    color: #777;
  }
}

</style>