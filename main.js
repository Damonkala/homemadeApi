'use strict';

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234')
  var params = req.url.split('/');
  var route = params[1];

  switch(route){
    case 'cube':
      var num = params[2];
      res.write(num + ' cubed is ' + Math.pow(num, 3) + '\n');
      res.end();
      break;
    case 'add':
      console.log('params:', params);
      var sum = parseInt(params[2]) + parseInt(params[3]);
      res.write('the sum of ' + params[2] + ' and ' + params[3] + ' is ' + sum + '\n');
      res.end();
      break;
    default:
      res.write('Unknown operation\n');
      res.end();
  }

});

server.listen(port);
console.log(`Node server listening on port ${port}`);
