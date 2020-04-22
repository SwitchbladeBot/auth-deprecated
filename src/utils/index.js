const jwt = require('jsonwebtoken')

module.exports = {
  encodeQueryString: params => {
    const enc = encodeURIComponent
    return Object.keys(params)
      .map(k => enc(k) + '=' + enc(params[k]))
      .join('&')
  }
}
