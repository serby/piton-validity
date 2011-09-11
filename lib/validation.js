var
	Validity = require('../../piton-validity');

module.exports = {
	email: Validity.createPropertyValidator(
		Validity.booleanToCallback(Validity.validators.isEmail),
		'#{name} must be a valid email address'),

	required: Validity.createPropertyValidator(
		Validity.booleanToCallback(Validity.validators.isRequired),
		'#{name} is required'),

	customRequired: function(failureMessage) { return Validity.createPropertyValidator(
		Validity.booleanToCallback(Validity.validators.isRequired), failureMessage); },

	ukpostcode: Validity.createPropertyValidator(Validity.booleanToCallback(
		Validity.validators.isUKPostcode),
		'#{name} must be a valid UK postcode'),

	length: function(min, max) {
		return Validity.createPropertyValidator(
			Validity.booleanToCallback(
			Validity.validators.isLength.bind(this, min, max)),
			'#{name} must be between ' + min + ' and ' + max + ' in length');
	},

	integer: Validity.createPropertyValidator(
		Validity.booleanToCallback(
		Validity.validators.isInteger),
		'#{name} must be an integer')
};