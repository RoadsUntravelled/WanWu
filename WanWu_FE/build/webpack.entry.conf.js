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
const getEntries=()=>{
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
const entries = getEntries()
console.log("All entries: ")
Object.keys(entries).forEach(entry => {
  console.log(entry)
  entries[entry].forEach(ele => {
    console.log("- %s", ele)
  })
  console.log()
})
//配置dev入口插件
const gethtmlPluginsOfDev=()=>{
  let entryHtml = glob.sync(PAGE_PATH + '/*/index.html')
  let arr=[]
  entryHtml.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('pages\/') + 6, filePath.lastIndexOf('\/'))
    if(filename=='main'){
    arr.push(new HtmlWebpackPlugin({
      // 模板来源
      template: path.resolve(__dirname,filePath),
      // 文件名称
      filename: path.resolve(__dirname,'../dist/index.html'),
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: [filename],
      inject: true
    }))
    }
    else{
    arr.push(new HtmlWebpackPlugin({
      // 模板来源
      template: path.resolve(__dirname,filePath),
      // 文件名称
      filename: path.resolve(__dirname,'../dist/'+filename + '/index.html'),
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: [filename],
      inject: true
    }))
    }
  })
  return arr
}
const htmlPluginsOfDev=gethtmlPluginsOfDev()
//配置prod入口插件
const gethtmlPluginsOfProd=()=>{
  let commonChunks=new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks:[],
      minChunks:0 /*(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }*/
    })
  let entryHtml = glob.sync(PAGE_PATH + '/*/index.html')
  let arr=[]
  entryHtml.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('pages\/') + 6, filePath.lastIndexOf('\/'))
    commonChunks.selectedChunks.push(filename)
    commonChunks.minChunks++;
    if(filename=='main'){
    arr.push(new HtmlWebpackPlugin({
      // 模板来源
      template: path.resolve(__dirname,filePath),
      // 文件名称
      filename: path.resolve(__dirname,'../dist/index.html'),
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['manifest', 'vendor', filename],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }))
    }
    else{
    arr.push(new HtmlWebpackPlugin({
      // 模板来源
      template: path.resolve(__dirname,filePath),
      // 文件名称
      filename: path.resolve(__dirname,'../dist/'+filename + '/index.html'),
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['manifest', 'vendor', filename],
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }))
    }
  })
  arr.push(commonChunks)
  return arr
}
const htmlPluginsOfProd=gethtmlPluginsOfProd()
//出口
module.exports = {
  entries:entries,
  dev_plugins:htmlPluginsOfDev,
  prod_plugins:htmlPluginsOfProd
}