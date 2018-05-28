<template>
  <ul>
    <slide-navbar
      width="100vw"
      height="5vh"
      :leftFloat="true"
      :menuWidth="100"
      sliderBlockColor="#777"
      :currentTab="current"
      :currentChanged="currentChanged"
      :navList="list">
    </slide-navbar>
    <swpier-item
      :currentChanged="currentChanged"
      width="100vw"
      height="95vh"
      top="5vh"
      :list="list"
      :current="current">
    </swpier-item>
  </ul>
</template>

<script>
import swpierItem from '@/components/swiperItem'
import slideNavbar from '@/components/slideNavbar'

export default {
  components: {
    swpierItem,
    slideNavbar
  },
  data () {
    return {
      current: 0,
      list: [
        {title: '校园'},
        {title: '商店'}
      ]
    }
  },
  methods: {
    currentChanged (e) {
      this.current = e
    }
  },
  created () {

  }
}
</script>
