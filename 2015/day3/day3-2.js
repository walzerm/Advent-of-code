var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    var housesVisited = new Set();
    //var roboSantaHousesVisited = new Set();
    housesVisited.add('0,0');
    //roboSantaHousesVisited.add('00');
    var roboVsSanta = 0;
    var santaCurrentHouse = [0, 0];
    var roboCurrentHouse = [0, 0];
    for (var i = 0; i < data.length; i++) {
        //var currentHouse;
        if (roboVsSanta % 2 === 0) {
            switch (data[i]) {
                case '>':
                    roboCurrentHouse[0]++;
                    break;
                case '<':
                    roboCurrentHouse[0]--;
                    break;
                case '^':
                    roboCurrentHouse[1]++;
                    break;
                default:
                    roboCurrentHouse[1]--;
            }
            housesVisited.add(roboCurrentHouse.join(','));
        } else {
            switch (data[i]) {
                case '>':
                    santaCurrentHouse[0]++;
                    break;
                case '<':
                    santaCurrentHouse[0]--;
                    break;
                case '^':
                    santaCurrentHouse[1]++;
                    break;
                default:
                    santaCurrentHouse[1]--;
            }
            housesVisited.add(santaCurrentHouse.join(','));
        }
        roboVsSanta++;
    }
    console.log('total was ' + housesVisited.size);

})
