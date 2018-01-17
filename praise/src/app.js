//父类
class PraiseButton {
	constructor(num){
		this.num = num;
	}
	add(){
		this.num++;
	}
}

//子类
class Thumb extends PraiseButton {
	constructor(selector, _className, fn){
		super();
		this.num = 0;
		this.el = document.querySelector(selector);
		this._className = _className;
		this.fn = fn;
		this._init();
	}
	_init(){
		this.el.onclick = () => {
			this.add();
			let hasClass = this.el.classList.contains(this._className);
			if(this.num < 100){
				!hasClass && this.el.classList.add(this._className);
			}else if(this.num > 100){
				!hasClass && this.el.classList.add(this._className);
				this.num = 1;
			}else{
				hasClass && this.el.classList.remove(this._className) 
			}
			this.fn && this.fn(this.num);
		};
	}
}

export {Thumb};