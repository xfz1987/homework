'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexModel = require('../models/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
  index: function index() {
    return async function (ctx, next) {
      ctx.body = await ctx.render('index.html', {
        title: '大拇指点赞'
      });
    };
  },
  update: function update() {
    return async function (ctx, next) {
      ctx.body = await new _indexModel2.default().updateNum();
    };
  },
  praise: function praise() {
    return async function (ctx, next) {
      if (ctx.request.header['x-pjax']) {
        ctx.body = '<x-praise></x-praise>';
      } else {
        ctx.body = await ctx.render('index.html', {
          title: '大拇指点赞'
        });
      }
    };
  },
  star: function star() {
    return async function (ctx, next) {
      if (ctx.request.header['x-pjax']) {
        ctx.body = '<x-star></x-star>';
      } else {
        ctx.body = await ctx.render('star.html', {
          title: '星星点赞'
        });
      }
    };
  },
  advertisement: function advertisement() {
    return async function (ctx, next) {
      ctx.body = '<div style="height: 150px;background: orange;">。。。。大幅广告。。。。</div>';
    };
  },
  nofind: function nofind() {
    return async function (ctx, next) {
      ctx.body = '404 找不到网页';
    };
  }
};

exports.default = indexController;