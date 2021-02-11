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
      
    <div id="mapMain">

    </div>
    <p class="tips">你当前所在的位置</p>
    <van-cell v-if="position == 0" title="请选择地点"/>
    <van-cell size='large' style="margin-bottom:1rem" :title="position.name" :label='position.address'></van-cell>
    <p class="tips">周边地点</p>
    <van-cell v-if="dataList == 0" title="无地点"/>
    <van-cell  size='large' v-for="(item, index) in dataList " @click="choiceAdress(item)" :key="index" :title="item.name"  :label='item.address'></van-cell>


  </div>
</template>

<script>
import { Toast } from 'vant'
// import Vue from 'vue'
// Vue.forceUpdate()

export default {
  props: {

  },
  components: {

  },
  data(){
    // var this = this
    // this.city = this.city || '杭州';
    return {
      // city: '杭州',
      marker: {},
      map: {},
      position:'',
      user: {
        position: [114.397169, 30.50576],
        content: ""
      },
      
      dataList: [],
      center: [114.397169, 30.50576],

      searchOption: {
        city: this.city,
        citylimit: true
      },
    }
  },
  methods: {
    choiceAdress(item) {

      this.position = item
      console.log(item);
      this.map.remove(this.marker)
      this.marker = new AMap.Marker({
        position: [item.location.lng, item.location.lat],
        offset: new AMap.Pixel(-13, -30)
      })
      this.map.add(this.marker);
    },
    back() {
      this.$router.back()
    },
    initMap() {
      // let marker={}
      let that = this
      this.map = new AMap.Map("mapMain", {
        zoom: 15, //级别
        // center: [113.324, 23.1005], //中心点坐标
        // viewMode: "3D", //使用3D视图
      })

      AMap.plugin(['AMap.ToolBar', 'AMap.PlaceSearch','AMap.Geolocation' ], function() { // 添加缩放条
        var toolbar = new AMap.ToolBar();
        that.map.addControl(toolbar);
        
        var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),
            // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            // 定位按钮的排放位置, RB表示右下
            buttonPosition: 'LB'
        })
        that.map.addControl(geolocation)
        // geolocation.getCurrentPosition();
        // AMap.event.addListener(geolocation, 'complete', (e) => {
        //     // console.log(e) // 定位成功之后做的事
        //     // 定位成功之后再定位处添加一个marker
        //     // console.log(e);
        //     that.center = [e.position.lng, e.position.lat]
        //     let marker = new AMap.Marker({
        //         position: [e.position.lng, e.position.lat], // （e.position）--->定位点的点坐标, position ---> marker的定位点坐标，也就是marker最终显示在那个点上，
        //     })
        //     that.map.add(marker);
        //     that.getData()
        // })


      })
      that.map.on('complete', function() {
        console.log('完成');
      })
      that.map.on('click', function(e) {
        that.map.remove(that.marker)
        that.center = [e.lnglat.getLng(), e.lnglat.getLat()];
        that.marker = new AMap.Marker({
          position: that.center,
          offset: new AMap.Pixel(-13, -30)
        })
        that.map.add(that.marker)
        that.getData()
      })
      that.map.on('dragstart', function() {
        // map.remove(marker)
        // console.log(this.center);
      })
      that.map.on('dragend', function() {
        // this.center=[map.getCenter().lng, map.getCenter().lat]

      })



    },
    getData() {
      let that = this
      let placeSearch = new AMap.PlaceSearch({ 
          // type: '餐饮服务', // 兴趣点类别
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          // city: "010", // 兴趣点城市
          // citylimit: true,  //是否强制限制在设置的城市内搜索
          // map: map, // 展现结果的地图实例
          // panel: "panel", // 结果列表将在此容器中进行展示。 
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      });

      placeSearch.searchNearBy('', that.center, 200, function(status, result) {
        // console.log(this.center);
        // console.log(result);
        if(status === 'no_data') {
          Toast.fail('无数据')
          that.dataList = {}
        } else if(status === 'error'){
          Toast.fail(result)
        } else {
          that.dataList = result.poiList.pois
          that.position = that.dataList[0]
        }
        // that.dataList = result
        console.log(that.dataList);
      });
    },
    dragend() {
      // console.log(map.getCenter());
      // this.center=[map.getCenter().lat, map.getCenter().lng]
      // // console.log(this.center);
      // marker.position = this.center
      // console.log(marker.position);
      // // map.remove(marker)
      // map.add(marker)
    }
    
  },
  created(){

  },
  mounted(){
    this.initMap()
    // this.getData()
  },
  activated() {
    this.initMap()
  },
}
</script>

<style lang="less" scoped>
#map{
  width: 100vw;
  height: 100vh;
  color: #999;
  background-color: #f5f5f5;
}
#mapMain{
  height: 400px;
  margin: 1rem 0;
}
.tips{
  padding: 0 1rem;
  font-size: .6rem;
}
</style>
