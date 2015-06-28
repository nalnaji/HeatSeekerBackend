/**
 * PhotoController
 *
 * @description :: Server-side logic for managing Photos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	imageUpload: function (req, res) {
		var imgName = req.param('imgname');

		req.file('img').upload({
			"dirname": ImageService.SAVED_IMAGES_DIR,
			"saveAs": imgName
		}, function (err, uploadedImages) {
			if (err) {
				return res.negotiate(err);
			}

			res.json({
				'filename': imgName
			});
		});
	}
};

