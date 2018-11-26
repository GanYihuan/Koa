// 网站一般都提供静态资源（图片、字体、样式表、脚本……）
// 静态资源服务器
// npm i --save koa-static
// -----------------------------
const Koa = require('koa')
const app = new Koa()
// 加载路径
const path = require('path')
const static = require('koa-static')

app.use(static(path.join(__dirname, './static')))
app.use(async ctx => {
  ctx.body = 'hello world'
})
app.listen(3000)
// -----------------------------
// 运行程序并访问:
// http://localhost:3000/koa2.png
