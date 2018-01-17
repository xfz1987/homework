function add(num){
	return ++num;
}

function click(num){
	var n = add(num);
	if(n <= 100){
		return n;
	}else if(n > 100){
		return 1;
	}
}