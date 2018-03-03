// ===================================================
// Base Setup
// ===================================================
var express = require('express');
var http = require('http');


// ===================================================
// Routes For Our API
// ===================================================
// get an instance of the express Router
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Forwarding request:', req.originalUrl);
    // make sure we go to the next routes and don't stop here
    next();
});

// routes
router.get('/', function (req, res) {
    // 拦截所以movie子域下的请求，获取真正的请求地址
    var path = req.originalUrl.replace('/movie/', '');
    _fn.getData(path, function (data) {
        // 返回从豆瓣请求的数据
        res.send(data)
    });
});

_fn = {
    getData: function (path, callback) {
        // 向豆瓣发起请求
        http.get({
            hostname: 'api.douban.com',
            path: '/v2/movie/' + path
        }, function (res) {
            var body = []
            //监听chunk包
            res.on('data', function (chunk) {
                body.push(chunk);
            });
            // 回调函数
            res.on('end', function () {
                // 将buffer转化为string，并回调
                body = Buffer.concat(body);
                callback( body.toString());
            });
        });
    }
}

module.exports = router;