var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    var housesVisited = new Set();
    housesVisited.add('00');
    var currentHouse = [0, 0];
    for (var i = 0; i < data.length; i++) {
        if (data[i] === '>') {
            currentHouse[0]++;
        } else if (data[i] === '<') {
            currentHouse[0]--;
        } else if (data[i] === '^') {
            currentHouse[1]++;
        } else {
            currentHouse[1]--;
        }
        var stringHouse = currentHouse.join('');
        housesVisited.add(stringHouse);
    }
    console.log(housesVisited.size);
})
