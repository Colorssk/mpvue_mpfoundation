<template>
  <div :style="{width: width, height: height, left: left, top: top, position: position}">
    <swiper
      :style="{height: height}"
      :current="current"
      :indicator-dots="defaultConfig.indicatorDots"
      :indicator-color="defaultConfig.indicatorColor"
      :indicator-active-color="defaultConfig.indicatorActiveColor"
      :autoplay="defaultConfig.autoplay"
      :interval="defaultConfig.interval"
      :duration="defaultConfig.duration"
      :circular="defaultConfig.circular"
      :vertical="defaultConfig.vertical"
      :previous-margin="defaultConfig.previousMargin"
      :next-margin="defaultConfig.nextMargin"
      :display-multiple-items="defaultConfig.displayMultipleItems"
      @change="swiperChanged" >
      <block v-for="item in list" :key="item">
        <swiper-item>
          <scroll-view class="txt-block" scroll-y style="height: 100%">
            <content-page :index="current" :data="item" ></content-page>
          </scroll-view>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import card from '@/components/card'
import contentPage from '@/components/contentPage'

export default {
  props: {
    list: Object,
    config: Object,
    width: {
      type: String,
      default: '100vw'
    },
    height: {
      type: String,
      default: '25vh'
    },
    left: {
      type: String,
      default: '0'
    },
    top: {
      type: String,
      default: '0'
    },
    current: {
      type: Number
    },
    currentChanged: {
      default: {}
    }
  },
  components: {
    card,
    contentPage
  },
  data () {
    return {
      defaultConfig: {
        indicatorDots: false,
        indicatorColor: 'rgba(0, 0, 0, .3)',
        indicatorActiveColor: '#000000',
        autoplay: false,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: false,
        previousMargin: '0px',
        nextMargin: '0px',
        displayMultipleItems: 1
      },
      fixDoubleTap: 1
    }
  },
  computed: {
    position: {
      get: function () {
        if (this.top !== '0' || this.left !== '0') {
          return 'absolute'
        }
      }
    }
  },
  methods: {
    swiperChanged (e) {
      // this.current = e.target.current
      // console.log(this.current)
      // this.currentChanged(e.target.current)
    },
    generateConfig () {
      this.config = this.config || {}
      for (const i in this.defaultConfig) {
        if (this.config.hasOwnProperty(i)) {
          this.defaultConfig[i] = this.config[i]
        }
      }
    }
  },
  mounted () {
    this.generateConfig()
  }
}
</script>

<style>
.slide-image {
  width: 100%;
  /* height: 100%; */
}
.txt-block {
  /* padding: 20rpx 40rpx; */
}
</style>
