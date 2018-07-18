<template>
  <div :style="{display: display}">
    <!-- custom components -->
    <!-- <intro v-if="data.title == 'introduction'"></intro> -->
    <div class="wraper">
      <div v-if="index===0" class="container">
        
        <div v-for=" (item,index) in swipter_slide" :key="index"  class="bg" :style="{backgroundImage:'url(' + item.src + ')',opacity:'0.8',  backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"><div class="info"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</div></div>
        
      </div>
      
      <div v-if="index===1" class="container">
         <div v-for=" (item,index) in swipter_slide" :key="index"  class="bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"><div class="info"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</div></div> 
      </div>    
      
      <div v-if="index===2" class="container">
         <div v-for=" (item,index) in swipter_slide" :key="index"  class="bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"><div class="info"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</div></div>
      </div>    
      
      <div v-if="index===3" class="container">
         <div v-for=" (item,index) in swipter_slide" :key="index"  class="bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"><div class="info"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</div></div> 
      </div> 
      
      <div v-if="index===4" class="container">
         <div v-for=" (item,index) in swipter_slide" :key="index"  class="bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"><div class="info"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</div></div>  
      </div>  
      
      <div v-if="index===5" class="container">
         <div v-for=" (item,index) in swipter_slide" :key="index"  class="bg" :style="{backgroundImage:'url(' + item.src + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"><div class="info"><span class="info_title">{{swipter_text[index].info_a}}</span>{{swipter_text[index].info_b}}</div></div>  
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
      swipter_slide:[],
      swipter_text: [] 
       }
  },
  created(){
    api.base.getSrc().then(res=>{
      this.swipter_slide = res.data.swipter_slide
      this.swipter_text = res.data.swipter_text
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
.bg{
  display: block;
  height: 345rpx;
  min-width: 46%;
  max-width: 46%;
  margin-left: 20rpx;
  margin-top: 20rpx;
  background-size: cover;
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
}
.info_title{
  display: block;
  font-size: 35rpx;
  font-family:serif;
  }

</style>
