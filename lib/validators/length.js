/**
 * Validates a string is not too short or too long.
 *
 * @param {String} value Postcode to validate
 * @return {Boolean} True if value is a valid format for a UK Postcode
 */
module.exports = function(max, min, value) {
	return (value.length < min) || (value.length > max);
};
