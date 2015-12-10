var fs = require('fs');

//Part one
fs.readFile('input.txt', 'utf8', function(err, data) {
    var str = data.split('\n');
    var niceSrings = 0;
    for (var i = 0; i < str.length; i++) {
        var vowelCount = 0;
        var twiceInARow = false;
        var noNaughtyStrings = true;
        for (var j = 0; j < str[i].length; j++) {
            if (str[i][j] === 'a' || str[i][j] === 'e' || str[i][j] === 'i' || str[i][j] === 'o' || str[i][j] === 'u') {
                vowelCount++;
            }
        }
        for (var j = 0; j < str[i].length - 1; j++) {
            if (str[i][j] === str[i][j + 1]) {
                twiceInARow = true;

            }
        }
        if (str[i].search('ab') != -1 || str[i].search('cd') != -1 || str[i].search('pq') != -1|| str[i].search('xy') != -1) {
            noNaughtyStrings = false;
        }
        if (vowelCount >= 3 && twiceInARow && noNaughtyStrings) {
            niceSrings++;
        }
    }
    console.log(niceSrings);
    console.log(str.length);

})

//Part two
fs.readFile('input.txt', 'utf8', function(err, data) {
    var str = data.split('\n');
    var niceStrings = 0;
    for (var i = 0; i < str.length; i++) {
        var matchingLetters = false;
        var letterPair = false;
        for (var j = 0; j < str[i].length; j++) {
            if (str[i][j] === str[i][j + 2]) {
                matchingLetters = true;
            }
            var testString = str[i].substr(j, 2);
            var remainderString = str[i].substr(j + 2);
            if (remainderString.indexOf(testString) != -1) {
                letterPair = true;
            }
        }

        if (matchingLetters && letterPair) {
            niceStrings++;
        };
    }
    console.log(niceStrings);
})
