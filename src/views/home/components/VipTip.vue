<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-14 20:32:41
 * @LastEditors: yaolin
-->
<template>
  <div class="vipTip">
    <div class="leftPart">
      <van-icon color='#ff0000' size='1.5rem' name="vip-card-o"/>
      <div class="text">加入会员·每年预计节省806元</div>
    </div>
    <div class="rightPart">5折开卡></div>
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
.vipTip{
  margin: auto;
  padding: 0;
  width: 90%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: #3bba63;
  font-size: .5rem;
  color: white;
  .leftPart{
    margin: .5rem;
    display: flex;
    align-items: center;
    .text{
      margin: .5rem;
    }
  }
  .rightPart{
    margin: .5rem;
  }
}
</style>