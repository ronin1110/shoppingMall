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
    <div class="shuffling">
      <Banner></Banner>
    </div>
    <!-- <div>
      <BannerTest></BannerTest>  
    </div> -->



  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
export default {
  props: {

  },
  components: {
    Header,
    Banner,

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
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('../../assets/loginPics/pic1.jpg');
  background-position: 100% 100%;
}
#test{

}
</style>