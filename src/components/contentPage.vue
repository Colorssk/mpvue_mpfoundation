<template>
  <div :style="{display: display}">
    <!-- custom components -->
    <!-- <intro v-if="data.title == 'introduction'"></intro> -->
    <div class="wraper">
      <div v-if="index===0" class="container">
        
       <div v-for=" (item,index) in swipter_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + apiUrl+item.img_url + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{swipter_text[index]}}</span>{{swipter_text_info[index]}}</span>
            </div>
          </div>
        </div>
       </div>
       
      </div>
      
      <div v-if="index===1" class="container">
           
       <div v-for=" (item,index) in edu_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + apiUrl+item.img_url + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{edu_text[index]}}</span>{{edu_text_info[index]}}</span>
            </div>
          </div>
        </div>
       </div>
      </div>    
      
      <div v-if="index===2" class="container">
         
         <div v-for=" (item,index) in cp_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + apiUrl+item.img_url + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{cp_text[index]}}</span>{{cp_text_info[index]}}</span>
            </div>
          </div>
        </div>
       </div>
       
       </div>    
      
      <div v-if="index===3" class="container">
       
       <div v-for=" (item,index) in med_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + apiUrl+item.img_url + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{med_text[index]}}</span>{{med_text_info[index]}}</span>
            </div>
          </div>
        </div>
       </div>
       
        </div> 
      
      <div v-if="index===4" class="container">
        
         <div v-for=" (item,index) in ser_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + apiUrl+item.img_url + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{ser_text[index]}}</span>{{ser_text_info[index]}}</span>
            </div>
          </div>
        </div>
       </div>
       
       </div>  
      
      <div v-if="index===5" class="container">
         
          <div v-for=" (item,index) in shop_slide" :key="index" class="bg_container"> 
         <div  class="bg" :style="{backgroundImage:'url(' + apiUrl+item.img_url + ')',  backgroundRepeat:'no-repeat', backgroundPosition:'center center'}">
          <div class="bg_cover">
            <div class="info">
                <!-- <span class="info_title">{{swipter_text[index].info_a}}</span> -->
                <span class="info_container"><span class="info_title">{{shop_text[index]}}</span>{{shop_text_info[index]}}</span>
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
import config from '@/config'

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
      apiUrl: '',

      swipter_slide: [],
      swipter_text: [],
      swipter_text_info: [],
      
      edu_slide: [], 
      edu_text: [],
      edu_text_info: [],
      
      ser_slide: [], 
      ser_text: [],
      ser_text_info: [],
      
      cp_slide: [], 
      cp_text: [],
      cp_text_info: [],

      med_slide: [], 
      med_text: [],
      med_text_info: [],

      shop_slide: [], 
      shop_text: [],
      shop_text_info: []
      
       }
  },
  onLoad(){
    this.apiUrl = 'https://cdn1-open.mokyun.com/'
    
    api.base.getSlide().then(res=>{
      res.items.forEach(v => {
         if(v.cate == '2'){
          
         this.swipter_slide.push(v)
         
         if(v.sort =='1'){
            this.edu_slide.push(v)
          }
          if(v.sort =='2'){
            this.cp_slide.push(v)
          }
          if(v.sort =='3'){
            this.med_slide.push(v)
          }
          if(v.sort =='4'){
            this.ser_slide.push(v)
          }
          if(v.sort =='5'){
            this.shop_slide.push(v)
          }
        }
      });
     
    }).catch(e=>{console(e)})

    //PAGE 2
  api.base.getSlide_two().then(res=>{
      res.items.forEach(v => {
         if(v.cate == '2'){
          
         this.swipter_slide.push(v)
         
         if(v.sort =='1'){
            this.edu_slide.push(v)
          }
          if(v.sort =='2'){
            this.cp_slide.push(v)
          }
          if(v.sort =='3'){
            this.med_slide.push(v)
          }
          if(v.sort =='4'){
            this.ser_slide.push(v)
          }
          if(v.sort =='5'){
            this.shop_slide.push(v)
          }
        }
      });
     
    }).catch(e=>{console(e)})


    //那文字的page1
    api.base.getInfo().then(res=>{
      let tempData = {}
      let temp = ''
      //console.log(res)
      for(let i in res.items){
        tempData = res.items[i]

         
         // console.log(b)

        //console.log(tempData)
        //这是全部的数据
        if(tempData.author == '1'){
           
           temp = tempData.content.replace(/<.*?>/ig,"")
          //console.log(tempData.content)
          this.swipter_text.push(temp)
          
        }
        if(tempData.author == '2'){
          //console.log(tempData.content)
          temp = tempData.content.replace(/<.*?>/ig,"")
          this.swipter_text_info.push(temp)
        }


        //这里是拉取edu页面的数据
        if(tempData.title == 'edu'){
            
            if(tempData.author =='1'){
                temp = tempData.content.replace(/<.*?>/ig,"")
                this.edu_text.push(temp)
            }
            
            if(tempData.author =='2'){
                temp = tempData.content.replace(/<.*?>/ig,"")
                this.edu_text_info.push(temp)
                  
            }
        }

        //这里是拉取cp页面的数据
        if(tempData.title == 'cp'){
            
            if(tempData.author =='1'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.cp_text.push(temp)
            }
            
            if(tempData.author =='2'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.cp_text_info.push(temp)
                  
            }
        }
                
        //这里是拉取med页面的数据
        if(tempData.title == 'med'){
            
            if(tempData.author =='1'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.med_text.push(temp)
            }
            
            if(tempData.author =='2'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.med_text_info.push(temp)
                  
            }
        }


        //这里是拉取ser页面的数据
        if(tempData.title == 'ser'){
            
            if(tempData.author =='1'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.ser_text.push(temp)
            }
            
            if(tempData.author =='2'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.ser_text_info.push(temp)
                  
            }
        }
      
        //这里是拉取shop页面的数据
        if(tempData.title == 'shop'){
            
            if(tempData.author =='1'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.shop_text.push(temp)
            }
            
            if(tempData.author =='2'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.shop_text_info.push(temp)
                  
            }
        }      
      
      }
      
    });
    
    //文字的pages_two

    setTimeout(() => {
              api.base.getInfo_two().then(res=>{
      let tempData = {}
      let temp = ''
      //console.log(res)
      for(let i in res.items){
        tempData = res.items[i]
        //console.log(tempData)
     
         // console.log(b)
         //如果pages1已经拉取了数据
          if(this.swipter_text.length){
                if(tempData.author == '1'){
          //console.log(tempData.content)
        
          let temp = tempData.content.replace(/<.*?>/ig,"")
          this.swipter_text.push(temp)
          
        }
        if(tempData.author == '2'){
          //console.log(tempData.content)
          let temp = tempData.content.replace(/<.*?>/ig,"")
          this.swipter_text_info.push(temp)
        }
       
          }
        
       //这里是拉取shop页面的数据
        if(tempData.title == 'shop'){
            
            if(tempData.author =='1'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.shop_text.push(temp)
            }
            
            if(tempData.author =='2'){
                 temp = tempData.content.replace(/<.*?>/ig,"")
                this.shop_text_info.push(temp)
                  
            }
        }      
      }
    });
    }, 500);


    // console.log(this.swipter_text)
    // console.log(this.swipter_text_info)
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
