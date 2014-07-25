function findNthDigit(arr) {
    var digitPosition =  arr[0],

        numberAsString = ('' + arr[1]).replace(/[.-]+/g, ''),

        len = numberAsString.length,

        result = "The number doesn't have 6 digits";

    if(digitPosition <= len){
         result = numberAsString[len - digitPosition];
    };


    console.log(result);
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);
