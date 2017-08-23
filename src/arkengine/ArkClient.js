const base64 = require('hi-base64')
const jsSHA = require('jssha')

const str = '你我他是不是'
const encodeStr = base64.encode(str)
const decodeStr = base64.decode(encodeStr)
console.log('encodeStr:', encodeStr,' decodeStr:', decodeStr)

var shaObj = new jsSHA("SHA-1", "TEXT")
shaObj.setHMACKey('123456', "TEXT")
shaObj.update('我是你')
const shaStr = shaObj.getHMAC("HEX")
console.log('shaStr:', shaStr,')