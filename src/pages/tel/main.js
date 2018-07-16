import Vue from 'vue'
import App from './tel'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '联系我们',
    navigationBarTextStyle: 'black',
    backgroundTextStyle:'dark'
  }
}
