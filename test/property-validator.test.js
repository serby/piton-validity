var
	Validity = require('../../piton-validity'),
	assert = require('assert');

function isValue(value, callback) {
	callback(value);
}

module.exports = {
	'Successful validate returns true': function() {
		var validator = Validity.createPropertyValidator(isValue);
		validator.validate('Agree', true, assert.ok);
	},
	'Failed validate throws error': function() {
		var validator = Validity.createPropertyValidator(isValue);
		validator.validate('Agree', false, function(valid) {
			assert.eql(valid.message, 'Agree is not valid');
		});
	},
	'Failed returns custom failure messasge': function() {
		var validator = Validity.createPropertyValidator(isValue);
		validator.setFailureMessage('#{name} should be true');
		validator.validate('Agree', false, function(valid) {
			assert.eql(valid.message, 'Agree should be true');
		});
	},
	'Failed returns custom failure messasge set from constructor': function() {
		var validator = Validity.createPropertyValidator(isValue, '#{name} should be true');
		validator.validate('Agree', false, function(valid) {
			assert.eql(valid.message, 'Agree should be true');
		});
	}
};