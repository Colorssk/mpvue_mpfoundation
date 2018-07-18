<template>
  <div>
    <ul class="container ">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
      </li>
      <div class="wraper">
          <div class="head" :style="{backgroundImage: 'url('+ head +')'}"></div>
          <div class="head_info">服务内容 </div>
          <div class="head_eng">Service Content</div>
          <div class="icon"></div>
          <div class="body">
           <swiper class="swiper" circular="true" autoplay="true" interval="5000" duration="500">
                <block v-for="(item, index) in list" :index="index" :key="index">
                   <swiper-item class="item">
                      <image :src="item.src" class="slide-image" mode="aspectFill"/>
                   </swiper-item>
                </block>
            </swiper>

            
          </div>
            <div class="container_foot">
              <div v-for="(item,index) in text" :key="index" class="text_w">{{item.content}}<br/>{{item.content_a}}</div>
            </div>         
      
           <div class="middle_info">优质客户 </div> 
          <div class="middle_eng">Hight Quality Customers</div>
          <div class="middle_icon"></div>
          <div class="middle_body">
            <div v-for=" (item,index) in list_one" :key="index"  class="middle_slide_bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}"></div>
          </div>
          <div class="md_body">
            <div v-for=" (item,index) in list_two" :key="index"  class="md_slide_bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}"></div>
          </div>
            <div class="foot_box">
                 <div class="foot_info">服务流程 </div>
                 <div class="foot_eng">Service Process</div>
                 <div class="foot_icon"></div>
                 <div style="display:block">
                  <div class=queding>确立意向<div class="queidng_info">建立合作意向 明确项目需求</div></div>
                  <div class="circle one"></div>
                  <img class="connect_icon" src="http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%BF%9E%E7%BA%BF.png" mode="aspectFit"/>
                 </div>
                 <div style="display:block">
                   <div class="circle two"></div>
                   <div class="zhouqi">周期和费用<div class="zhouqi_info">确定项目设计 制作时间和费用</div></div>
                   <img class="connect_icon two" src="http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%BF%9E%E7%BA%BF.png" mode="aspectFit"/>
                 </div>
                 <div class="three">
                  <div class=qianshu>签署协议<div class="qianshu_info">签署项目合同 支付启动定金</div></div>
                    <div class="circle three"></div>
                    <img class="connect_icon three" src="http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%BF%9E%E7%BA%BF.png" mode="aspectFit"/>
                 </div>
                 <div style="display:block">
                   <div class="circle two"></div>
                   <div class="zhouqi">项目执行<div class="zhouqi_info">3-5个工作日内确定设计风格</div></div>
                   <img class="connect_icon two" src="http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%BF%9E%E7%BA%BF.png" mode="aspectFit"/>
                 </div>
                <div class="three">
                  <div class=qianshu>修改及确认<div class="qianshu_info info_two">完成项目设计部分 并最终确认</div></div>
                    <div class="circle three"></div>
                    <img class="connect_icon three" src="http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%BF%9E%E7%BA%BF.png" mode="aspectFit"/>
                 </div>
                 <div style="display:block">
                   <div class="circle two"></div>
                   <div class="zhouqi">项目验收<div class="zhouqi_info">支付尾款 并提交项目源文件</div></div>
                   <img class="connect_icon two" src="http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%BF%9E%E7%BA%BF.png" mode="aspectFit"/>
                 </div>
                 <div class="three">
                    <div class=qianshu>售后服务<div class="qianshu_info info_two">项目结束提供免费三个月售后</div></div>
                    <img class="circle three"/>
                 </div>
                    
                
            </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import api from '@/api'

