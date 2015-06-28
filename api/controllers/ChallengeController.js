/**
 * ChallengeController
 *
 * @description :: Server-side logic for managing challenges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	createChallenge: function (req, res) {
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});

		UserService.getUserFromToken(req.param('access_token'), function (err, me) {
			if (err) {
				console.log(err);
				res.json(err);
			}
			console.log(me);
			var friends = req.param('to').split(',');
			var photoThermal = req.param('photoThermal');
			var photoVisual = req.param('photoVisual');
			var temp = parseInt(req.param('temp'));
			var created = 0;

			_.each(friends, function (friend) {
				UserService.getUserFromFBId(friend, function (err, you) {
					console.log('you:', you);
					Challenge.create({
						from: me,
						to: you,
						photoThermal: photoThermal,
						photoVisual: photoVisual,
						status: 'Created',
						temperature: temp,
						result: 0
					}).exec(console.log);
					created++;
				});
			});

			res.ok();
		});
	},
	sent: function (req, res) {
		console.log('access_token: ', req.param('access_token'));

		UserService.getUserFromToken(req.param('access_token'), function (err, me) {
			if (err) {
				console.log(err);
				res.json(err);
			}
			Challenge.find({where: {from: me.id}}).populate('to').exec(function (err, ch) {
				res.json(ch);
			});
		});
	},
	received: function (req, res) {
		console.log('access_token: ', req.param('access_token'));

		UserService.getUserFromToken(req.param('access_token'), function (err, me) {
			if (err) {
				console.log(err);
				res.json(err);
			}
			Challenge.find({where: {to: me.id}}).populate('from').exec(function (err, ch) {
				res.json(ch);
			});
		});
	}
};
