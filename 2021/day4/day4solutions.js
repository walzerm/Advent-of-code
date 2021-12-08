var fs = require('fs'); //file system
var PICKED = true;
var NOT_PICKED = false;

fs.readFile('input.txt', 'utf8', function(err, data) {
	var inputArray = data.split('\n');

    var numbers = inputArray[0];
    var boards = [];
    // transform boards into 2d arrays
    var i = 1;
    while (i < inputArray.length) {
        const element = inputArray[i];
        if (element === '') {
            i++;
            continue;
        }
        // console.log("starting board");
        var board = [];
        for (let j = 0; j < 5; j++) {
            var index = i + j;
            const row = inputArray[index].split(' ');
            // console.log(row);
            var rowIndex = 0;
            var boardRow = [];
            while (rowIndex < row.length) {
                if (row[rowIndex] != '') {
                    boardRow.push([parseInt(row[rowIndex]), NOT_PICKED]);
                    // console.log(row[rowIndex]);
                }
                rowIndex++;
            }
            board.push(boardRow);
        }
        boards.push(board);
        i = i + 5;
    }

    var winningBoardArr = [];
    var numberIndex = 0;
    var numberArray = numbers.split(',');
    var winningNumber;

    while (winningBoardArr.length === 0) {
        
        var number = parseInt(numberArray[numberIndex]);
        // var number = numbers[numberIndex];
        // console.log("number: " + number);
        for (let i = 0; i < boards.length; i++) {
            const board = boards[i];
            // console.log(board);
            for (let j = 0; j < board.length; j++) {
                const row = board[j];
                for (let h = 0; h < row.length; h++) {
                    const element = row[h];
                    if (element[0] === number) {
                        element[1] = PICKED;
                        // console.log("here1");
                    }
                }
                
            } 
            // console.log(board);
        }
        numberIndex++;
        // winningBoard.push("");
        // console.log("here here");

        for (let i = 0; i < boards.length; i++) {
            const board = boards[i];
            // check all vertical rows
            for (let j = 0; j < board.length; j++) {
                if (board[j][0][1] === PICKED && 
                    board[j][1][1] === PICKED &&
                    board[j][2][1] === PICKED &&
                    board[j][3][1] === PICKED &&
                    board[j][4][1] === PICKED) {
                    // console.log(board);
                    // console.log("winning board")
                    winningBoardArr.push(board);
                    winningNumber = number;
                }
                // check all horizontal rows
                if (board[0][j][1] === PICKED && 
                    board[1][j][1] === PICKED &&
                    board[2][j][1] === PICKED &&
                    board[3][j][1] === PICKED &&
                    board[4][j][1] === PICKED) {
                    // console.log(board);
                    // console.log("winning board")
                    winningBoardArr.push(board);
                    winningNumber = number;
                }
                
            }
            // console.log(board[i][0][1]);
            
        }

    }
    // console.log(numbers);
    console.log(winningNumber);

    var sum = 0;
    var winningBoard = winningBoardArr[0];
    for (let i = 0; i < winningBoard.length; i++) {
        const row = winningBoard[i];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            if (element[1] === NOT_PICKED) {
                sum += element[0];
            }
        }
        
    }

    console.log(sum * winningNumber);

})