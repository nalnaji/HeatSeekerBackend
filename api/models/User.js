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
		accessToken: {
			type: 'string',
			required: true,
			unique: true
		},
		score: {
			type: 'integer',
			defaultsTo: 0
		}
	},

	beforeCreate: function(newlyInsertedRecord, cb) {
		FacebookService.getMyId(newlyInsertedRecord.accessToken, function (id){
			console.log('myID:', id);
			newlyInsertedRecord.fbId = id;
			cb();
		});
	},

};
