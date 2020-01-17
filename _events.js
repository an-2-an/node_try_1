var events = require('events');

my_emit = new events.EventEmitter();

my_emit.on("my_event", function(msg) {
	console.log("Message:", msg);
});

my_emit.emit("my_event", "Обработчик событий сработал");
