var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/news/:id', function (req, res) {
	var obj = {
		title: "Новость",
		paragraphs: ["first", "second", "third"],
	};
	res.render('news', {newsId: req.params.id, obj: obj,});
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.post('/about', urlencodedParser, function (req, res) {
  if (!req.body) {
  	return res.sendStatus(400);
  }
  console.log(req.body);
  res.render('about');
})

app.listen(3000);
console.log("server started...");