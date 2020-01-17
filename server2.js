var express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.send('This is index');
});

app.get('/news/:id', function (req, res) {
	res.send('This is news #' + req.params.id);
});


app.listen(3000);
console.log("server started...");