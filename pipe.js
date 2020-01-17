var fs = require('fs');

var reader = fs.createReadStream(__dirname + '/hamlet_new.txt', 'utf-8');
var writer = fs.createWriteStream(__dirname + '/hamlet_pipe.txt');


reader.pipe(writer);
