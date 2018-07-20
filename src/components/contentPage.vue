<template>
  <div :style="{display: display}">
    <!-- custom components -->
    <!-- <intro v-if="data.title == 'introduction'"></intro> -->
    <div class="wraper">
      <div v-if="index===0" class="container">
        
       <div v-for=" (item,index) in swipter_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + item.src + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</span>
            </div>
          </div>
        </div>
       </div>
       
      </div>
      
      <div v-if="index===1" class="container">
           
       <div v-for=" (item,index) in edu_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + item.src + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{edu_text[index].info_a}}</span>{{edu_text[index].info_b}}</span>
            </div>
          </div>
        </div>
       </div>
      </div>    
      
      <div v-if="index===2" class="container">
         
         <div v-for=" (item,index) in cp_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + item.src + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{cp_text[index].info_a}}</span>{{cp_text[index].info_b}}</span>
            </div>
          </div>
        </div>
       </div>
       
       </div>    
      
      <div v-if="index===3" class="container">
       
       <div v-for=" (item,index) in med_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + item.src + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{med_text[index].info_a}}</span>{{med_text[index].info_b}}</span>
            </div>
          </div>
        </div>
       </div>
       
        </div> 
      
      <div v-if="index===4" class="container">
        
         <div v-for=" (item,index) in ser_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + item.src + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{ser_text[index].info_a}}</span>{{ser_text[index].info_b}}</span>
            </div>
          </div>
        </div>
       </div>
       
       </div>  
      
      <div v-if="index===5" class="container">
         
          <div v-for=" (item,index) in shop_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + item.src + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{shop_text[index].info_a}}</span>{{shop_text[index].info_b}}</span>
            </div>
          </div>
        </div>
       </div>
       
       </div>    
   
   </div>    

  </div>
</template>

<script>
/**
 * custom components
 */
// import intro from '@/components/school/intro'
import api from '@/api'

export default {
  name: 'contentPage',
  props: {
    data: {
      type: Object,
      default: {}
    },
    index: {
      type: Number
    },
    scrolltolower: {
      type: Number
    }
  },
  components: {
  },
  data () {
    return {
      display: 'block',
      swipter_slide: [],
      swipter_text: [],
      edu_slide: [], 
      edu_text: [],
      ser_slide: [], 
      ser_text: [],
      cp_slide: [], 
      cp_text: [],
      med_slide: [], 
      med_text: [],
      shop_slide: [], 
      shop_text: []
      
       }
  },
  created(){
    api.base.getSrc().then(res=>{
      
      this.swipter_slide = res.data.swipter_slide
      this.swipter_text = res.data.swipter_text
      
      this.edu_slide = res.data.edu_slide
      this.edu_text = res.data.edu_text
      
      this.ser_slide = res.data.ser_slide
      this.ser_text = res.data.ser_text
      
      this.cp_slide = res.data.cp_slide
      this.cp_text = res.data.cp_text

      this.med_slide = res.data.med_slide
      this.med_text = res.data.med_text

      this.shop_slide = res.data.shop_slide
      this.shop_text = res.data.shop_text
    })
  },
  computed: {
    jsonData () {
      return JSON.stringify(this.data)
    }
  },
  methods: {
    loading () {
      this.$loading()
      this.display = 'none'
    },
    endLoading () {
      this.$endLoading()
      this.display = 'block'
    }
  },
  mounted () {
    if (!this.data.data) {
      this.loading()
      setTimeout(() => {
        this.data.data = this.data.title
        this.endLoading()
      }, 1000)
    } else {
      this.loading()
      setTimeout(() => {
        this.display = 'block'
        this.endLoading()
      }, 350)
    }
  }
}
</script>

<style>
.wraper{
  width:750rpx;
  
}
.container{
    display:flex;
    padding:0;
    flex-wrap: wrap;
    font-size: 0;
    
}
.bg_container{
  display: block;
  height: 345rpx;
  min-width: 46%;
  max-width: 46%;
  margin-left: 20rpx;
  margin-top: 20rpx;
  border-radius: 15px;
  color: rgba(47,48,99,0.5);
  box-shadow: inset 2px 8px 120 #2D313B;
  z-index: 100;

}
.bg{
  display: block;
  height: 345rpx;
  min-width: 100%;
  max-width: 100%;
  margin: 0px;
  background-size: cover;
  border-radius: 15px;
  z-index: 999;

  position: relative;
}

.bg_cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background:rgba(47,48,99,0.5);
   border-radius: 15px;
}

.info{
  font-family:serif;
  display: inline-block;
  color: rgb(255, 255, 255);
  width:299rpx;
  height: 141rpx;
  font-size: 22rpx;
  margin:189rpx 20rpx 20rpx;
  white-space: space wrap;
  overflow: hidden;
  font-family: PingFangSC-Medium 30px;
  z-index: 1001;
}
.info_title{
  display: block;
  font-size: 35rpx;
  font-family: PingFangSC-Medium
  
  }
  .info_container{
    display: block;
    font-size: 22rpx !important;
    font-family: PingFangSC-Medium;
    bottom: 10rpx;
    position:absolute;
  }

</style>
