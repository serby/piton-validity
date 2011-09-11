var
	validity = require('../../piton-validity'),
	assert = require('assert');

module.exports = {
	'Successful validate returns true': function() {
		validity.validation.email.validate('Home Email Address', 'paul.serby@clock.co.uk', assert.ok);
	},
	'Failed validate throws error': function() {
		validity.validation.email.validate('Home Email Address', 'This is not email address', function(error) {
			assert.eql(error.message, 'Home Email Address must be a valid email address');
		});
	}
};
