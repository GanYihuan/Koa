// koa 路由
// 访问http://localhost:3000/hello将看见world，访问http://localhost:3000/about将看见返回about，访问http://localhost:3000将看见Index
// -----------------------------
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  let _html = '404 NotFound';
  switch (ctx.url) {
    case '/':
      _html = '<h1>Index</h1>';
      break;
    case '/adout':
      _html = '<h1>About</h1>';
      break;
    case '/hello':
      _html = '<h1>world</h1>';
      break;
    default:
      break;
  }
  ctx.body = _html;
});
app.listen(3000);
// -----------------------------
// 运行程序并访问:
// http://localhost:3000/hello
// http://localhost:3000/about
// http://localhost:3000