import index from './indexController';

//路由
const controllerInit = {
	init(app, router){
		app.use(router(_ => {
			_.get('/index/index', index.index());
			_.post('/updatePraise', index.update());
		}));
	}
};

export default controllerInit;