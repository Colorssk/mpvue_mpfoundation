<template>
  <ul>
    <slide-navbar
      width="100vw"
      height="5vh"
      :leftFloat="true"
      :menuWidth="100"
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
import card from '@/components/card'
import slideNavbar from '@/components/slideNavbar'

export default {
  components: {
    swpierItem,
    card,
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
      // console.log(this.currentChangedTime)
      // if (this.currentChangedTime !== false) {
      //   console.log('do')
      //   this.currentChangedTime = false
      //   this.current = e
      // } else {
      //   console.log('nodo')
      //   this.currentChangedTime = true
      // }
      this.current = e
      // this.currentChangedTime = false
      // console.log('e: ', e)
      // if (onlyUpdateNav) {
      //   console.log(111)
      // } else {
      // }
    }
  },
  created () {

  }
}
</script>
