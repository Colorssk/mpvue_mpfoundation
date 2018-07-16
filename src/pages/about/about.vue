<template>
  <div class="all">
    <div class="container log-list">   
       <map id="map" :longitude="longitude" :latitude="latitude" scale="12" controls="controls"  markers="markers"   @controltap="controltap" @markertap="markertap" @regionchange="regionchange" show-location style="width: 750rpx; height: 360rpx;"></map> 
      
      <div class="map_info">
        <div @click="tap" class="title">关于墨客云</div>
        <div class="icon"></div>
        <div class="about">墨客云科技（MokYun）是南京薄幕软件科技旗下的一家提供应用开发，运营，推广的一站式服务提供商，平台致力于为企业的微创
          新从创意萌发，产品实现，成长发展提供全面的服务和支持</div>
        <div class="tel_title">联系方式</div>
        <div class="tel_icon"></div>
        <div class="box">
          <div class="s_box">联系电话： 180-129-01065</div>
          <div class="s_box">固定电话： 025-5760-3388</div>
          <div class="s_box">联系地址： 南京市U谷未来网络小镇（3号线秣周东路地铁站下）</div>
          <div class="s_box">534783032</div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {
  components: {
  },

  data () {
    return {
      logs: [],
      markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 31.5528,
      longitude: 118.531,
      width: 50,
      height: 50
    }],
    latitude: 31.9590,
    longitude: 118.8400,
    polyline: [{
      points: [{
        longitude: 118.531,
        latitude: 31.5528
      }, {
        longitude: 118.531,
        latitude: 31.5528
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/others.png',
      position: {
        left: 0,
        top: 300 -50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
     this.mapCtx = wx.createMapContext('map')
         this.mapCtx.getCenterLocation({
          success: function(res){
          this.longitude = res.longitude
          this.latitude = res.latitude
      }
    })
  },
  // async onLoad(){
  //    wx.getLocation({
  //     type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  //     success: function (res) {

  //       _this.setData({
  //         latitude: 31.5210,
  //         longitude: 118.4914,
  //         markers: [{
  //           id: "1",
  //           latitude: 31.5210,
  //           longitude: 118.4914,
  //           width: 50,
  //           height: 50,
  //           iconPath: "/assests/imgs/my.png",
  //           title: "哪里"

  //         }],
  //         circles: [{
  //            latitude: 31.5210,
  //           longitude: 118.4914,
  //           color: '#FF0000DD',
  //           fillColor: '#7cb5ec88',
  //           radius: 3000,
  //           strokeWidth: 1
  //         }]

  //       })
  //     }

  //   })
  
//}
  methods:{
    
      regionchange(e){
          console,log(e.type)
      },
      markertap(e){
          console.log(e.markerId)
      },
      controltap(e){
          console.log(e.controlId)
     }

  // moveToLocation: function () {
  //   this.mapCtx.moveToLocation()
  // },
  // translateMarker: function() {
  //   this.mapCtx.translateMarker({
  //     markerId: 0,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  // includePoints: function() {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude:23.10229,
  //       longitude:113.3345211,
  //     }, {
  //       latitude:23.00229,
  //       longitude:113.3345211,
  //     }]
  //   })
  // }

   }
}
</script>

<style>
.all{
  width: 750rpx;
  height:100vh;
}
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}
.container{
   width:750rpx;
   height:100vh;
   padding: 0px;
}

.log-item {
  margin: 10rpx;
}
.map{
  display:inline-block;
  width: 750rpx;
  height: 360rpx;
  z-index:99;
}
.map_info{ 
  position: absolute;
  top:316rpx;
  z-index:100;
  background-color:rgb(255,255,255);
  width: 710rpx;
  height: 733rpx;
  margin-left:20rpx; 
  bottom: 50rpx;
  box-shadow:#000000 4px 10px (120%)6%;
}
.title{
  display: block;
  position: relative;
  left: 35rpx;
  right: 527rpx;
  width: 148rpx;
  font-family:"pingFangSC-Regular";
  font-size: 29rpx;
  height: 29rpx;
  top: 124rpx;
  padding: 0rpx;
  color: rgb(52,52,52);
  text-align: left;
 

}
.icon{
  display: block;
  position: relative;
  width:80rpx;
  height: 1rpx;
  top: 172rpx;
  left: 35rpx;
  background-color: rgb(102,102,102);
  

}
.about{
  display: block;
  width: 594rpx;
  margin-left: 58rpx;
  position: relative;
  top: 193rpx;
  bottom: 460rpx;
  height: 80rpx;
  font-size: 25rpx;
  color: rgb(102,102,102);
  font-family:"pingFangSC-Regular";
  text-align: left;
}
.tel_title{
  display: block;
  position: relative;
  left: 37rpx;
  right: 555rpx;
  width: 118rpx;
  font-family:"pingFangSC-Regular";
  font-size: 29rpx;
  height: 29rpx;
  top: 356rpx;
  padding: 0rpx;
  color: rgb(52,52,52);
  text-align: left;
}
.tel_icon{
  display: block;
  position: relative;
  width:80rpx;
  height: 2rpx;
  top: 405rpx;
  left: 36rpx;
  background-color:rgb(102,102,102);
}
.box{
  display: block;
  position: absolute;
  left:5%;
  top:600rpx;

  
}
.s_box{
  display: block;
  margin: 0px;
  padding:0px;
  font-size: 25rpx;
  text-align: left;
  font-family:"pingFangSC-Regular";
  color: rgb(52,52,52);
  padding: 0rpx;

}
</style>
