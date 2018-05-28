<template>
  <div :style="{display: display}">
    <!-- custom components -->
    <!-- <intro v-if="data.title == 'introduction'"></intro> -->
    <div>content Page</div>
  </div>
</template>

<script>
/**
 * custom components
 */
// import intro from '@/components/school/intro'

export default {
  name: 'contentPage',
  props: {
    data: {
      type: Object,
      default: {}
    },
    index: {
      type: Number
    },
    scrolltolower: {
      type: Number
    }
  },
  components: {
  },
  data () {
    return {
      display: 'block'
    }
  },
  computed: {
    jsonData () {
      return JSON.stringify(this.data)
    }
  },
  methods: {
    loading () {
      this.$loading()
      this.display = 'none'
    },
    endLoading () {
      this.$endLoading()
      this.display = 'block'
    }
  },
  mounted () {
    if (!this.data.data) {
      this.loading()
      setTimeout(() => {
        this.data.data = this.data.title
        this.endLoading()
      }, 1000)
    } else {
      this.loading()
      setTimeout(() => {
        this.display = 'block'
        this.endLoading()
      }, 350)
    }
  }
}
</script>

<style>
</style>
