function StringMatrixRotation(input){
    function loadMatrix(input){
        var matrix = [];
        var maxLength = 0;
        var i;
        for(i = 1; i < input.length; i++){
            if(input[i].length > maxLength ){
                maxLength = input[i].length;
            }
        }

        for(i = 1; i < input.length; i++){
            var row = input[i] + Array(maxLength - input[i].length + 1)
                    .join(' ');
            matrix.push(row.split(''));
        }

        return matrix;
    }

    function rotateMatrix90(matrix){
        var newMatrix = [];

        var row, newRow;
        var col, newCol;
        for(col = 0; col < matrix[0].length; col++){
            newRow = col;
            newMatrix[newRow] = [];
            for(row = matrix.length - 1; row >= 0; row--){
                newCol = matrix.length - 1 - row;
                newMatrix[newRow].push(matrix[row][col]);
            }
        }

        return newMatrix;
    }

    function printMatrix(matrix) {
        var i;
        for(i = 0; i < matrix.length; i++){
            console.log(matrix[i].join(''));
        }
    }

    var degAsString = input[0].match(/\d+/);
    var deg = Number(degAsString[0]);
    var matrix = [];
    var turns = deg % 360 / 90
    var i;

    matrix = loadMatrix(input);
    for(i = 0; i < turns; i++){
        matrix = rotateMatrix90(matrix);
    }

    printMatrix(matrix);

}

StringMatrixRotation(
    [
        'Rotate(90)',
        'hello',
        'softuni',
        'exam'
    ]
)