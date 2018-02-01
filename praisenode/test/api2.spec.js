const request = require('supertest');

describe('接口服务测试', function(){
    var num;
    it('获取点赞数', function(done) {
      	request('http://localhost:3000')
  			.get('/queryPraise')
  			.expect('Content-Type', /json/)
  			.expect(200)
  			.end(function(err, res){
          if(res.body.status){
            num = res.body.total;
            done();
          }else{
            done(new Error('【失败】获取点赞数!'));
          }
        });
    });

    it('更新点赞数测试', function(done) {
        request('http://localhost:3000')
        .post('/updatePraise')
        .set('Content-Type', 'application/json;charset=utf-8')
        .send({count: num})
        .expect('Content-Type', /json/)
        .then(res => {
          if(res.body.status){
            done();
          }else{
            done(new Error('【失败】更新点赞数'))
          }
        }, err => {
          done(err);
        });
    });
});