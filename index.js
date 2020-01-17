var things = require('./things')
var events = require('events')

console.log("hello");
console.log(__dirname);
console.log(__filename);

setTimeout(function() {
	console.log("time!");
}, 2000);

console.log(things.mult(10, 15));