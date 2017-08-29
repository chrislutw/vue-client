var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 多entry設定
// var entryPath = resolve('src/WebpackEntry')
// var entryFiles = utils.entryFiles(entryPath)
//                       .map(name => {return {[name.split('.')[0]]: `${entryPath}\\${name.split('.')[0]}`}})
//                       .reduce((a, b) => Object.assign(a, b), {})
// var venders = {vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'superagent']}
// Object.assign(entryFiles, venders)

module.exports = {
  entry: {
    app: '@/WebpackEntry',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'superagent']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]?v=' + process.env.npm_package_version)
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]?v=' + process.env.npm_package_version)
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]?v=' + process.env.npm_package_version)
        }
      }
    ]
  }
}
