
function TimeModel (attrs) {
	MyModel.call(this, attrs);
}

TimeModel.prototype = new MyModel();

TimeModel.prototype.incrementSeconds = function (increment) {
	var seconds = this.get('seconds');

	if(increment === 0) {
		this.set('seconds', 0);
		return;
	}

	if(seconds < 59) {
		this.set('seconds', parseInt(seconds + increment))
	} else {
		this.set('seconds', 0);
		this.set('minutes', parseInt(this.get('minutes') + 1));
	}

}