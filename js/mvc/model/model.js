

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

MyModel.prototype.incrementSeconds = function (increment) {
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





/*var Model = Cranium.Model = function (attributes) {
  this.id = _.uniqueId('model');
  this.attributes = attributes || {};    
};

Cranium.Model.prototype.get = function(attr) {
  return this.attributes[attr];
};

Cranium.Model.prototype.set = function(attrs){
  if (_.isObject(attrs)) {
    _.extend(this.attributes, attrs);
    this.change(attrs);
  }
  return this;
};

Cranium.Model.prototype.toJSON = function(options) {
  return _.clone(this.attributes);
};

Cranium.Model.prototype.change = function(attrs){
  this.trigger(this.id + 'update', attrs);
}; 

_.extend(Cranium.Model.prototype, Cranium.Events); */