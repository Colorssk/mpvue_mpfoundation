import mkit from '@/utils/mkit'
// mkit.debug = true

export default {
  login (code) {
    return mkit.post({
      url: domain + '/wxusers/authenticate',
      data: { code: code }
    })
  }
}

const domain = 'https://api.mokyun.com'

