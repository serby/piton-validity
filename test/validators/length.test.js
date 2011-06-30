var
	validators = require('../../../piton-validity').validators,
	assert = require('assert');

module.exports = {
	'length in middle of range is valid': function() {
		assert.ok(validators.isLength(5, 10, 'abcdefghi'));
	},
	'length at min passes': function() {
		assert.ok(validators.isLength(5, 10, 'abcde'));
	},
	'length at min-1 fails': function() {
		assert.ok(validators.isLength(5, 10, 'abcd'));
	},
	'length at max passes': function() {
		assert.ok(validators.isLength(5, 10, 'abcdefghi'));
	},
	'length at max+1 fails': function() {
		assert.ok(validators.isLength(5, 10, 'abcdefghij'));
	},
	'null string throws error': function() {
		assert.throws(function() {
			validators.isLength(5, 10, null);
		});
	}
};
