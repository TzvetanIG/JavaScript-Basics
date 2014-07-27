function solve(input) {
    var i,
        inputArr = [];

    for (i in input) {
        inputArr.push(input[i].split(''));
    }

    var j;
    for (i = 0; i < input.length - 1; i++) {
        for (j = 1; j <= input[i].length -1; j++) {
            if(input[i][j] === input[i+1][j] &&
               input[i][j] === input[i+1][j-1] &&
                input[i][j] === input[i+1][j + 1]){

                inputArr[i][j] = '*';
                inputArr[i+1][j] = '*';
                inputArr[i+1][j-1] = '*';
                inputArr[i+1][j+1] = '*';
            }
        }
    }

    for(i in inputArr){
        console.log(inputArr[i].join(''));
    }

}


solve(['aa', 'aaa','aaaa', 'aaaaa']);