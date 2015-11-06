'use strict';

var md5 = require('md5');

var _ = require('lodash');

var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res){
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234')
	var params = req.url.split('/');
	var route = params[1];
	var nums = params
	switch(route){
    case 'gravatar':
    	res.write(`https://en.gravatar.com/site/check/${md5(params[2])} \n`);
			res.end();
      break;
		case 'sentence':
			var sentence = params[2].replace(/%/g, ' ');
		console.log(superCounter(sentence));
			break;
			case 'cube':
	      var num = params[2];
	      res.write(num + ' cubed is ' + Math.pow(num, 3) + '\n');
	      res.end();
	      break;
			case 'square':
	      var num = params[2];
	      res.write(num + ' squared is ' + Math.pow(num, 2) + '\n');
	      res.end();
	      break;
			case 'sum':
				var nums = params.slice(2);
				var sum = _.sum(nums);
				res.write(`the sum is ${sum} \n`)
		      res.end();
		      break;
		default:
			console.log("WHYYYYYYYYY")
	res.end();
}
});
	server.listen(port);
	console.log(`Node server listening on port ${port}`);


	function superCounter(text) {
	  var  length = text.length;
	  var  regex = /\s+/gi;
	  var  wordCount = text.trim().replace(regex, ' ').split(' ').length;
	  var  spaceCount = text.split(" ").length - 1;
	  var  count = ("characters: " + length + ", " + "words: " + wordCount + ", " + "spaces: " + spaceCount + ", ")
	    return count
}
