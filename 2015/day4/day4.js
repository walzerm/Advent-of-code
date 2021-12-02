var md5 = require('js-md5'); //for the npm js-md5 package

function findHash() {
    var input = 'iwrupvqb';
    var count = 0;
    while (true) {
        if (md5(input + count).slice(0, 6) === '000000') {
            break;
        }
        count++
    }
    console.log(count);
}

findHash();
