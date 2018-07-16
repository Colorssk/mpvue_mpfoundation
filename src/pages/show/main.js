import Vue from 'vue'
import App from './show'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '案例展示'
  }
}
