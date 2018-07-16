<template>
  <div :style="{backgroundColor: backgroundColor, color: fontColor}">
  <scroll-view class="swiper-tab" scroll-x :style="{width: width, height: height, marginLeft: marginLeft + 'px'}">
  <view v-if="mode =='default'"   :style="menuStyle" v-for=" (item,index) in navList" :key="index" class="swiper-tab-item" :class="{'active': currentTab===index}" :data-current="index" @click="swichNav(index)">{{item.title}}</view>
    <view v-if="mode =='default'" class="block" :style="{left: style.left, width: style.width, backgroundColor: sliderBlockColor}"></view>
  </scroll-view>
  </div>
</template>
<script>
export default {
  name: 'slider-nav',
  data () {
    return {
      winWidth: null,
      winHeight: null,
      navWidth: null,
      currentDateIndex: null
    }
  },
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    leftFloat: {
      type: Boolean
    },
    rightFloat: {
      type: String,
      default: '-'
    },
    navList: {
      type: Array,
      default: []
    },
    menuWidth: {
      type: Number
    },
    currentTab: {
      type: Number,
      default: 0
    },
    font: {
      type: Number,
      default: 14
    },
    currentChanged: {
      type: Function
    },
    backgroundColor: {
      type: String
    },
    fontColor: {
      type: String
    },
    sliderBlockColor: {
      type: String,
      default: '#FFF'
    },
    mode: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    obj2style (style) {
      let str = []
      Object.keys(style).forEach(key => {
        str.push(`${key}:${style[key]};`)
      })
      return str.join(';')
    },
    swichNav (current) {
      if (this.currentTab === current) return false
      else {
        console.log(current)
        this.currentChanged(current, this.navList[current])
      }
    },
    swichDate (current) {
      if (this.currentTab === current) return false
      else {
        this.currentDateIndex = current
        this.currentChanged(current, this.days[current])
      }
    },
    swiperChange (e) {
      let {
        current
      } = e.target
      this.currentTab = current
    }
  },
  computed: {
    // hightlight(){
      
    //     this.$refs.tag.style.fontColor='red'
      
    //    },
    days () {
      const dayName = ['日', '一', '二', '三', '四', '五', '六']
      const date = new Date()
      date.setSeconds(0)
      date.setMinutes(0)
      date.setHours(0)
      const days = []
      const currentDate = date.getDate()
      date.setDate(date.getDate() - 3)
      for (let i = 0; i < 15; i++) {
        days[i] = {}
        days[i].dayNumber = date.getDate()
        days[i].dayName = dayName[date.getDay()]
        days[i].timestamp = Date.parse(date)
        date.setDate(date.getDate() + 1)
        if (days[i].dayNumber === currentDate) {
          this.currentDateIndex = i
        }
      }
      return days
    },
    style: {
      get: function () {
        // 计算左侧剩余多少宽度，所以滚动条起始位置要加
        let leftWidth = (this.winWidth - this.navList.length * this.navWidth) / 2
        let width = this.navWidth/3 +8+ 'px'
        let left = leftWidth + this.navWidth * this.currentTab +42+ 'px'
        return { left, width }
      }
    },
    menuStyle: {
      get: function () {
        let style = {}
        style.fontSize = this.font + 'px'
        style.width = this.navWidth + 'px'
        return this.obj2style(style)
      }
    },
    marginLeft () {
      let marginLeft = null
      const self = this
      if (!self.menuWidth) {
          // 如果没有
        self.navWidth = self.winWidth / self.navList.length
      } else {
        self.navWidth = self.menuWidth
        if (self.leftFloat) {
          const contentWidth = self.menuWidth * self.navList.length
          marginLeft = (self.winWidth - contentWidth) / 2
        }
        if (self.rightFloat !== true) {
          marginLeft = '-' + marginLeft
        }
        return marginLeft
      }
    }
  },
  mounted () {
    const self = this
    wx.getSystemInfo({
      success: function (info) {
        // self.navWidth = res.windowWidth
        self.winWidth = info.windowWidth
        self.winHeight = info.windowHeight
      }
    })
  }
}
</script>
<style scoped>
.swiper-tab {
  width: 100%;
  height: 100px;
  text-align: center;
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.view-div {
  display: inline-block;
  background: green;
  padding: 15rpx 25rpx;
  border: 1rpx solid #fff;
  flex:1;
}
.swiper-tab .swiper-tab-item {
  font-size: 30rpx;
  height: 100%;
  display: inline-block;
}

.active-tab-item span {
  padding: 5rpx 0;
  border-bottom: 5rpx #FFF solid;
  color: #FFF;
}
.days-mode {
  padding: 10rpx;
}
.days-mode div {
  padding: 5rpx;
}
.days-mode .active {
  background: #2a81e4;
  border-radius: 50%;
  width:46rpx;
  height:46rpx;
  color: #FFF;
  margin:0 auto;
}
.swiper-tab .block {
  display: block;
  position: absolute;
  left: 0rpx;
  height: 16rpx;
  background: red;
  top:7vh;
  transition: left 0.2s;
  z-index: 99;
  margin-left: -45rpx;
}
.swiper-tab-item.active{
  color: #2a81e4;
}

</style>
