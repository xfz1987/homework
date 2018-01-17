"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//父类
var PraiseButton = function () {
	function PraiseButton(num) {
		_classCallCheck(this, PraiseButton);

		this.num = num;
	}

	_createClass(PraiseButton, [{
		key: "add",
		value: function add() {
			this.num++;
		}
	}]);

	return PraiseButton;
}();

//子类


var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(selector, _className, fn) {
		_classCallCheck(this, Thumb);

		var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

		_this.num = 0;
		_this.el = document.querySelector(selector);
		_this._className = _className;
		_this.fn = fn;
		_this._init();
		return _this;
	}

	_createClass(Thumb, [{
		key: "_init",
		value: function _init() {
			var _this2 = this;

			this.el.onclick = function () {
				_this2.add();
				var hasClass = _this2.el.classList.contains(_this2._className);
				if (_this2.num < 100) {
					!hasClass && _this2.el.classList.add(_this2._className);
				} else if (_this2.num > 100) {
					!hasClass && _this2.el.classList.add(_this2._className);
					_this2.num = 1;
				} else {
					hasClass && _this2.el.classList.remove(_this2._className);
				}
				_this2.fn && _this2.fn(_this2.num);
			};
		}
	}]);

	return Thumb;
}(PraiseButton);

exports.Thumb = Thumb;