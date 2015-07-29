var EventTarget = require('../../utility/eventTarget.js');

//constructor, load in attributes
function MyModel (attributes) {
	EventTarget.call(this);
	this.attributes = attributes || {}
}

MyModel.prototype = new EventTarget();

MyModel.prototype.get = function (attr) {
	return this.attributes[attr];
}

//what happens if we try to set without that attribute being there!?
MyModel.prototype.set = function (attr, value) {
	value = this.validate(attr, value);
	this.attributes[attr] = value;
	this.changeEvent(attr);
}

MyModel.prototype.changeEvent = function (attr) {
	this.fire(attr + 'Change');
}

MyModel.prototype.validate = function () {
	//empty by default
}

module.exports = MyModel