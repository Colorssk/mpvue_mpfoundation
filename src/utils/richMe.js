export default function (Vue) {
  Vue.prototype.$loading = () => {
    wx.showLoading({
      title: '加载中'
    })
  }
  Vue.prototype.$endLoading = () => {
    wx.hideLoading()
  }
}
