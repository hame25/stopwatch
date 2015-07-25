

//constructor, load in attributes
function MyModel (attributes) {
	AlexsApp.EventTarget.call(this);
	this.attributes = attributes || {}
}

MyModel.prototype = new AlexsApp.EventTarget();

MyModel.prototype.get = function (attr) {
	return this.attributes[attr];
}

MyModel.prototype.set = function (attr, value) {
	this.attributes[attr] = value;
	this.changeEvent(attr);
}

MyModel.prototype.changeEvent = function (attr) {
	this.fire(attr + 'Change');
}