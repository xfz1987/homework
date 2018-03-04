'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _initController = require('./controllers/initController');

var _initController2 = _interopRequireDefault(_initController);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import bodyParser from 'koa-bodyparser';
// app.use(bodyParser());

var app = new _koa2.default();

//路由初始化
_initController2.default.init(app, _koaSimpleRouter2.default);

//配置swig
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.get('viewDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html'
}));

//配置静态文件目录
app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));

//启动服务
app.listen(_config2.default.get('port'), function () {
  console.log('server is running...');
});

exports.default = app;