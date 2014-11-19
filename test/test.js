'use strict';
var co = require('co');
var redis = require('../');
var redisClient = redis.createClient(6379,'localhost');
describe("cofy-redis", function(){
	it("#$set $get" , function(done){
		co(function*(){
			yield redisClient.$set('k1' ,'v1');
			var v = yield redisClient.$get('k1');
			v.should.equal('v1');
			yield redisClient.$del('k1');
			done();
		});
	});
	it("#$setJson $getJson" , function(done){
		co(function*(){
			yield redisClient.$setJson('json' ,{name:1});
			var v = yield redisClient.$getJson('json');
			v.should.eql({name:1});
			yield redisClient.$del('json');
			done();
		});
	});
	it('#set get' , function(done) {
		redisClient.set('k2' ,"v2" , function(e){
			if(e){
				return done(e);
			}
			redisClient.get('k2' ,function(e,v){
				if(e){
					return done(e);
				}
				v.should.equal("v2");
				done();
			});
		});
	});
});