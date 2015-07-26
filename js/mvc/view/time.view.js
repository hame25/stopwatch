var EventTarget = require('../../utility/EventTarget')


function TimeView (model) {
	EventTarget.call(this);
	this.model = model;
	this.startBtn = $('#start');
	this.stopBtn = $('#stop');
	this.resetBtn = $('#reset');
	this.secondsContainer = $('.seconds');
	this.minutesContainer = $('.minutes');
	this.bindEvents()
	this.render();
}

TimeView.prototype = new EventTarget();

TimeView.prototype.bindEvents = function () {
	this.startBtn.on('click', this.startBtnClick.bind(this));
	this.stopBtn.on('click', this.stopBtnClick.bind(this));
	this.resetBtn.on('click', this.resetBtnClick.bind(this));	

	this.model.addListener('secondsChange', this.render.bind(this));
	this.model.addListener('minutesChange', this.render.bind(this));
}

TimeView.prototype.startBtnClick = function () {
	this.fire('startBtnClick')
}

TimeView.prototype.stopBtnClick = function () {
	this.fire('stopBtnClick')
}

TimeView.prototype.resetBtnClick = function () {
	this.fire('resetBtnClick')
}

TimeView.prototype.render = function () {
	this.secondsContainer.text(this.formatDigits(this.model.get('seconds')));
	this.minutesContainer.text(this.formatDigits(this.model.get('minutes')));
}

TimeView.prototype.formatDigits = function (value) {
	if(value < 10) {
		return "0" + value;
	} 

	return value;
}

module.exports = TimeView;