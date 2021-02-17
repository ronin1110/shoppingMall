<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-09 10:03:15
 * @LastEditors: yaolin
-->
<template>
  <div class="searchComponent">
    <van-icon name="search" size='1.5rem' />
    <div>输入商品名称</div>
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
.searchComponent{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // width: 100%;
  margin: 5px;
  padding: 2px;
  border-radius: 3.125rem;
  background-color: #eee;
  color: #777;
}

</style>