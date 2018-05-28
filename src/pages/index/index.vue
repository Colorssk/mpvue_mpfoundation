<template>
  <div class="container">
    <swiper
      width="100vw"
      height="30vh"
      :list="list" >
    </swiper>
    <navbar
      :pageHeight="'100vh'"
      :pageBottomPadding="'40vh'"
      :navs="navs"
      :pageScrollY="false"
      :config="swiperConfig"
      :listen="tabChanged"
      :data="navDataList[navIndex]" >
    </navbar>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import navbar from '@/components/navbar'

export default {
  data () {
    return {
      motto: 'Hello World',
      list: [
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525973905279&di=00933624d6cba7c666fec41046cae35d&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa5c27d1ed21b0ef48c509cecd1c451da80cb3ec3.jpg', jumpUrl: 'pages/s'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525973905279&di=00933624d6cba7c666fec41046cae35d&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa5c27d1ed21b0ef48c509cecd1c451da80cb3ec3.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525975376412&di=b93889ffb5fafd9031096630eccdf8e9&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9345d688d43f8794f7940c9ede1b0ef41bd53a12.jpg'}
      ],
      navs: [
        {title: 'nav1', id: 1},
        {title: 'nav2', id: 2},
        {title: 'nav3', id: 3},
        {title: 'nav4', id: 4},
        {title: 'nav5', id: 5},
        {title: 'nav6', id: 6}
      ],
      navIndex: 0,
      navDataList: [
        [
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'},
          {title: '0rua'}
        ]
      ],
      userInfo: {},
      swiperConfig: {
        // style: 'width:50vw'
      }
    }
  },

  components: {
    swiper,
    navbar
  },

  methods: {
    tabChanged (index, nav) {
      this.navIndex = index
      console.log('tabChanged')
      console.log(index, nav)
      this.navDataList[index] = [
        {title: index + '0rua' + 1},
        {title: index + '0rua' + 2},
        {title: index + '0rua' + 3},
        {title: index + '0rua' + 4},
        {title: index + '0rua' + 5},
        {title: index + '0rua' + 6},
        {title: index + '0rua' + 7},
        {title: index + '0rua' + 8},
        {title: index + '0rua' + 9},
        {title: index + '0rua' + 10},
        {title: index + '0rua' + 11},
        {title: index + '0rua' + 12},
        {title: index + '0rua' + 13},
        {title: index + '0rua' + 14},
        {title: index + '0rua' + 15},
        {title: index + '0rua' + 16}
      ]
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },

  onShow () {
    wx.request({
      url: 'https://api.mokyun.com/wxusers/info',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('token')
      }
    })
  }
}
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: scroll; 
  /* overflow: hidden;  */
}
</style>
