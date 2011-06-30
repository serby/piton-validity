/**
 * Validates a UK Postcode
 *
 * @param {String} value Postcode to validate
 * @return {Boolean} True if value is a valid format for a UK Postcode
 */
module.exports = function(value) {
	var postcodeRegEx = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
	return postcodeRegEx.test(value);
};
