import rp from 'request-promise';

class indexModel {
	constructor(ctx){
		this.ctx = ctx;
	}
	updateNum(){
		const option = {
			uri: 'http://localhost/praise.php',
    		headers: {'User-Agent': 'Request-Promise'},
    		method: 'POST'
		};
		return new Promise((resolve, reject) => {
			rp(option)
			.then(function(res){
				const info = JSON.parse(res);
        		info ? resolve({data: info.result}) : reject({});
    		})
    		.catch(function(err){
        		reject(err);
    		});
		});
	}
}

export default indexModel;
