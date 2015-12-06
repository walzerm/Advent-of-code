var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    var housesVisited = {'00': 1};
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
        if (!housesVisited[stringHouse]) {
            housesVisited[stringHouse] = 1;
        }
    }
    console.log(Object.keys(housesVisited).length);
})
