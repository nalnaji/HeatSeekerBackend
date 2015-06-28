/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	"attributes": {
		"fbId": {
			"type": "string",
			'required': true
		},
		'score': {
			'type': 'integer',
			'required': false
		}
	},

	'beforeCreate': function (values, cb) {
		values.score = 0;
		cb();
	}
};

