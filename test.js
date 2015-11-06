'use strict';
//
// var request = require('request');
// request('http://swapi.co/api/people/', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
// 		var people = JSON.parse(body);
// 		console.log(people)
// 		// console.log(person.name);
// 		// console.log(person.films);
//   }
// })
var _ = require('lodash');

var names = ['yan', 'missy', 'ray', 'ammar', 'anjali', 'alicia']

var teams = _.chunk(_.shuffle(names), 2);

console.log(teams);
