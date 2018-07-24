import mkit from '@/utils/mkit'
// mkit.debug = true
import config from '@/config'

export default {
  login (code) {
    return mkit.post({
      url: config.baseUrl + '/wxusers/authenticate/miniProgram',
      data: { code: code },
      cache: false
    })
  },
  getBanner (data) {
    data = data || {}
    data.appid = data.appid || config.appid
    data.limit = data.limit || 20
    return mkit.get({
      url: config.baseUrl + '/table/djMRMLVM',
      data: data,
      cache: false
    })
  },
  getArticle (data) {
    data = data || {}
    data.appid = data.appid || config.appid
    data.limit = data.limit || 20
    data.page = data.page || 1
    return mkit.get({
      url: config.baseUrl + '/table/HC0FcqZE',
      data: data,
      cache: false
    })
  },
  getAreaCate (data) {
    data = data || {}
    data.appid = data.appid || config.appid
    data.limit = data.limit || 20
    data.page = data.page || 1
    return mkit.get({
      url: config.baseUrl + '/table/tDdTKcEa',
      data: data,
      cache: false
    })
  },
  getArea (data) {
    data = data || {}
    data.appid = data.appid || config.appid
    data.limit = data.limit || 20
    data.page = data.page || 1
    return mkit.get({
      url: config.baseUrl + '/table/yenG6chy',
      data: data,
      cache: false
    })
  },
  getConfig () {
    return mkit.get({
      url: config.baseUrl + '/table/DYTo26BC',
      cache: false
    })
  },
  getSrc () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://www.easy-mock.com/mock/5af9248f95c0ea4ed041e18e/example/mock#!method=get',
      cache: false
    })
  },
  getSlide () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://api.mokyun.com/table/djMRMLVM?limit=20&appid=7',
      cache: false
    })
  },
  //https://api.mokyun.com/table/HC0FcqZE?limit=20&appid=7
  getInfo () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://api.mokyun.com/table/HC0FcqZE?limit=20&appid=7',
      cache: false
    })
  },
  getInfo_two () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://api.mokyun.com/table/HC0FcqZE?limit=20&appid=7&page=2',
      cache: false
    })
  },
  getSlide_two () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://api.mokyun.com/table/djMRMLVM?limit=20&appid=7&page=2',
      cache: false
    })
  },
  
  getTest () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://www.easy-mock.com/mock/5af9248f95c0ea4ed041e18e/example/home_first#!method=get',
      cache: false
    })
  },


  getPhone () {
    // data = data || {}
    // data.appid = data.appid || config.appid
    // //data.appid = '5af9248f95c0ea4ed041e18e'
    // data.limit = data.limit || 20
    // data.page = data.page || 1
    return mkit.get({
      url: 'https://api.mokyun.com/table/djMRMLVM?limit=20&appid=7&page=2',
      cache: false
    })
  }
}
