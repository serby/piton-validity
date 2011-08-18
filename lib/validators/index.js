/**
 * Make all the validators accessible in one handy place.
 *
 * This allows convenience without lowering the cohesion of the individual validators.
 */
module.exports = {
	isUKPostcode: require('./ukpostcode'),
	isEmail: require('./email'),
	isLength: require('./length'),
	isRequired: require('./required'),
	isInteger: require('./integer')
};
