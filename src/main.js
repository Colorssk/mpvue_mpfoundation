import Vue from 'vue'
import App from './App'
import richMe from './utils/richMe'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
richMe(Vue)
app.$mount()
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
     // '^pages/preload/main',
      '^pages/logs/main',
      'pages/index/main',
      'pages/swiperItem/main',
      'pages/about/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    'tabBar': {
      selectedColor: '#6495ED',
      list: [
        {
          pagePath: 'pages/logs/main',
          text: '首页',
          iconPath: 'static/img/main.png',
          selectedIconPath: 'static/img/main-active.png'
        },
        {
          pagePath: 'pages/swiperItem/main',
          text: '案例展示',
          iconPath: 'static/img/show.png',
          selectedIconPath: 'static/img/show-active.png'
        },
        {
          pagePath: 'pages/about/main',
          text: '联系我们',
          iconPath: 'static/img/access.png',
          selectedIconPath: 'static/img/access-active.png'
        }
      ]
    }
  }
}
