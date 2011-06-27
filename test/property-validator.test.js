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
		assert.ok(validator.validate('Agree', false));
	},
};
