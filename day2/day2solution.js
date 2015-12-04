var fs = require('fs'); //file system
fs.readFile('input.txt', 'utf8', function(err, data) {
	var packageArr = data.split('\n');
	var totalPaper = 0;
	for (var i = 0; i < packageArr.length; i++) {
		var dimensions = packageArr[i].split('x');
		var length = dimensions[0] * dimensions[1];
		var width = dimensions[1] * dimensions[2];
		var height = dimensions[2] * dimensions[0];
		totalPaper += 2 * (length + width + height) + Math.min(length, width, height);
	}
	console.log(totalPaper);
})