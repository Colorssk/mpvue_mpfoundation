<template>
  <div style="display:block" class="nav_page_item">
    <div v-for="item in data" :key="item" style="height:100rpx;text-align:left;line-height:100rpx;">
      {{item.title}}
    </div>
  </div>
</template>

<script>

export default {
  props: ['data'],
  data () {
    return {
    }
  },
  comments: {
  },
  methods: {
  },
  created () {
  }
}
</script>

<style>
.nav_page_item {
  color: #777;
  
}
</style>
