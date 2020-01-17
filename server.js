var fs = require('fs');
var http = require('http');

// var server = http.createServer(function(request, response) {
// 	console.log("listening url: " + request.url);
// 	response.writeHead(200, {"Content-type": "text/plain; charset=utf8"});
// 	response.end("Hello Node! " + request.url)
// });

// var server = http.createServer(function(request, response) {
// 	console.log("listening url: " + request.url);
// 	response.writeHead(200, {"Content-type": "text/plain; charset=utf8"});
// 	var myReadShort = fs.createReadStream(__dirname + "/hamlet.txt", "utf8");
// 	myReadShort.pipe(response);
// });

// var server = http.createServer(function(request, response) {
// 	console.log("listening url: " + request.url);
// 	response.writeHead(200, {"Content-type": "text/html; charset=utf8"});
// 	var myReadShort = fs.createReadStream(__dirname + "/index.html", "utf8");
// 	myReadShort.pipe(response);
// });

// var server = http.createServer(function(request, response) {
// 	console.log("listening url: " + request.url);
// 	response.writeHead(200, {"Content-type": "application/json; charset=utf8"});
// 	var obj = {
// 		model: "Audi-100",
// 		speed: "200.5",
// 		wheels: 4,
// 	};
// 	response.end(JSON.stringify(obj));
// });

var server = http.createServer(function(req, res) {
	// В req.url находится текущий адрес страницы
	if (req.url === '/' || req.url === "/index") {
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else {
		res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000, "127.0.0.1");
console.log("listening...");
 