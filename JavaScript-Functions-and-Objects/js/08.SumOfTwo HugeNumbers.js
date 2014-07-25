function sumTwoHugeNumbers(numbers) {
    var BigNumber = require('./big.js');

    var bigNum = BigNumber(numbers[0]),
        result = bigNum.plus(numbers[1]);

    console.log(result.toFixed(0));
}

sumTwoHugeNumbers(['155', '65']);
sumTwoHugeNumbers(['123456789', '123456789']);
sumTwoHugeNumbers(['887987345974539', '4582796427862587']);
sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']);

