let proxyObj = {}
proxyObj['/'] = {
  ws: false,
  //目标地址,后端地址
  target: 'http://localhost:8080',
  //发送请求头host会被设置target
  changeOrigin: true,
  //不重写请求地址
  pathReWrite:{
    '^/': '/'
  }
}
// // webSocket
// proxyObj['/ws'] = {
//   ws: true,
//   target: 'ws://localhost:8888'
// }
module.exports = {
  lintOnSave: false,//是否开启eslint语法检查
  devServer: {
      host: 'localhost',
	  // 修改前端端口号
      port: 8081,
      proxy: proxyObj
    }
}
