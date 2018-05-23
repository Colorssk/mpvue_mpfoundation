<template>
  <div>
    <div>
      <scroll-view scroll-x>
        <view class="item">
          <view
          v-for="(nav, index) in navs" 
          :key="index" class="scroll-view-item_H"
          :class="[index === activeIndex ? 'scroll-view-item_H_active' : '']"
          @click="activeTab(index, $event)" >
            {{nav.title}}
          </view>
        </view>
      </scroll-view>
      <scroll-view :scroll-y="pageScrollY" :style="{height: pageHeight}">
        <view class="page page_no_scroll" :style="{marginLeft: pageMarginLeft}">
          <view
          v-for="(nav, index) in navs" 
          :key="index" class="scroll-view-page_H"
          :class="[index === activeIndex ? 'scroll-view-page_H_active' : '']" >
            <navPage :data="data"></navPage>
            <view :style="{width: '100vw',height: pageBottomPadding}"></view>
          </view>
        </view>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import navPage from '@/components/navPage'

export default {
  props: ['navs', 'config', 'listen', 'data', 'pageHeight', 'pageBottomPadding', 'pageScrollY'],
  data () {
    return {
      activeIndex: 0,
      pageMarginLeft: '0vw'
    }
  },
  components: {
    navPage
  },
  methods: {
    activeTab (index, ev) {
      this.activeIndex = index
      const offset = index * 100
      this.pageMarginLeft = `-${offset}vw`
      this.listen(index, this.navs[index])
    }
  },
  created () {
    this.activeTab(0)
  }
}
</script>

<style scoped>
scroll-view, scroll-view .item, scroll-view .page {
  height: 70rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  font-size: 30rpx;
  line-height: 50rpx;
  background: #EEE;
  color: #555;
}
scroll-view .page {
  width: 10000vw;
  overflow-y: scroll;
  min-height: 100%;
  justify-content: flex-start;
  /* flex-direction: column; */
}
.page_no_scroll {
  overflow-y:visible !important;
}
.scroll-view-item_H {
  min-width: 25%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.scroll-view-item_H_active {
  color: red;
  border-bottom: red 5rpx solid;
}
.scroll-view-page_H {
  width: 100vw;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.scroll-view-page_H_active {
  color: red;
}
</style>
