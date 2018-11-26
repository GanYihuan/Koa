const Koa = require('koa')
const app = new Koa()

// ctx: Context对象
// Context 封装了request, response 对象
// ctx.response: HTTP response
// ctx.request: HTTP request
app.use(async ctx => {
  // ctx.body: 发送给用户的内容
  ctx.body = 'Hello World'
})
app.listen(3000)
// -----------------------------
// 运行程序并访问:
// http://localhost:3000
