var
	validators = require('../../../piton-validity').validators,
	assert = require('assert');

module.exports = {
	'Correctly validates valid email addresses': function(data) {
		[
			'paul@serby.net',
			'paul.serby@clock.co.uk',
			'test-paul@serby.net',
			'paul+serby@clock.co.uk',
			'paul\'s-house@serby.net'
		].forEach(function(value) {
			assert.ok(validators.isEmail(value), '\'' + value + '\' is a valid email and should pass');
		});
	},
	'Correctly returns false for invaild email addresses': function(data) {
		[
			'@serby.net',
			'paul.serby@clock',
			'test-paul@serby.',
			'paul.serby.clock.co.uk'
		].forEach(function(value) {
			assert.equal(validators.isEmail(value), false, '\'' + value + '\' is not a valid email and should fail');
		});
	}
};
