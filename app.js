var http = require('http');
var usd = require('./modules/usd');
var random = require('./modules/random');
var combine = require('./modules/combine');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write( combine.balance + combine.randomDollar);
  res.end();

}).listen(5000);

console.log('listening on port 5000');
