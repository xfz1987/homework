import Koa from 'koa';
import router from 'koa-simple-router';
import serve from 'koa-static';
import path from 'path';
import render from 'koa-swig';
import co from 'co';

import controllerInit from './controllers/initController';
import Config from './config/config';

// import bodyParser from 'koa-bodyparser';
// app.use(bodyParser());

const app = new Koa();

//路由初始化
controllerInit.init(app, router);

//配置swig
app.context.render = co.wrap(render({
  	root: Config.get('viewDir'),
  	autoescape: true,
  	cache: 'memory', // disable, set to false 
  	ext: 'html'
}));

//配置静态文件目录
app.use(serve(Config.get('staticDir')));

//启动服务
app.listen(Config.get('port'), ()=>{
	console.log('server is running by port: ' + Config.get('port'));
});

export default app;