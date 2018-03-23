function _$(id){
	return document.getElementById(id);
}

var container = _$('container'),
	box = _$('box'),
	arr = box.getElementsByTagName('div'),
	audio = _$('audio'),
	radius = calculateRadius(129, 20);

/**
 * 计算半径
 * @param  length 每张图片的宽度
 * @param  count  一共多少张图
 * @return 半径长度
 */
function calculateRadius(width, count){
	//r = 每张图片的宽度/2 / tran(每一份的度数/2)； 每一份的度数 = 360/数量 = 360/20 = 18
	//Math.PI = 180
	//为什么要减3，因为合成圆时，会有两个边需要合并 -2，合并后还是存在一条1px的边，因此，把这条边减去 -1
	return Math.round(width / (2 * Math.tan(Math.PI / count))); 
}

//将图片布局
for(var i = 0; i < arr.length; i++) {
	arr[i].style.background = 'url("./img/p' + (i + 1) + '.png") no-repeat';
	arr[i].style.WebkitTransform = "rotateY(" + 360 / arr.length * i + 'deg) translatez(' + radius + 'px)';
}

$('#laba').on('tap',function(){
    if(audio.paused){
    	audio.play();
    	$(this).text('⏸');
    }else{
    	audio.pause();
    	$(this).text('🎺');
    }
});

$('#laba').trigger('tap');

var startX = 0,//鼠标开始按时的X位置
	endX = 0,//鼠标松开时的X位置
	x = 0,//移动的距离
	flag = true,//用于区分touch触发旋转还是手机自己通过陀螺仪旋转
	touching = false;

$('#box').on('touchstart', function(event) {
	event.preventDefault();
	var touch = event.targetTouches[0];
	startX = touch.pageX - x;
	touching = true;
});
$('#box').on('touchmove', function(event) {
	if(flag && touching){
		event.preventDefault();
		var touch = event.targetTouches[0];
		endX = touch.pageX;
		x = endX - startX;
		//x移动了多少，就绕y轴旋转多少度
		box.style.transform = 'rotateY(' + x + 'deg)';
	}
});
$('#box').on('touchend', function(event) {
	touching = false;
});

//监听罗盘仪 - 旋转角度，用于手机自己绕y轴运动时，改变旋转角度
window.addEventListener('deviceorientation', function(event) {
	var gamma = event.gamma;
	if (Math.abs(gamma) > 1) {
		flag = false;
		box.style.transform = 'rotateY(' + gamma * 3 + 'deg)';//乘3，主要是想快点
	} else {
		flag = true;
	}
});