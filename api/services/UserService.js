
exports.getUserFromFBId = function (fbId, cb) {
	User
	.findOne({fbId: fbId})
	.exec(function (err, user) {
		if (err) {
			return cb(err);
		}

		if (_.isArray(user)) {
			if (user.length === 0) {
				return res.badRequest("No user with given Facebook UID");
			}
			user = user[0];
		}

		cb(null, user);
	});
};