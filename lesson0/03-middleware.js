// koa-router 中间件
// 基本上Koa 所有的功能都是通过中间件实现的。每个中间件默认接受两个参数，
// 第一个参数是 Context 对象，第二个参数是next函数。
// 只要调用next函数，就可以把执行权转交给下一个中间件
// npm install koa-router --save
// -----------------------------
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router
  .get('/', async ctx => {
    let html = ` <ul> <li><a href="/hello">helloworld</a></li> <li><a href="/about">about</a></li> </ul> `
    ctx.body = html
  })
  .get('/hello', async ctx => {
    ctx.body = 'helloworld'
  })
  .get('/about', async ctx => {
    ctx.body = 'about'
  })
// 加载中间件
app.use(router.routes(), router.allowedMethods())
app.listen(3000)
// -----------------------------
// 运行程序并访问:
// http://localhost:3000/
