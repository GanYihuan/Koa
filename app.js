const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
    let html = 'get';
    ctx.body = html;
  } else if(ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = ctx.request.body;
  } else {
    ctx.body = '404';
  }
});
app.listen(3000);
