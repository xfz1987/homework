const router = require('koa-simple-router');
const praise = require('../models/praise.js');

router(_ => {
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
});

module.exports = router;