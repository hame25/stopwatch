describe('Model', function () {

	var MyModel = require('../../js/mvc/model/model');

	var TestModel;
	var attributeObject = {'firstAttribute': 'firstValue', 'secondAttribute': 2};
	var updatedAttributeValue = 'My updated attribute'

	//spyOn(EventTarget, 'call');

	describe('Creating a new model', function () {

		beforeEach(function () {
			TestModel = new MyModel(attributeObject);
			spyOn(TestModel, 'fire')
		});

		it('sets the correct model attributes', function () {
			expect(TestModel.attributes).toEqual(attributeObject);
		});

		describe('Getting a the value of a defined model attribute', function () {
			
			it('Gets the correct attribute value', function () {
				expect(TestModel.get('firstAttribute')).toBe(attributeObject.firstAttribute);
				expect(TestModel.get('secondAttribute')).toBe(attributeObject.secondAttribute);
			});
		});

		describe('Setting a value for a defined model attribute', function () {

			beforeEach(function () {
				TestModel.set('firstAttribute', updatedAttributeValue);
			})

			it('Sets the correct attribute value', function () {

				expect(TestModel.attributes['firstAttribute']).toBe(updatedAttributeValue);
			});

			it('fires the correct custom event', function () {
				expect(TestModel.fire).toHaveBeenCalledWith('firstAttributeChange');
			});
		});

	});
})