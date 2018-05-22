<template>
  <div class="container">
  </div>
</template>

<script>
import api from '@/api'
export default {
  methods: {
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
    goHome () {
      return wx.reLaunch({
        url: '../list/main'
      })
    },
    checkToken (code) {
      if (code) {
        const token = wx.getStorageSync('token') || false
        if (token) {
          const tokenInfo = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
          console.log(tokenInfo.exp)
          if (tokenInfo.exp * 1000 > Date.parse(Date())) {
            this.goHome()
          }
          return true
        } else {
          return false
        }
      }
    },
    generateToken (code) {
      api.base.login(code).then(res => {
        if (res.token) {
          wx.setStorageSync('token', res.token)
        }
        this.goHome()
      }, err => {
        console.log(err)
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  },
  async mounted () {
    this.$loading()
    const res = await this.login()
    if (!this.checkToken(res.code)) {
      this.generateToken(res.code)
    }
  }
}
</script>