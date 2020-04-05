// vue.config.js
module.exports = {
  // 选项...
  pages: {
    index: {
      // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '与猪猪的爱情纪念册',
      // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`
    // 输出文件名会被推导为 `subpage.html`
    subpage: 'src/main.js'
  },
  publicPath: '/',
  devServer: {
    port: 1314,
    proxy: {
      '/api': {
        target: "http://localhost:8001",
        changeOrigin: true,   //是否跨域
        ws: false,            //如果要代理webSockets，配置这个参数
        secure: false,        //如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};