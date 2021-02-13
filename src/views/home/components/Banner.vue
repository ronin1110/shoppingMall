<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-13 20:46:13
 * @LastEditors: yaolin
-->
<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiperSlide v-for="(img,index) in imgs" :key="index">
        <img width="100%" height="200px"  :src="img">
      </swiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgs:[
        require('../../../assets/loginPics/pic2.jpg'),
        require('../../../assets/loginPics/pic3.jpg'),
        require('../../../assets/loginPics/pic4.jpg'),
        require('../../../assets/loginPics/pic5.jpg'),
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // autoplay:true,
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style scoped >
.recommendPage .swiper-container{
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}  
.recommendPage .swiper-container .swiper-slide{
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>