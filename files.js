var fs = require('fs');

var f = fs.readFileSync('text.txt', 'utf8');
console.log(f);

var message = 'Привет, Реакт!\nДавай дружить';

fs.writeFileSync('newtext.txt', message, 'utf8');
console.log("файл записан");
