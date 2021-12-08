var fs = require('fs'); //file system
fs.readFile('input.txt', 'utf8', function(err, data) {
	var dirArray = data.split('\n');
    // dirArray = ["00100","11110","10110","10111","10101",
    //     "01111",
    //     "00111",
    //     "11100",
    //     "10000",
    //     "11001",
    //     "00010",
    //     "01010"];
    
        // console.log(dirArray);
    // var numOfOnes = [];
    // var numOfTwos = [];
    // var totalNumOfEntries = dirArray.length;
    // for (let i = 0; i < dirArray.length; i++) {
    //     const binary = dirArray[i];
    //     // console.log(binary);
    //     for (let j = 0; j < binary.length; j++) {
    //         const number = parseInt(binary[j]);
    //         // console.log(number);
    //         if (number === 1) {
    //             if (!numOfOnes[j]) {
    //                 numOfOnes[j] = 0;
    //                 // console.log("here");
    //             }
    //             var curVal = numOfOnes[j];
    //             var nextValue = curVal + 1;
    //             // console.log(nextValue);
    //             numOfOnes[j] = nextValue;
    //             // console.log(numOfOnes);
    //         } else {
    //             if (!numOfTwos[j]) {
    //                 numOfTwos[j] = 0;
    //                 // console.log("here");
    //             }
    //             var curVal = numOfTwos[j];
    //             var nextValue = curVal + 1;
    //             // console.log(nextValue);
    //             numOfTwos[j] = nextValue;
    //             // console.log(numOfTwos);
    //         }
            
    //     }
    // }
    // var gamma = "";
    // var epsilon = "";
    // var o2Array = [];
    // var cO2Array = [];
    // for (let i = 0; i < numOfOnes.length; i++) {
    //     const countOfOne = numOfOnes[i];
    //     for (let j = 0; j < array.length; j++) {
    //         const element = array[j];
            
    //     }
    //     if (countOfOne > totalNumOfEntries/2) {
    //         // gamma += "1";
    //         // console.log(gamma);
    //         // epsilon += "0";
    //     } else {
    //         // gamma += "0";
    //         // console.log(gamma);
    //         // epsilon += "1";
    //     }
    // }

    // var o2Rating = [];
    // var cO2Rating = [];

    var numbersToProcess = dirArray;
    var index = 0;
    var ones = 0;
    var zeroes = 0;

    // checking for O2, keep numbers with greater frequency, if euqal keep 1
    // loop through all of the numbers to process
    while (numbersToProcess.length > 1) {
        // console.log(numbersToProcess);
        // loop through numbersToProcess and check the number at index and count the 1s and 0s
        for (let i = 0; i < numbersToProcess.length; i++) {
            const number = numbersToProcess[i];
            const digit = number[index]
            if (digit === '1') {
                ones++;
            } else {
                zeroes++;
            }    
        }

        // console.log(ones);

        var tempArray = [];
        // loop though the numbers to process and pick the ones to keep into a new array
        for (let i = 0; i < numbersToProcess.length; i++) {
            const number = numbersToProcess[i];
            if (ones >= zeroes) {
                if (number[index] === '1') {
                    tempArray.push(number);
                    // console.log("here");
                }
            } else {
                if (number[index] === '0') {
                    tempArray.push(number);
                }
            }
            
        }

        // console.log(tempArray);

        // set new array to numbersToProcess
        numbersToProcess = tempArray;
        // increase index, reset ones and zero counts
        index++;
        ones = 0;
        zeroes = 0;
    }

    var o2Rating = numbersToProcess[0];

    console.log(o2Rating);

     numbersToProcess = dirArray;
     index = 0;
     ones = 0;
     zeroes = 0;

    // checking for CO2, keep numbers with least frequency, if euqal keep 0
    // loop through all of the numbers to process
    while (numbersToProcess.length > 1) {
        // console.log(numbersToProcess);
        // loop through numbersToProcess and check the number at index and count the 1s and 0s
        for (let i = 0; i < numbersToProcess.length; i++) {
            const number = numbersToProcess[i];
            const digit = number[index]
            if (digit === '1') {
                ones++;
            } else {
                zeroes++;
            }    
        }

        // console.log(ones);
        // console.log(zeroes);

        var tempArray = [];
        // loop though the numbers to process and pick the ones to keep into a new array
        for (let i = 0; i < numbersToProcess.length; i++) {
            const number = numbersToProcess[i];
            if (zeroes <= ones) {
                if (number[index] === '0') {
                    tempArray.push(number);
                    // console.log("here");
                }
            } else {
                if (number[index] === '1') {
                    tempArray.push(number);
                }
            }
            
        }

        // console.log(tempArray);

        // set new array to numbersToProcess
        numbersToProcess = tempArray;
        // increase index, reset ones and zero counts
        index++;
        ones = 0;
        zeroes = 0;
    }

    var cO2Rating = numbersToProcess[0];

    console.log(cO2Rating);
    // console.log(gamma);

    // var digitGamma = parseInt(gamma, 2);
    // var digitEpsilon = parseInt(epsilon, 2);
    var digitO2 = parseInt(o2Rating, 2);
    var digitCo2 = parseInt(cO2Rating, 2);

    console.log(digitO2 * digitCo2);
})
