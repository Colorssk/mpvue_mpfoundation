import mkit from '@/utils/mkit'
// mkit.debug = true

export default {
  login (code) {
    return mkit.post({
      url: domain + '/wxusers/authenticate/miniProgram',
      data: { code: code },
      cache: false
    })
  }
}

const domain = 'https://api.mokyun.com'

