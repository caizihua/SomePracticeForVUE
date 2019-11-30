//node 核心语法
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
//暴露配置对象
module.exports = {
  entry:{index: path.join(__dirname,'./src/index.js')},
  output:{
    path:path.join(__dirname,'./dist/bundle.js'),
    filename:'bundle.js'
  },
  mode:'development',
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve:{
    alias:{
      //"vue$":"vue/dist/vue.js"
    }
  },
  module:{
    rules:[
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  }
}