import index from './indexController';

//路由
const controllerInit = {
	init(app, router){
		app.use(router(_ => {
			_.get('/index/index', index.index());
			_.post('/updatePraise', index.update());
			_.get('/index/praise', index.praise());
			_.get('/index/star', index.star());
			_.get('/index/adv', index.advertisement());
		}));
	}
};

export default controllerInit;