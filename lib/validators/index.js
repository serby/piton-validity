/**
 * Make all the validators accessible in one handy place.
 *
 * This allows convenience without lowering the cohesion of the individual validators.
 */
module.exports.isUKPostcode = require('./ukpostcode');
module.exports.isEmail = require('./email');
module.exports.isLength = require('./length');
