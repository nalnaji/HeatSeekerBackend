var FB = require('facebook-node');

var FB_CONFIGS = require('/Users/sourabhdesai/Documents/Node Projects/HeatSeakerBackend/assets/json/fb_configs.json');

FB.setAccessToken(FB_CONFIGS.access_token);

exports.getUserFriends = function (userId, accessToken, cb) {
	console.log();

	FB.setAccessToken(accessToken);

	FB.api('fql', { q: 'SELECT uid2 from friend where uid1=me()' }, function (res) {
		if (!res || res.error) {
			var err = res.error || new Error("Didn't receive FQL response for friends query for accessToken " + accessToken);
			console.log(cb);
			return cb(err);
		}

		cb(null, res.data);
	});
	/*User
	.where({id: userId, limit: 1})
	.exec(function (err, user) {
		if (err) {
			return cb(err);
		}

		if (_.isArray(user)) {
			user = user[0];
		}

		/* Try resorting to this if FQL query doesnt work...
		var userFBID = user.fbId;

		var friendsEndpoint = '/v2.1/{userId}/friends/'.replace('{userId}', userFBID);
		FB.api(friendsEndpoint, 'get', function (err, res) {
			if (err) {
				return cb(err);
			}

			cb(null, res.data);
		});
		/
	});*/


};

// To be used when new access token is given by FB api service
exports.setAccessToken = function (newAccessToken, cb) {
	FB.setAccessToken(newAccessToken);

	FB_CONFIGS.access_token = newAccessToken;
	fs.writeFile('../../assets/json/fb_configs.js', JSON.stringify(FB_CONFIGS, null, '\t'), function (err) {
		cb(err);
	});
};