export default {
  components: {
  },

  data () {
    return {
      logs: [],
      list:[],
      list_one:[],
      list_two:[],
      text:[],
      head:'',
      bg:{}
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
    api.base.getSrc().then(res=>{
          this.bg = res.data
          this.head = this.bg.head
          this.list = this.bg.list
          this.list_one = this.bg.list_one
          this.list_two = this.bg.list_two
          this.text = this.bg.text

    }).catch(e=>{console(e)})

  }

}
</script>

<style>
.three{
  display: block;
  margin-left: -1rpx;
  margin-top:-158rpx;

}
.qianshu{
  display: inline-block;
  position: relative;
  text-align: right;
  height: 23rpx;
  width:153rpx;
  margin-top: 55rpx;
  font-size: 26rpx;
  color: #ffffff91;
  left:168rpx;
  bottom: 23rpx;
}
.qianshu_info{
  display: block;
  text-align: right;
  position: relative;
  width: 246rpx;
  height: 20rpx;
  margin-left: -118rpx;
  white-space: nowrap;
  font-size: 22rpx;
  color:rgba(202, 209, 204, 0.37);
}
.info_two{
  margin-left:-140rpx;
}
.container{
  padding:0px;
  overflow-y:scroll;
  width:750rpx;
  height:100vh;

}
.container::-webkit-scrollbar{
  display:none;
}

.log-item {
  margin: 10rpx;
}
.wraper{
  width:750rpx;
  height:100vh;
}
.head{
  display: inline-block;
  height: 400rpx;
  width: 100%;
  background-size: cover;

}
.head_info{
  display:inline-block;
  width:141rpx;
  height: 34rpx;
  font-size: 20px;
  font-family: "华文彩云";
  color: rgba(40, 61, 156, 0.719);
  text-align: left;
  line-height: 34rpx;
  letter-spacing: 1px;
  margin-left: 305rpx;
  white-space: nowrap;
  margin-top: 41rpx;

}

.icon{
  display: block;
  width:50rpx;
  height: 1rpx;
  top: 405rpx;
  margin-left: 350rpx;
  margin-top: 19rpx;
  background-color:rgb(28, 43, 179);
}
.body{
  width:750rpx;
  height: 300rpx;
  margin-top:60rpx;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 0px;
  padding:0px;
  margin-bottom: -20rpx;
  }
.swiper{
  width: 750rpx;
  height: 300rpx;
}
.item{
  max-width: 52%;
  min-width: 52%;
  width: 400rpx;
  height: 300rpx;
}
.slide-image{
  background-size: cover;
  margin:0rpx 20rpx;
}
image{
  width:100%;
  height: 250rpx;
  display:inline-block;
  overflow: hidden;
}

.head_eng{
  display: block;
  width: 149rpx;
  height: 16rpx;
  line-height: 16rpx;
  margin-top:12rpx;
  margin-left: 300rpx;
  text-align:left;
  color: rgba(202, 209, 204, 0.37);
  font-size: 11px;
  white-space: nowrap;
}

.container_foot{
  display: flex;
  width: 750rpx;
  height:210rpx;
  margin-top: 60rpx;
  background: url("http://192.168.31.210/static/img/%E6%95%B0%E5%AD%97%E5%B1%95%E7%A4%BA%E8%83%8C%E6%99%AF@2x.png");
}
.text_w{
  display: block;
  min-width: 13%;
  max-width:13%;
  margin-left: 67rpx;
  margin-top: 70rpx;
  margin-bottom: 69rpx;
  font-size: 30rpx;
  color: white;
  white-space: nowrap;
}
.middle_info{
  display:inline-block;
  width:130rpx;
  height: 34rpx;
  font-size: 20px;
  font-family: "华文彩云";
  color: rgba(40, 61, 156, 0.719);
  text-align: left;
  line-height: 34rpx;
  letter-spacing: 1px;
  margin-left: 305rpx;
  margin-top: 70rpx;
  white-space: nowrap;

}
.middle_eng{
  display: block;
  width: 149rpx;
  height: 16rpx;
  line-height: 16rpx;
  margin-top:12rpx;
  margin-left: 263rpx;
  text-align:left;
  color: rgba(202, 209, 204, 0.37);
  font-size: 11px;
  white-space: nowrap;
}
.middle_icon{
  display: block;
  width:50rpx;
  height: 2rpx;
  margin-left: 350rpx;
  margin-top: 19rpx;
  background-color:rgb(28, 43, 179);
}
.middle_body{
  display: flex;
  width:750rpx;
  height: 106rpx;
  margin-top:60rpx;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 0px;
  padding:0px;
  overflow: hidden;
  white-space: nowrap;
  overflow:scroll;
  overflow-y:hidden;
}
.middle_body::-webkit-scrollbar{
  display:none;
}
.middle_slide_bg{
  display: block;
  width:173rpx;
  height: 106rpx;
  margin-top:0rpx;
  margin-bottom: 0rpx;
  margin-left:20rpx;
  min-width: 23%;
  max-width: 23%;
  background-size: cover;
}
.md_body{
  display: flex;
  width:750rpx;
  height: 106rpx;
  margin-top:6rpx;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 0px;
  padding:0px;
  overflow: hidden;
  white-space: nowrap;
  overflow:scroll;
  overflow-y:hidden;
}
.md_body::-webkit-scrollbar{
  display:none;
}
.md_slide_bg{
  display: block;
  width:173rpx;
  height: 106rpx;
  margin-top:0rpx;
  margin-bottom: 0rpx;
  margin-left:20rpx;
  min-width: 23%;
  max-width: 23%;
  background-size: cover;
}
.foot_box{
  display: block;
  margin-top:60rpx;
  width: 750rpx;
  height: 1200rpx;
  padding: 0px;
  background: url("http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%83%8C%E6%99%AF.png");
}
.foot_info{
  display:inline-block;
  width:141rpx;
  height: 34rpx;
  font-size: 20px;
  font-family: "华文彩云";
  color: #0b1b66b7;
  text-align: left;
  line-height: 34rpx;
  letter-spacing: 1px;
  margin-left: 305rpx;
  margin-top: 73rpx;
  white-space: nowrap;

}
.foot_eng{
  display: block;
  width: 149rpx;
  height: 16rpx;
  line-height: 16rpx;
  margin-top:12rpx;
  margin-left: 298rpx;
  text-align:left;
  color: rgba(202, 209, 204, 0.37);
  font-size: 11px;
  white-space: nowrap;
}
.foot_icon{
  display: block;
  width:50rpx;
  height: 3rpx;
  margin-left: 350rpx;
  margin-top: 19rpx;
  background-color:rgb(28, 43, 179);
}
.queding{
  display: inline-block;
  position: relative;
  text-align: right;
  height: 23rpx;
  width:153rpx;
  margin-top: 55rpx;
  font-size: 26rpx;
  color: #ffffff91;
  left:168rpx;
  bottom: 23rpx;

}
.queidng_info{
  display: block;
  text-align: right;
  position: relative;
  width: 246rpx;
  height: 20rpx;
  margin-left: -118rpx;
  white-space: nowrap;
  font-size: 22rpx;
  color:rgba(202, 209, 204, 0.37);

}
.circle{
  display: inline-block;
  width: 60rpx;
  height: 60rpx;
  box-sizing: border-box;
  border-radius: 50%;
  background: url("http://192.168.31.210/static/img/%E6%9C%8D%E5%8A%A1%E6%B5%81%E7%A8%8B%E8%8A%82%E7%82%B9.png");
  margin-bottom: 15rpx;
  max-width:60rpx;
  min-width: 60rpx;
  margin-left: 191rpx;
  background-size: cover;
}
.circle.one{
 
 
}
.connect_icon{
  display: block;
  width: 12rpx;
  height: 81rpx;
  margin-left: 367rpx;
  margin-top: -13rpx;
  background-size: cover;
}
.circle.two{
  margin-left: 342rpx;
  margin-bottom: 82rpx;
}
.zhouqi{
  display: inline-block;
  position: relative;
  text-align: left;
  height: 23rpx;
  width:153rpx;
  margin-top: 55rpx;
  font-size: 26rpx;
  left:30rpx;
  bottom: 87rpx;
  color: #ffffff91;
}
.zhouqi_info{
  display: block;
  text-align: left;
  position: relative;
  width: 246rpx;
  height: 20rpx;
  white-space: nowrap;
  font-size: 22rpx;
  color:rgba(202, 209, 204, 0.37);
}
.connect_icon.two{
  position: relative;
  margin-bottom:50rpx;
  bottom: 67rpx;
}



</style>
