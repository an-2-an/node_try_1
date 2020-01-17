var events = require('events');
var util = require('util');

var Car = function(model) {
	this.model = model;
}

util.inherits(Car, events.EventEmitter);

var bmw = new Car("BMW");
var audi = new Car("Audi");

var cars = [bmw, audi];

cars.forEach(function(car) {
	console.log(car.model);
	car.on("speed", function(speed) {
		console.log("Car", car.model, "speed =", speed);
	})
});

bmw.emit("speed", 200);
