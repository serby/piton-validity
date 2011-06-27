var check = require('validator').check,
_ = require('underscore');

function decamlcase(value){
	return value.substring(0,1).toUpperCase() + value.substring(1).replace(/([A-Z])/g, function($1) { return " " + $1; });
}

module.exports = {
	customRequired: function(message) {
		return function(propertyName, value) {
			if ((value == 'null') || (value === '')) {
				return message;
			}
		};
	},
	postcode: function(propertyName, value) {
		var postcodeRegEx = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
		if (!postcodeRegEx.test(value)) {
			return decamlcase(propertyName) + ' should be a valid UK Postcode';
		}
	},
	regex: function(pattern, message) {
		return function(propertyName, value) {
			if (value.match(pattern)) {
				return message;
			}
		};
	},
	required: function(propertyName, value) {
		if ((value == 'null') || (value === '')) {
			return decamlcase(propertyName) + ' is required';
		}
	},
	equals: function(expectedValue, message) {
		return function(propertyName, value) {
			if (value !== expectedValue) {
				return message ? message : (decamlcase(propertyName) + ' does not match expected \'' + expectedValue + '\'');
			}
		};
	},
	email: function(propertyName, value) {
		try {
			check(value).isEmail();
		} catch (e) {
			return decamlcase(propertyName) + ' should be a valid email address';
		}
	},
	length: function(min, max) {
		return function(propertyName, value) {
			if (value.length < min) {
				return decamlcase(propertyName) + ' must be at least ' + min + ' charaters';
			}
			if (value.length > max) {
				return decamlcase(propertyName) + ' must be at less than ' + max + ' charaters';
			}
		};
	},
	validate: function(data, rules) {
		var errors = {};
		_.each(rules, function(propertyRules, key) {
			_.each(propertyRules, function(rule) {
				if (errors[key]) {
					return false;
				}
				var error = rule(key, data[key]);
				if (error) {
					errors[key] = error;
					return true;
				}
			});
		});
		console.log(errors);
		return errors;
	}
};
