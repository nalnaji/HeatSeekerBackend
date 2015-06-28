/**
* Photo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	attributes: {
		type: {
			type: 'string',
			required: true
		},

		filename: {
			type: 'string',
			required: true
		},

		owner: {
			model: 'user'
		}
	},

	// beforeValidate: function (values, cb) {
	// 	values.extension = values.extension || '.jpg';
	//
	// 	values.extension = _.startsWith(values.extension) ? values.extension : '.' + values.extension;
	//
	// 	// Generate unique filenames for the photo
	// 	values.heatImgFilename   = PhotoService.generateHeatImageFilename(values);
	// 	values.normalImgFilename = PhotoService.generateNormalImageFilename(values);
	//
	// 	cb();
	// }
};
