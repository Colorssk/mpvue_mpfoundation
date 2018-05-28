<template>
  <div :style="{width: width, height: height, left: left, top: top, position: position}">
    <swiper
      :style="{height: height}"
      :current="insideCurrent"
      :currentListener="currentComputed"
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
      @change="swiperChanged"
       >
      <block v-for="(item, index) in list" :key="item">
        <swiper-item style="background: #EEE">
          <scroll-view class="txt-block" scroll-y style="height: 100%" @scrolltolower="setScrolltolower">
            <content-page v-if="index === current" :index="index" :data="item" :scrolltolower="scrolltolowerValue"></content-page>
          </scroll-view>
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
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
      fixDoubleTap: 1,
      insideCurrent: null,
      insideCurrent2: null,
      scrolltolowerValue: 0
    }
  },
  computed: {
    currentComputed: {
      get: function () {
        // console.log(this.current, this.insideCurrent)
        if (this.current === this.insideCurrent) {
        } else {
          this.insideCurrent = this.current
          // return this.insideCurrent
        }
      }
    },
    position: {
      get: function () {
        if (this.top !== '0' || this.left !== '0') {
          return 'absolute'
        }
      }
    }
  },
  methods: {
    setScrolltolower () {
      this.scrolltolowerValue++
    },
    swiperChanged (e) {
      if (e.target.source === 'touch') {
        this.insideCurrent = e.target.current
        this.currentChanged(e.target.current)
      }
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
}
</style>
