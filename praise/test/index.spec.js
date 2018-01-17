describe('测试点赞宫功能', function(){
	var num;
	beforeAll(function(){
		num = 0;
	});
    it('点赞加1测试', function() {
    	expect(click(num)).toBe(1);
    	num++;
    	expect(click(num)).toBe(2);
    	num++;
    });

    it("点赞加1测试,当大于100时", function() {
    	expect(click(100)).toBe(1);
    	expect(click(100)).toBe(101);
  	});
});