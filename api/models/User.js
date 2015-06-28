/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema: 'true',
	attributes: {
		fbId: {
			type: 'string',
			unique: true
		},
		access_token: {
			type: 'string',
			required: true,
			unique: true
		},
		score: {
			type: 'integer',
			defaultsTo: 0
		},
		name: {
			type: 'string'
		}
	},

	beforeCreate: function(newlyInsertedRecord, cb) {
		FacebookService.getMyId(newlyInsertedRecord.access_token, function (data){
			newlyInsertedRecord.fbId = data.id;
			newlyInsertedRecord.name = data.name;
			cb();
		});
	},

};
