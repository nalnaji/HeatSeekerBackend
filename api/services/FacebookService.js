var FB = require('facebook-node');

var FB_CONFIGS = require('/Users/andrew.lai/Code/HeatSeekerBackend/assets/json/fb_configs.json');

FB.setAccessToken(FB_CONFIGS.access_token);

exports.getMyId = function (accessToken, cb) {
	FB.setAccessToken(accessToken);

	FB.api(
    "/me",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
				console.log(response);
				cb(response.id);
      }
    }
	);
};

exports.getUserFriends = function (accessToken, cb) {
	FB.setAccessToken(accessToken);

	FB.api(
    "/me/friends",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
				console.log(response);
				cb(null, response.data);
      }
    }
	);
};

// To be used when new access token is given by FB api service
exports.setAccessToken = function (newAccessToken, cb) {
	FB.setAccessToken(newAccessToken);

	FB_CONFIGS.access_token = newAccessToken;
	fs.writeFile('../../assets/json/fb_configs.js', JSON.stringify(FB_CONFIGS, null, '\t'), function (err) {
		cb(err);
	});
};
