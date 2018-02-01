const rp = require('request-promise');

const baseOpts = {
	uri: 'http://127.0.0.1/praise_php/api.php',
    headers: {'User-Agent': 'Request-Promise'},
    json: true
};

const query = () => {
	return new Promise((resolve, reject) => {
		const opt = Object.assign({}, baseOpts, {
			qs: {action:'queryPraise'},
			method: 'get'
		});
		rp(opt)
			.then(function (res){
        		resolve(res);
    		})
    		.catch(function (err){
        		resolve(err);
    		});
	});
};

const update = (total) => {
	return new Promise((resolve, reject) => {
		const opt = Object.assign({}, baseOpts, {
			qs: {action:'updatePraise',total},
			method: 'post'
		});
		rp(opt)
			.then(function (res){
        		resolve(res);
    		})
    		.catch(function (err){
        		reject(err);
    		});
	});
};

module.exports = {
	query,
	update
};