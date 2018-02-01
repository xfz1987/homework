window.add = function(num){
	return ++num;
}


/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
  var throttle = function(fn, delay, atleast){
    var timer = null,prev = null;
    return function(){
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
  // window.onresize = throttle(testFn, 200, 1000);
  