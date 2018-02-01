const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const serve = require('koa-static');
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const co = require('co');
const bodyParser = require('koa-bodyparser');
const praise = require('./models/praise.js');

//配置swig
app.context.render = co.wrap(render({
  	root: path.join(__dirname, '/views'),
  	autoescape: true,
  	cache: 'memory', // disable, set to false 
  	ext: 'html',
  	writeBody: false
}));

//配置静态文件目录
app.use(convert(serve(path.join(__dirname, '/public'))));
app.use(bodyParser());

//配置路由
app.use(router(_ => {
  _.get('/index/index', async (ctx, next) => {
  	ctx.body = await ctx.render('index', {title: '点赞'});
  });
  _.get('/queryPraise', async (ctx, next) => {
    ctx.body = await praise.query();
  });
  _.post('/updatePraise', async (ctx, next) => {
    let count = ctx.request.body.count;
    ctx.body = await praise.update(count);
  });
}));

app.listen(3000);

module.exports=app;