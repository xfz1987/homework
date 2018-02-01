const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder().forBrowser('firefox').build();

driver.get('http://localhost:3000/index/index');
driver.wait(test(), 1000);
function test(){
	return driver.findElement(By.id('thumb')).click();
}
driver.quit();//测试完一定要关闭