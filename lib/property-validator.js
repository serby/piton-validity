/*!
 * Paul Serby <paul.serby@clock.co.uk>
 *
 * New BSD Licensed
 *
 * Sunday 26 June 2011
 */

/**
 * Builds custom validation message by taking a validator and a failure message.
 * The values can be passed for evaluation, if the validator fails the failure
 * message is returned, often with the property name injected into the message.
 * This allows one PropertyValidator to validate multiple properties giving the
 * same failure message for each but with the correct property name in the error.
 *
 * This is mainly of use as part of form validation. A typical use-case would be
 * to create one PropertyValidator with a Postcode validator that is used for both
 * delivery and billing postcode.
 *
 * @param {Function} validator Validation function take a value to validate and returns a boolean
 */
var PropertyValidator = module.exports.PropertyValidator = function(validator, message) {
	if (typeof validator !== 'function') {
		throw new TypeError('validator should be a function not a ' + typeof validator);
	}
	this.failureMessage = message;
	this.validator = validator;
};

/**
 * Validate the given value on failure returns the failure message replacing #{name} with the property name.
 *
 * @param {String} propertyName Used for error reporting.
 * @param {Mixed} value The value to validate
 */
PropertyValidator.prototype.validate = function(propertyName, value) {
	if (!this.validator(value)) {
		var message = this.failureMessage || '#{name} is not valid';
		throw new Error(message.replace(/#\{name\}/g, propertyName, message));
	}
	return true;
};

/**
 * Set a custom failure message
 *
 * @param {String} message The custom failure message
 */
PropertyValidator.prototype.setFailureMessage = function(message) {
	this.failureMessage = message;
	return this;
};
