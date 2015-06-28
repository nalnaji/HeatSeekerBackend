/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getFriends: function (req, res) {
		// var userId = Number(req.param('id'));
		var accessToken = req.query.access_token;

		if (_.isUndefined(accessToken)) {
			return res.badRequest('Didnt receive access token as query param. must be "access_token=..."');
		}

		FacebookService.getUserFriends(accessToken, function (err, friends) {
			if (err) {
				return res.negotiate(err);
			}

			res.json(friends);

			// async.map(friendsFBIDs, UserService.getUserFromFBId, function (err, userFriends) {
			// 	if (err) {
			// 		return res.negotiate(err);
			// 	}
			//
			// 	res.json(userFriends);
			// });
		});
	}

};
