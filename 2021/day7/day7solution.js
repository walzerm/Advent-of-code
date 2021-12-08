var fs = require('fs'); //file system

var stepCosts = {};
fs.readFile('input.txt', 'utf8', function(err, data) {
	var dirArray = data.split(',');
    var numArrary = [];
    for (let i = 0; i < dirArray.length; i++) {
        numArrary.push(parseInt(dirArray[i])); 
    }
    numArrary.sort(function(a, b) {
        return a - b;
      });

    var cheapestOutcome;
    for (let i = numArrary[0]; i < numArrary[numArrary.length - 1]; i++) {
        // postition to test = i
        var totalFuel = 0;
        for (let j = 0; j < numArrary.length; j++) {
            const fuel = stepCost(i, numArrary[j]);
            // console.log(fuel);
            totalFuel += fuel;
        }
        
        if (totalFuel < cheapestOutcome || cheapestOutcome === undefined) {
            cheapestOutcome = totalFuel;
        }
    }

    console.log(cheapestOutcome);
})

function stepCost(start, end) {
    var stepCost = 1;
    var fuel = 0;
    var min;
    var max;
    if (start < end) {
        min = start;
        max = end;
    } else if (start > end) {
        min = end;
        max = start;
    } else if (start === end) {
        return 0;
    }
    
    for (let i = min; i < max; i++) {
        fuel += stepCost;
        stepCost++;
        
    }
    return fuel;
}
