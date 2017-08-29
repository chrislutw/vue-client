// const base64 = require('hi-base64')
// const jsSHA = require('jssha')

import base64 from 'hi-base64'
import JSSHA from 'jssha'
import superagent from 'superagent'

function ArkClient(initData) {
  const defaults = {
    host: 'http://127.0.0.1',
    port: 8080,
    app_id: '',
    game_code: '',
    app_key: '',
    account: 'acd_rd6_arkserver',
    password: 'arkserver',
    platform: 'main',
    member_data: { 'nick_name': 'Test010', 'e_mail': 'noah010@igs.com.tw' },
    headers: {
      'Content-type': 'multipart/form-data',
      'Accept': 'text/plain'
    },
    cmd_sn: 0,
    ws: null
  }
  this.opts = JSON.parse(JSON.stringify(defaults))

  function init(configData) {

  }
  // console.log(defaults)
}
ArkClient.prototype.config = function(configData) {
  this.opts
}

export default ArkClient

function show() {
  const str = '你我他是不是'
  const encodeStr = base64.encode(str)
  const decodeStr = base64.decode(encodeStr)
  console.log('encodeStr:', encodeStr, ' decodeStr:', decodeStr)

  let shaObj = new JSSHA('SHA-1', 'TEXT')
  shaObj.setHMACKey('123456', 'TEXT')
  shaObj.update('我是你')
  const shaStr = shaObj.getHMAC('HEX')
  console.log('shaStr:', shaStr)
}

// export default show
