var fs = require('fs'); //file system
fs.readFile('input.txt', 'utf8', function(err, data) {
	var dirArray = data.split('\n');

    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for (let i = 0; i < dirArray.length; i++) {
        const directions = dirArray[i].split(' ');
        const direction = directions[0];
        const adjustment = parseInt(directions[1]);

        if (direction === 'forward') {
            horizontal += adjustment;
            depth += aim * adjustment;
        } else if (direction === 'down') {
            // depth += adjustment;
            aim += adjustment
        } else if (direction === 'up') {
            // depth -= adjustment;
            aim -= adjustment;
        }
        
    }
    console.log(horizontal*depth);
})
