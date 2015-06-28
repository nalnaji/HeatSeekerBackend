/**
* Photo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	'attributes': {
		'from': {
			'type': 'integer', // user id
			'required': true
		},

		'to': {
			'type': 'array', // user ids for friends that the photo is sent to.
			'required': true
		},

		'temperature': {
			'type': 'integer',
			'required': true
		},

		'heatImgFilename': {
			'type': 'string',
			'required': true
		},

		'normalImgFilename': {
			'type': 'string',
			'required': true
		},

		'extension': {
			'type': 'string',
			'required': true
		}
	},

	'beforeValidate': function (values, cb) {
		values.extension = values.extension || '.jpg';

		values.extension = _.startsWith(values.extension) ? values.extension : '.' + values.extension;

		// Generate unique filenames for the photo
		values.heatImgFilename   = PhotoService.generateHeatImageFilename(values);
		values.normalImgFilename = PhotoService.generateNormalImageFilename(values);

		cb();	
	}
};

