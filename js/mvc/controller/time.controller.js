var TimeModel = require('../model/time.model');
var TimeView = require('../view/time.view');

TimeController = function () {

	this.model = new TimeModel({
		'seconds': 0,
		'minutes': 0
	})

	this.view = new TimeView(this.model);

	this.bindEvents();
}

TimeController.prototype.bindEvents = function () {
	this.view.addListener('startBtnClick', this.start.bind(this));
	this.view.addListener('stopBtnClick', this.stop.bind(this));
	this.view.addListener('resetBtnClick', this.reset.bind(this));
}

TimeController.prototype.start = function (e) {
	if(!this.increment) {
		this.increment = setInterval(this.updateTime.bind(this), 1000);
	}
}

TimeController.prototype.stop = function (e) {
	console.log("**** stopped ****");
	clearInterval(this.increment);
}

TimeController.prototype.reset = function (e) {
	console.log('reset');
	this.model.set('seconds', 0);
	this.model.set('minutes', 0);
}

TimeController.prototype.updateTime = function() {
	this.model.incrementSeconds(1);
	console.log(this.model.get('seconds'));
};

module.exports = TimeController;