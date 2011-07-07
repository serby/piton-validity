var
	validity = require('../../piton-validity');

module.exports.email = new validity.PropertyValidator(validity.validators.isEmail, '#{name} must be a valid email address');
module.exports.required = new validity.PropertyValidator(validity.validators.isRequired, '#{name} is required');
module.exports.ukpostcode = new validity.PropertyValidator(validity.validators.isUKPostcode, '#{name} must be a valid UK postcode');
module.exports.length = function(min, max) {
	return new validity.PropertyValidator(validity.validators.isLength.bind(this, min, max), '#{name} must be between ' + min + ' and ' + max + ' in length');
};
