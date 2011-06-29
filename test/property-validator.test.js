var
	validity = require('../../piton-validity'),
	assert = require('assert');

function isValue(value) {
	return value;
}

module.exports = {
	'Successful validate returns true': function() {
		var validator = new validity.PropertyValidator(isValue);
		assert.ok(validator.validate('Agree', true));
	},
	'Failed validate throws error': function() {
		var validator = new validity.PropertyValidator(isValue);
		assert.throws(
			function() {
				validator.validate('Agree', false);
			},
			/Agree is not valid/
		);
	},
	'Failed returns custom failure messasge': function() {
		var validator = new validity.PropertyValidator(isValue);
		validator.setFailureMessage('#{name} should be true');
		assert.throws(
			function() {
				validator.validate('Agree', false);
			},
			/Agree should be true/
		);
	}
};
