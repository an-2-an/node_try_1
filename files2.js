var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data) {
	console.log(data);
	fs.writeFile('async.txt', data, 'utf8', function(err, data) {
		console.log("файл записан");
	});
});

console.log("We started");
