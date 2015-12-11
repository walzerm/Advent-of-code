var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    var instructionLines = data.split('\n');
    var lights = [];
    for (var i = 0; i < 1000; i++) {
        lights.push([]);
        for (var j = 0; j < 1000; j++) {
            lights[i].push(false);
        }
    }

    for (var k = 0; k < instructionLines.length - 1; k++) {
        var indivInstruction = instructionLines[k].split(' ');
        var coordinates = [];
        if (indivInstruction.length === 4) {
            coordinates.push(indivInstruction[1].split(","));
            coordinates.push(indivInstruction[3].split(","));
            var i_left =parseInt(coordinates[0][1]);
            var i_right = parseInt(coordinates[1][1]);
            var j_left = parseInt(coordinates[0][0]);
            var j_right = parseInt(coordinates[1][0]);
            for (var i = i_left; i <= i_right; i++) {
                for (var j = j_left; j <= j_right; j++) {
                    if (!lights[i][j]) {
                        lights[i][j] = true;
                    } else {
                        lights[i][j] = false;
                    }
                }
            }
        } else {
            coordinates.push(indivInstruction[2].split(","));
            coordinates.push(indivInstruction[4].split(","));
            var i_left =parseInt(coordinates[0][1]);
            var i_right = parseInt(coordinates[1][1]);
            var j_left = parseInt(coordinates[0][0]);
            var j_right = parseInt(coordinates[1][0]);
            for (var i = i_left; i <= i_right; i++) {
                for (var j = j_left; j <= j_right; j++) {
                    if (indivInstruction[1] === "on") {
                        lights[i][j] = true;
                    } else {
                        lights[i][j] = false;
                    }
                }
            }
        }
    }
    var lightsOn = 0;
    for (var i = 0; i < lights.length; i++) {
        for (var j = 0; j < lights[i].length; j++) {
            if (lights[i][j]) {
                lightsOn++;
            }
        }
    }
console.log(lightsOn);

})
