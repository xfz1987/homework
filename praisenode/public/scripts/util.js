window.add = function(num){
	return ++num;
}

//函数组合
window.compose = function(f, g){
  return function(x){
    return f(g(x));
  }
}

/**
 * 函数节流方法
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
window.createThrottleFn = function(delay, atleast){
  var timer = null,prev = null;
  return function(fn){
    var now = new Date();
    if(!prev) prev = now;
    if(atleast && now - prev > atleast){
      fn();
      prev = now;
      clearTimeout(timer);
    }else{
      clearTimeout(timer);
      timer = setTimeout(function(){
        fn();
        prev = null;
      }, delay);
    }
  }
};

//延迟多长时间, 至少多长时间触发一次
window.throttle = createThrottleFn(800, 1000);
  