
exports.getUserFromFBId = function (fbId, cb) {
	User
	.find({where: {fbId: fbId}})
	.exec(function (err, user) {
		if (err) {
			return cb(err);
		}

		if (user.length === 0) {
			return cb("No user with given Facebook UID");
		} else {
			cb(null, user[0]);
		}

	});
};

exports.getUserFromToken = function (token, cb) {
	User
	.find({where: {access_token: token}})
	.exec(function (err, user) {
		if (err) {
			return cb(err);
		}

		if (user.length === 0) {
			FacebookService.getMyId(token, function (data) {
				User.find({where: {fbId: data.id}}).exec(function (err, user2) {
					if (err) {
						return cb(err);
					}
					// update the old record
					user2[0].access_token = token;
					user2[0].save(function(error) {
			        if(error) {
		            // do something with the error.
								return cb(err);
			        } else {
		            // value saved!
								return cb(null, user2[0]);
			        }
			    });
				});
			});
		} else {
			return cb(null, user[0]);
		}
	});
};
