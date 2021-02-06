
/*
 * @Description: 
 * @Author: yaolin
 * @Date: 2021-02-05 09:28:57
 * @LastEditors: yaolin
 */
module.exports = {
  publicPath: '',

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
  outputDir: 'shoppingMall',

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  integrity: false,

  configureWebpack: {  // 用于调试
    devtool: 'source-map'
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    https: false,
    open: false,
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://192.1.2.75:8088/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },

  pages: {
    main: new PageReset('main', '首页'), // 此处title为各系统名称，
    login: new PageReset('login', '登录'), // 此处title为各系统名称
  },
}
/**
 * 页面构造器
 * @param {String} name 页面名称
 * @param {String} title 页面title
 */
function PageReset (name, title) {
  // page 的入口
  this.entry = `src/entry/${name}.js`
  // 模板来源
  this.template = 'public/index.html'
  // 在 dist/index.html 的输出
  this.filename = `${name}.html`
  // 当使用 title 选项时，
  // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  this.title = title
  // 在这个页面中包含的块，默认情况下会包含
  // 提取出来的通用 chunk 和 vendor chunk。
  this.chunks = ['chunk-vendors', 'chunk-common', name]
}
