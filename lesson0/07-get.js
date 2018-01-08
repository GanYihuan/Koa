
// 请求数据获取
// 在koa中，获取GET请求数据源头是koa中request对象中的query方法或querystring方法，
// query返回是格式化好的参数对象，querystring返回的是请求字符串。
// 请求对象ctx.query(或ctx.request.query)，返回如 { a:1, b:2 }
// 请求字符串 ctx.querystring(或ctx.request.querystring)，返回如 a=1&b=2
// Get请求数据获取
// -----------------------------
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  const url = ctx.url;
  const query = ctx.query;
  const querystring = ctx.quer;
  ctx.body = {url, query, querystring}
});
app.listen(3000);
// -----------------------------
// 更多Koa Request API 请查看
// http://koajs.com/#request
// 运行程序并访问:
// http://localhost:3000/?page=2&limit=10