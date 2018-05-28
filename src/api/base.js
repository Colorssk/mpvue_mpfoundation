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
  }
}
