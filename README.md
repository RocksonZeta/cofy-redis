cofy-redis
==========
[![Build Status](https://travis-ci.org/RocksonZeta/cofy-redis.svg?branch=master)](https://travis-ci.org/RocksonZeta/cofy-redis)

[redis](https://github.com/mranney/node_redis) co version.

##Installation
```
$ npm install cofy-redis --save
```
**Old methods not change.New methods invoke convention: `yield obj.$asyncMethod`**


```js
var redis = require('cofy-redis');
var redisClient = redis.createClient(6379,'localhost');
co(function*(){
	yield redisClient.$set('k1' ,'v1');
	var v = yield redisClient.$get('k1');
	v.should.equal('v1');
	yield redisClient.$del('k1');

	//extra methods:
	yield redisClient.$setJson('json' ,{name:1});
	var v = yield redisClient.$getJson('json');
	v.should.eql({name:1});
	yield redisClient.$del('json');
});

//or you can use redis in old way
redisClient.set('k2' ,"v2" , function(e){
	if(e){
		return cb(e);
	}
	redisClient.get('k2' ,function(e,v){
		if(e){
			return cb(e);
		}
		v.should.equal("v2");
		cb();
	});
});
```


###ExtraMethods:
redisClient
-----------
- **$setJson(key , object)** - Set json into redis.
- **$getJson(key)** - Get json from redis.