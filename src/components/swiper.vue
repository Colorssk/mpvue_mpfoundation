<template>
  <div :style="{width: width, height: height}">
    <swiper
      :style="{height: height}"
      :indicator-dots="defaultConfig.indicatorDots"
      :indicator-color="defaultConfig.indicatorColor"
      :indicator-active-color="defaultConfig.indicatorActiveColor"
      :autoplay="defaultConfig.autoplay"
      :current="defaultConfig.current"
      :interval="defaultConfig.interval"
      :duration="defaultConfig.duration"
      :circular="defaultConfig.circular"
      :vertical="defaultConfig.vertical"
      :previous-margin="defaultConfig.previousMargin"
      :next-margin="defaultConfig.nextMargin"
      :display-multiple-items="defaultConfig.displayMultipleItems"
    >
      <block v-for="item in list" :key="item">
        <a v-if="item.jumpUrl" :href="item.jumpUrl">
          <swiper-item>
            <image :src="item.url" class="slide-image" :style="defaultConfig.style" />
          </swiper-item>
        </a>
        <swiper-item v-else>
          <image :src="item.url" class="slide-image" :style="defaultConfig.style" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Object,
    config: Array,
    width: {
      type: String,
      default: '100vw'
    },
    height: {
      type: String,
      default: '25vh'
    }
  },
  data () {
    return {
      defaultConfig: {
        width: '100%',
        height: 150,
        indicatorDots: true,
        indicatorColor: 'rgba(0, 0, 0, .3)',
        indicatorActiveColor: '#000000',
        autoplay: false,
        current: 0,
        interval: 5000,
        duration: 500,
        circular: false,
        vertical: false,
        previousMargin: '0px',
        nextMargin: '0px',
        displayMultipleItems: 1
      }
    }
  },
  methods: {
    generateConfig () {
      this.config = this.config || {}
      for (const i in this.defaultConfig) {
        if (this.config[i]) {
          this.defaultConfig[i] = this.config[i]
        }
      }
    }
  },
  created () {
    this.generateConfig()
  }
}
</script>

<style>
.slide-image {
  width: 100%;
}
</style>
