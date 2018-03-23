webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Thumb();

var t = '';

var _content = '\n  <div class="hand" id="thumb">\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger"></div>\n    <div class="finger thumb"></div>\n    <div class="arm"></div>\n  </div>\n  <span class="hide" id="animation">+1</span>';

xtag.register('x-praise', {
  content: _content,
  methods: {
    praise: function praise() {
      var _this = this;
      f.clickAction(); //向后台请求
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == 'thumb') {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function () {
          _this.praise();
        }, 300);
      }
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var f = new _index.Star();

var m = '';

var _content = '\n  <div class="star" id="star">\n    <div class="star1"></div>\n  </div>\n  <span class="hide" id="animation">+1</span>';

xtag.register('x-star', {
  content: _content,
  methods: {
    praise: function praise() {
      var _this = this;
      f.clickAction(); //向后台请求
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == 'star') {
        if (m) {
          clearTimeout(m);
        }
        m = setTimeout(function () {
          _this.praise();
        }, 300);
      }
    }
  }
});

/***/ })
],[4]);