<!--
 * @Description: tips
 * @Author: yaolin
 * @Date: 2021-02-14 12:24:02
 * @LastEditors: yaolin
-->

<template>
  <div class="contain">
    <div class="tips">
      <div class="item">
        <van-icon size='1rem' name="shop-collect" />
        <div>最快30分钟之内送达</div>
      </div>
      <div class="item">
        <van-icon size='1rem' name="shop-collect" />
        <div>0元起送 0配送费</div>
      </div>
      <div class="item">
        <van-icon size='1rem' name="shop-collect" />
        <div>安心退</div>
      </div>
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
  methods: {

  }
}
</script>

<style lang="less" scoped>
.tips{
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  font-size: .8rem;
  color: #45c763;
  align-items: center;
}
.item{
  display: flex;
  align-items: center;
}
</style>
