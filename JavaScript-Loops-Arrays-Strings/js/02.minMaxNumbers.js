function findMinAndMax(value) {
    var numbers = value;

    numbers.sort(function () {
        return arguments[0] - arguments[1];
    });

    console.log('Min -> %s', numbers[0]);
    console.log('Max -> %s', numbers[numbers.length - 1]);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
