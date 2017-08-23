var utils = require('./utils')
var config = require('../config')
var isProduction = ['testing', 'production'].includes(process.env.NODE_ENV)
console.log('isProduction:', isProduction, 'NODE_ENV:', process.env.NODE_ENV)
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
