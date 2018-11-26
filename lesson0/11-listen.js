// Koa 应用并非是一个 1-to-1 表征关系的 HTTP 服务器。
// 一个或多个Koa应用可以被挂载到一起组成一个包含单一 HTTP 服务器的大型应用群。
// 这意味着您可以同时支持 HTTP 和 HTTPS，或者在多个端口监听同一个应用。

const http = require('http')
const Koa = require('koa')
const app = new Koa()

http.createServer(app.callback()).listen(3000)
http.createServer(app.callback()).listen(3001)
