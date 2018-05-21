<template>
  <div>
    <swiper
      :style="defaultConfig.style"
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
        <swiper-item v-if="!item.jumpUrl">
          <image :src="item.url" class="slide-image" :style="defaultConfig.style" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['list', 'config'],
  data () {
    return {
      defaultConfig: {
        style: 'width:100%;width:100vw',
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
.card {
  padding: 10px;
}
</style>
