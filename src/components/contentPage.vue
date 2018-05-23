<template>
  <div :style="{width: width, height: height, left: left, top: top, position: position}">
    {{data.title}}
  </div>
</template>

<script>

export default {
  name: 'contentPage',
  props: {
    data: {
      type: Object,
      default: {}
    },
    index: {
      type: Number
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    jsonData () {
      return JSON.stringify(this.data)
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style>
</style>
