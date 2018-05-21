import md5 from 'md5'
import config from '@/config'
export default {
  debug: false,
  request (data) {
    return new Promise((resolve, reject) => {
      const token = wx.getStorageSync('token') || ''
      const orginDataMd5 = md5(JSON.stringify(data))
      const headerTemp = data.header
      const expires = data.expires || 3600000
      console.log(expires)
      data.header = {
        Authorization: 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        APPID: config.appid
      }
      for (const key in headerTemp) {
        data.header[key] = headerTemp[key]
      }
      data.method = data.method ? data.method.toUpperCase() : 'GET'
      data.dataType = data.dataType ? data.dataType : 'json'
      if (reject) {
        data.fail = reject
      }
      data.success = (res) => {
        if (res.statusCode !== 200) {
          return reject(res)
        }
        if (data.cache !== false) {
          this.debugLog('from storage network', data.method + ': ', data.url, '\n[data] ', res)
          setCache(orginDataMd5, res.data, expires)
        }
        resolve(res.data, res)
      }
      if (data.cache !== false) {
        const res = getCache(orginDataMd5)
        if (res) {
          this.debugLog('from storage cache', data.method + ': ', data.url, '\nrespone data: ', res)
          return resolve(res, res)
        }
      }
      wx.request(data)
    })
  },
  get (data) {
    data.method = 'get'
    return this.request(data)
  },
  post (data) {
    data.method = 'post'
    return this.request(data)
  },
  put (data) {
    data.method = 'put'
    return this.request(data)
  },
  delete (data) {
    data.method = 'delete'
    return this.request(data)
  },
  debugLog (...data) {
    if (this.debug) {
      console.log('%c [Mokyun kit] ', 'color:green', ...data)
      console.log(' ')
    }
  }
}

function setCache (orginDataMd5, data, time) {
  let cache = wx.getStorageSync('request_cache') || {}
  cache = flushCache(cache)
  cache[orginDataMd5] = {
    data: data,
    expires: Date.parse(Date()) + time
  }
  wx.setStorageSync('request_cache', cache)
}

function getCache (orginDataMd5) {
  const cache = wx.getStorageSync('request_cache') || []
  if (cache[orginDataMd5] && cache[orginDataMd5].expires > Date.parse(Date())) {
    return cache[orginDataMd5].data
  }
  return false
}

function flushCache (cache) {
  if (Object.keys(cache).length >= 1000) {
    for (const key in cache) {
      delete cache[key]
      return flushCache(cache)
    }
  }
  return cache
}
