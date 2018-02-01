class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    clickAction(fn) {
        this.fn = fn;
        this.element.click(() => {
            throttle(() => {
                if (this.num < 10) {
                    this.element.css('-webkit-filter', 'grayscale(0)');
                    $('#animation').addClass('num');
                    this.num = add(this.num);
                    setTimeout(function() {
                        $('#animation').removeClass('num');
                    }, 1000);
                }else{
                    this.element.css('-webkit-filter', 'grayscale(1)');
                    this.num = 0;
                }
                fn && fn(this.num);
            });
        })
    }
    clickCallback() {
        if (this.num < 10) {
            this.element.css('-webkit-filter', 'grayscale(0)');
            $('#animation').addClass('num');
            this.num = add(this.num);
            setTimeout(function() {
                $('#animation').removeClass('num');
            }, 1000);
        }else{
            this.element.css('-webkit-filter', 'grayscale(1)');
            this.num = 0;
        }
        this.fn && this.fn(this.num);
    }
}

class Thumb extends PraiseButton{
	constructor(num,element){
		super(num,element);
	}
}

export {Thumb};