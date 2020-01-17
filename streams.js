var fs = require('fs');

var reader = fs.createReadStream(__dirname + '/hamlet.txt', 'utf-8');
var writer = fs.createWriteStream(__dirname + '/hamlet_new.txt');

reader.on("data", function (chunk) {
	console.log("порция данных получена");
	//console.log(chunk);
	writer.write(chunk);
});

