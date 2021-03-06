const Koa = require('koa')
const app = new Koa()
// 此控件支持Json,form,text类型
const bodyParser = require('koa-bodyparser')

// 使用koa-bodyparser中间件
app.use(bodyParser())
app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    let html = `
        <h1>koa-bodyparser</h1>
          <form method="POST" action="/">
          Name:<input name="name" />
          <br/>
          Age:<input name="age" />
          <br/>
          Email: <input name="email" />
          <br/>
          <button type="submit">submit</button>
        </form>
        `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    ctx.body = ctx.request.body
  } else {
    ctx.body = '<h1>404 Not Found</h1>'
  }
})
app.listen(3000)
// -----------------------------
// 行程序并访问:
// http://localhost:3000/
