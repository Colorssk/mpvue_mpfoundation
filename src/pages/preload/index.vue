<template>
  <div class="container">
    <div>
    <mk-loading></mk-loading>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading'
import api from '@/api'
export default {
  data () {
    return {
      text: 'test321319sfuhaiufhauih'
    }
  },

  components: {
    'mk-loading': loading
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    login () {
      return new Promise((resolve, reject) => {
        if (!resolve) {
          resolve = (res) => { return res }
        }
        wx.login({
          success: (res) => {
            resolve(res)
          }
        })
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },

  async onShow () {
    // const self = this
    wx.showLoading({
      title: '加载中'
    })
    const res = await this.login()
    if (res.code) {
      const token = wx.getStorageSync('token') || false
      if (token) {
        const tokenInfo = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
        console.log(tokenInfo.exp)
        if (tokenInfo.exp * 1000 > Date.parse(Date())) {
          return wx.reLaunch({
            url: '../index/main'
          })
        }
      }
      api.base.login(res.code).then(res => {
        if (res.token) {
          wx.setStorageSync('token', res.token)
        }
        wx.reLaunch({
          url: '../index/main'
        })
      }, err => {
        console.log(err)
      })
    }
  },

  async onLoad () {

  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
