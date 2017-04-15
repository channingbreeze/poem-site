
var path = require('path');
var express = require('express');
var app = express();

var PORT = 7214;

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'jade');

// 中间件
app.use(express.static(path.join(__dirname, 'public')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT);
console.log("Server is listening on port : " + PORT);

// http://www.shicimingju.com/chaxun/ajax?callback=jsonpReturn&callback=jQuery1900536953579186525_1487048575279&kw=%E6%A0%91%E9%98%B4%E7%85%A7%E6%B0%B4%E7%88%B1%E6%99%B4%E6%9F%94&cate=all&_=1487048575305
