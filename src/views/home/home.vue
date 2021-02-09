<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-09 09:46:47
 * @LastEditors: yaolin
-->
<template>
  <div id="home">
    <div>
      <Header></Header>
    </div>

    <!-- <div id="test"></div> -->
    <!-- <div class="Map">
      <Map></Map>
    </div> -->


  </div>
</template>

<script>
import Header from './components/Header.vue'
import Map from './components/Map.vue'
export default {
  props: {

  },
  components: {
    Header,
    Map
  },
  data(){
    return {
        
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
  background-image: url('../../assets/loginPics/pic1.jpg');
  background-position: 100% 100%;
}
#test{
  width: 100vw;
  height: 90vh;
}
</style>