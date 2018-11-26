// 安装koa模板使用中间件
// 返回给用户的网页往往都写成模板文件。 Koa 先读取模板文件，然后将这个模板返回给用户
// 安装koa模板使用中间件koa-views
// 中间件目录:
// https://github.com/koajs/koa/wiki#middleware
// 然后在下载你喜欢的模板引擎
// 模板引擎目录:
// https://github.com/tj/consolidate.js#supported-template-engines
// 便可以愉快的使用了
// npm install koa-views --save
// # 安装ejs模板引擎
// npm install ejs --save
// -----------------------------
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
// 加载路径
const path = require('path')

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), { extension: 'ejs' }))
app.use(async ctx => {
  let title = 'Koa2'
  await ctx.render('index', { title })
})
app.listen(3000)
// -----------------------------
// 运行程序并访问:
// http://localhost:3000/
