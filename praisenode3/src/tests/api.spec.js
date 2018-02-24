const request = require('supertest');
const app = require('../app-es.js');
const server = app.default.listen();

describe('接口服务测试', function(){
    it('点赞加一', function(done) {
        request(server)
        .post('/updatePraise')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(res.body.data == 1){
            done();
          }else{
            done(new Error('【失败】点赞加一'));
          }
        })
    });
});