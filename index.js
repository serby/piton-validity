module.exports.booleanToCallback = function(fn) {
	return function(value, callback) {
		callback(fn(value));
	};
};
module.exports.createPropertyValidator = require('./lib/property-validator').createPropertyValidator;
module.exports.validators = require('./lib/validators');
module.exports.validation = require('./lib/validation');