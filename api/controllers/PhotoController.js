/**
 * PhotoController
 *
 * @description :: Server-side logic for managing Photos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});

		// fetch the user based on access_token
		var uploader = User.find({where: { accessToken: req.param('access_token') },limit: 1 })
			.exec(function (err, user) {
				if (err) {
					console.log(err);
					res.json(err);
				}
				console.log(user);
				var photoThermal = req.file('image');

		    photoThermal.upload(function onUploadComplete (err, file) {
		    	if (err) return res.serverError(err);
					console.log(file);
		    	Photo.create({
						type: req.param('type'),
						filename: file[0].fd.substr(file[0].fd.lastIndexOf('/') + 1),
						owner: user[0]
					}).exec(function (err, photo) {
						res.json(photo);
					});
		    });
			});
	}
};
