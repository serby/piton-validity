var
	validity = require('../../piton-validity'),
	assert = require('assert');

module.exports = {
	'Successful validate returns true': function() {
		assert.strictEqual(validity.validation.email.validate('Home Email Address', 'paul.serby@clock.co.uk'), true);
	},
	'Failed validate throws error': function() {
		assert.throws(
			function() {
				validity.validation.email.validate('Home Email Address', 'This no email address');
			},
			/Home Email Address must be a valid email address/
		);
	}
};
