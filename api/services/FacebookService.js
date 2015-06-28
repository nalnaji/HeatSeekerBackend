var FB = require('facebook-node');

exports.getMyId = function (accessToken, cb) {
	FB.setAccessToken(accessToken);

	FB.api(
    "/me",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
				console.log(response);
				cb(response);
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
