var fs = require('fs');

fs.readFile('input.txt', "utf8", function(err, data) {
    var instructionArr = data.split("\n");
    //console.log(instructionArr);
    instructionArr.sort(function(a, b) {
        return a.length - b.length;
    })
    console.log(instructionArr);
    var circuit = {};
    //for (var i = 0; i < instructionArr.length - 1; i++) {
    //    instructionArr[i]
    //}    //console.log(nMyNumber.toString(2));//convert decimal to binary


})


//console.log(123 & 456);
