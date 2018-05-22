<template>
  <ul>
    <swpier-item
      width="100vw"
      height="100vh"
      :list="list"
      :config="{indicatorDots: false, current: 2}"
    ></swpier-item>
  </ul>
</template>

<script>
import swpierItem from '@/components/swiperItem'

export default {
  components: {
    swpierItem
  },
  data () {
    return {
      info: 'rua',
      list: [
        {url: ''},
        {url: ''},
        {url: ''}
      ]
    }
  },
  created () {

  }
}
</script>

<style scoped>
</style>
