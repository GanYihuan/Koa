const Koa = require('koa');
const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});
// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.listen(3000);
// -----------------------------
// 运行程序并访问:
// http://localhost:3000/
// 上面的执行顺序就是：
// 请求 ==> x-response-time中间件 ==> logger中间件 ==> 响应中间件 ==> logger中间件 ==> response-time中间件 ==> 响应。
// 通过这个顺序我们可以发现这是个栈结构以"先进后出"（first-in-last-out）的顺序执行。
// Koa已经有了很多好用的中间件
// https://github.com/koajs/koa/wiki#middleware