<template>
  <scroll-view class="swiper-tab" scroll-x :style="{width: width, height: height, marginLeft: rightFloat + marginLeft + 'px'}">
    <view :style="menuStyle" v-for=" (item,index) in navList" :key="index" class="swiper-tab-item" :data-current="index" @tap="swichNav">{{item.title}}</view>
    <view class="block" :style="style"></view>
  </scroll-view>
</template>
<script>
// import wxp from 'minapp-api-promise'
// import {
//   this.obj2style
// } from '@/common/js/basic'

export default {
  name: 'slider-nav',
  data () {
    return {
      winWidth: null,
      winHeight: null,
      navWidth: null,
      marginLeft: null
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
      type: Array
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
    swichNav (e) {
      const {
        current
      } = e.target.dataset
      if (this.currentTab === current) return false
        // else this.currentTab = current
      else {
        this.currentChanged(current)
        // this.$emit('update:currentTab', current)
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
    style: {
      get: function () {
        // 计算左侧剩余多少宽度，所以滚动条起始位置要加
        let leftWidth = (this.winWidth - this.navList.length * this.navWidth) / 2
        let width = this.navWidth + 'px'
        let left = leftWidth + this.navWidth * this.currentTab + 'px'
        let style = {
          left,
          width
        }
        return this.obj2style(style)
      }
    },
    menuStyle: {
      get: function () {
        let style = {}
        style.fontSize = this.font + 'px'
        style.width = this.navWidth + 'px'
        return this.obj2style(style)
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
        if (!self.menuWidth) {
            // 如果没有
          self.navWidth = self.winWidth / self.navList.length
        } else {
          self.navWidth = self.menuWidth
          if (self.leftFloat) {
            const contentWidth = self.menuWidth * self.navList.length
            self.marginLeft = (self.winWidth - contentWidth) / 2
          }
          if (self.rightFloat === true) {
            self.rightFloat = ''
          }
        }
      }
    })
  }
}
</script>
<style scoped>
.swiper-tab {
  width: 100%;
  text-align: center;
  line-height: 42px;
  white-space: nowrap;
  position: relative;
}
.swiper-tab .swiper-tab-item {
  transition: all 0.2s;
  font-size: 18px;
  height: 42px;
  display: inline-block;
  color: #777777;
}
.swiper-tab .block {
  display: block;
  position: absolute;
  left: 0;
  height: 2px;
  background: red;
  top:4.7vh;
  transition: left 0.2s;
  z-index: 99;
}
/* .swiper-tab {
  width: 100%
  text-align: center
  line-height: 42px
  white-space: nowrap
  position: relative
  .swiper-tab-item {
    transition: all $time
    font-size: 18px
    height: 42px
    display: inline-block
    color: #777777
  }
  .block {
    display: block
    position: absolute
    left: 0
    height: 2px
    background: $slider-color
    bottom: 20px
    transition: left $time
    z-index: 99
  }
} */
</style>
