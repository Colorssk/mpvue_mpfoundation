<template>
  <ul>
    <slide-navbar
      width="100vw"
      height="7.5vh"
      :leftFloat="true"
      sliderBlockColor="#777"
      :currentTab="current"
      :currentChanged="currentChanged"
      :navList="list">
    </slide-navbar>
    <swpier-item
      :currentChanged="currentChanged"
      width="100vw"
      height="92.5vh"
      top="7.5vh"
      :list="list"
      :current="current">
    </swpier-item>
  </ul>
</template>

<script>
import swpierItem from '@/components/swiperItem'
import slideNavbar from '@/components/slideNavbar'
import api from '@/api'

export default {
  components: {
    swpierItem,
    slideNavbar
  },
  data () {
    return {
      current: 0,
      list: [
        {title: '全部'},
        {title: '教育'},
        {title: '科技'},
        {title: '医疗'},
        {title: '社交'},
        {title: '商城'}
      ]
    }
  },
  methods: {
    currentChanged (e) {
      this.current = e
    }
  },
  created () {
    // const config = api.base.getConfig().then(r=>{
    //   console.log(r)
    // }).catch(e=>{})
    // // console.log(config)
  //     const test_config = api.base.getTest().then(res=>{
  //     console.log(res.data.newEvents)
  //   }).catch(e=>{
  //     console.log(e)
  //   })
   }
}
</script>
