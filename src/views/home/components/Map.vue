<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-09 13:50:27
 * @LastEditors: yaolin
-->
<template>
  <div id="map">
    <van-nav-bar
      title="请选择地址"
      left-text="返回"
      left-arrow
      fixed
      @click-left="back"/>
      
      <div class="mapMain">
        <el-amap ref="map"
          vid="amapDemo"
          :plugin="plugin"
          :zoom="zoom"
          :center="center"
          class="amap-map"
          :events="events"
          v-show="showMap">
          <el-amap-marker vid="component-marker"
            :position="user.position"
            :content="user.content" />
        </el-amap>
      </div>
      <p >你当前所在的位置</p>
      <van-cell size='large' style="margin-bottom:1rem">shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>
      <van-cell size='large' >shabishkjdhaskhj </van-cell>

  </div>
</template>

<script>
import VueAMap from 'vue-amap'
import Vue from 'vue'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: '362de121d41b4efb0323b9328f6d3f9e',
  // 插件集合所有的
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch',
    'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType',
    'AMap.PolyEditor', 'AMap.CircleEditor',
    'AMap.Geolocation'],
  uiVersion: '1.0',
  v: '1.4.4'
});
export default {
  props: {

  },
  components: {

  },
  data(){
    // var this = this
    // this.city = this.city || '杭州';
    return {
      city: '杭州',
      user: {
        position: [114.397169, 30.50576],
        content: ""
      },
      
      showMap: true,
      list: [],
      currentLocation: [],
      currIndex: 0,
      zoom: 16,
      center: [114.397169, 30.50576],
      events: {
        init: (o) => {
          o.setCity(this.city, result => {
            this.center = result;
            // console.log(result);
            if (result && result.length > 0) {
              // this.zoom = 16;
              this.user.position = result;
              this.getList(result);
            }
          });
          // Map UI优化
          // this.$nextTick(() => {
          //   //去掉logo
          //   document.getElementsByClassName("amap-logo")[0].style.display = "none";
          //   // 去掉版权信息
          //   document.getElementsByClassName('amap-copyright')[0].style.opacity = "0";
          //   // 修改搜索结果框的宽度
          //   // document.getElementsByClassName('search-tips')[0].style.width = '60%';
          //   // 隐藏比例尺
          //   document.getElementsByClassName('amap-scalecontrol')[0].style.visibility = "hidden";
          //   // 修改定位当前位置
          //   document.getElementsByClassName('amap-geolocation-con')[0].style.left = "85%";
          // })
        },
        // 拖拽 
        "dragend": function (e) {
          console.log('kkkk');
          var point = this.getCenter();
          var pos = [point.lng, point.lat];
          this.user.position = [point.lng, point.lat];
          this.getList(pos);
        },
      },

      searchOption: {
        city: this.city,
        citylimit: true
      },
      plugin: [
        // 'Scale',
        // {
          // pName: 'Geolocation',
          // events: {
            // init (o) {
            //   // 获取当前位置
            //   o.getCurrentPosition((status, result) => {
            //     if (result && result.position) {
            //       self.lng = result.position.lng;
            //       self.lat = result.position.lat;
            //       self.center = [self.lng, self.lat];
            //       self.loaded = true;
            //       this.$nextTick();
            //     }
            //   });
            // },
            // complete: function (result) {
            //   //定位成功
            //   var address = result.formattedAddress
            //   var point = result.position;
            //   var obj = {
            //     address: address,
            //     name: "",
            //     location: point
            //   }
            //   this.user.position = [point.lng, point.lat];
            //   this.getList([point.lng, point.lat]);
            // },
            // error: function () {

            // }
          // }
        // }
      ]
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    getList: function (result) {
      //获取列表
      // var this = this;
      this.$Geocoder({
        lnglatXY: result,
        success: function (res) {
          if (res.regeocode && res.regeocode.pois) {
            this.list = res.regeocode.pois;
          } else {
            this.list = [];
          }
        },
        error: function (res) {
          this.list = [];
        }
      });
    },
  },
  mounted(){
    
  }
}
</script>

<style lang="less" scoped>
#map{
  width: 100vw;
  height: 100vh;
  background-color: #999;
}
.mapMain{
  width: 100vw;
  height: 400px;
  margin: 1rem 0 ;
}
</style>
