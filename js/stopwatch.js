//var AlexsApp = {};

//constructor
function StopWatch () {
	this.minutes = 0;
	this.seconds = 0;
	this.container = $('#stopwatch');
	this.secondsContainer = $('.seconds');
	this.minutesContainer = $('.minutes');
	this.renderTime();
	this.bindEvents();
}

StopWatch.prototype.bindEvents= function() {
	$('#start').on('click', this.start.bind(this));
	$('#stop').on('click', this.stop.bind(this));
	$('#reset').on('click', this.reset.bind(this));
};

//start 
StopWatch.prototype.start = function() {
	this.increment = setInterval(this.updateTime.bind(this), 1000);
};

//Stop
StopWatch.prototype.stop = function() {
	clearInterval(this.increment);
};

//reset
StopWatch.prototype.reset = function() {
	this.seconds = 0;
	this.minutes = 0;
	this.renderTime();
};

StopWatch.prototype.updateTime = function() {

	if(this.seconds < 59) {
		this.seconds = parseInt(this.seconds + 1);
	} else {
		this.minutes = parseInt(this.minutes + 1);
		this.seconds = 0 
	}
	this.renderTime();
};

StopWatch.prototype.renderTime = function () {
	this.minutesContainer.text(this.formatDigits(this.minutes));
	this.secondsContainer.text(this.formatDigits(this.seconds));
}

StopWatch.prototype.formatDigits = function (value) {
	if(value < 10) {
		return "0" + value;
	} 

	return value;
}

AlexsApp.StopWatch = StopWatch;