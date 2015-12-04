var fs = require('fs'); //file system
fs.readFile('input.txt', 'utf8', function(err, data) {
	var packageArr = data.split('\n');

	var paper = 0;
	var ribbon = 0;
	for (var i = 0; i < packageArr.length; i++) {
		var dimensions = packageArr[i].split('x');
		var l = parseInt(dimensions[0]);
		var w = parseInt(dimensions[1]);
		var h = parseInt(dimensions[2]);
		//find the amount of wrapping paper
		paper += 2 * (l * w + w * h + h * l) + Math.min(l * w, w * h, h * l);
		//find the amount of ribbon
		ribbon += 2 * ((l + w + h) - Math.max(l, w, h)) + l * w * h;
	}
	console.log(paper + " " + ribbon);
})