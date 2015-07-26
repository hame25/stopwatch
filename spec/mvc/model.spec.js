describe('Model', function () {

	var MyModel = require('../../js/mvc/model/model');

	var TestModel;
	var attributeObject = {'firstAttribute': 'firstValue', 'secondAttribute': 2};

	//spyOn(EventTarget, 'call');

	describe('Creating a new model', function () {

		beforeEach(function () {
			TestModel = new MyModel(attributeObject);
		})

		it('sets the correct model attributes', function () {
			expect(TestModel.attributes).toEqual(attributeObject);
		})

	});
})