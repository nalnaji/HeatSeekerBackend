
exports.generateHeatImageFilename = function (photoObj) {
	var filename = [
		'heated',
		photoObj.id,
		Date.now(),
		Math.random() * Date.now()
	]
	.map(String)
	.join('_');

	return filename + photoObj.extension
};

exports.generateNormalImageFilename = function (photoObj) {
	var filename = [
		'normal',
		photoObj.id,
		Date.now(),
		Math.random() * Date.now()
	]
	.map(String)
	.join('_');

	return filename + photoObj.extension
};