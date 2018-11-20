'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const glob = require('glob')
const PAGE_PATH = path.resolve(__dirname,'../src/pages')
//配置多入口
const entries = ()=>{
  let entryFiles = glob.sync(PAGE_PATH + '/*/index.js')
  let base = {} 
  entryFiles.forEach((filePath) => {
       const filename = filePath.substring(filePath.lastIndexOf('pages\/') + 6, filePath.lastIndexOf('\/'))
       base[filename] = [filePath]
   }) 
  if (process.env.USE_SENTRY === '1') {
    Object.keys(base).forEach(entry => {
      base[entry].push('./src/utils/sentry.js')
    })
  }
  return base
}
console.log("All entries: ")
Object.keys(entries).forEach(entry => {
  console.log(entry)
  entries[entry].forEach(ele => {
    console.log("- %s", ele)
  })
  console.log()
})
//配置dev入口插件
const htmlPluginsOfDev=[
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: config.build.template,
      chunks: ['app'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: config.build.loginIndex,
      template: config.build.loginTemplate,
      chunks: ['login'],
      inject: true
    }),
  ]

//配置prod入口插件
const htmlPluginsOfProd=[
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks:['login','app'],
      minChunks:2 /*(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }*/
    }),
    new HtmlWebpackPlugin({
      filename: config.build.loginIndex,
      template: config.build.loginTemplate,
      chunks: ['manifest', 'vendor', 'login'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: config.build.template,
      chunks: ['manifest', 'vendor', 'app'],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
]
//出口
module.exports = {
  entries:entries,
  dev_plugins:htmlPluginsOfDev,
  prod_plugins:htmlPluginsOfProd
}