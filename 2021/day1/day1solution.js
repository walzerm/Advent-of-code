var fs = require('fs'); //file system
fs.readFile('input.txt', 'utf8', function(err, data) {
	var depthArray = data.split('\n');
    // depthArray = [199,200,208,210,200,207,240,269,260,263];

    var slidingWindowIncrease = 0;
    var prevWindow;
    var curWindow;
    var i = 0;
    while (i < depthArray.length - 2) {
        // calculate current window 
        curWindow = parseInt(depthArray[i]) + parseInt(depthArray[i + 1]) + parseInt(depthArray[i + 2]);
        // console.log(curWindow);
        if (prevWindow && curWindow) {
            if (curWindow > prevWindow) {
                slidingWindowIncrease++;
            }
        }
        prevWindow = curWindow;
        
        i++
    }

    console.log(slidingWindowIncrease);
})
