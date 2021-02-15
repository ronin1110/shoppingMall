<!--
 * @Description: titleWrapper
 * @Author: yaolin
 * @Date: 2021-02-15 10:18:31
 * @LastEditors: yaolin
-->
<template>
  <div class="contain">
    <div class="leftPart">
      <div class="text">限时抢购</div>
      <div class="time">
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <!-- <span class="colon">' '</span> -->
            <span class="block">{{ timeData.minutes }}</span>
            <!-- <span class="colon">:</span> -->
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
    </div>
    <div class="rightPart">更多</div>
  </div>
</template>

<script>
export default {
  name:'TitleWrapper',
  props: {

  },
  components: {

  }, 
  data(){
    return {
      time: 30 * 60 * 60 * 1000,
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.contain{
  display: flex;
  // margin: 2rem;
  margin-top: 2rem;
  height: 2rem;
  background-color: white;
  justify-content: space-between;
}
.leftPart{
  display: flex;
  align-items: center;
  line-height: 2rem;
  font-size: 1.5rem;
  border-left: 4px solid #3cb963;
  padding-left: .5rem;
  .time{
    margin-left: 1rem;
  }
  .block{
    color: white;
    display: inline-block;
    margin: .1rem;
    width: 1.2rem;
    text-align: center;
    background-color: black;
  }
}
.rightPart{
  line-height: 2rem;
  color: #3cb963;
}
</style>