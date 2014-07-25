function findLargestBySumOfDigits(nums) {

    function sumDigits (number){
        var numberAsString = '' + Math.abs(number),
            sum = 0,
            i;

        for(i in numberAsString){
            sum += parseInt(numberAsString[i]);
        }

        return sum;
    }

    var maxSum = 0,
        numberWithMaxSumDigits,
        currentSum,
        i;

    for(i in nums){
        currentSum = sumDigits(nums[i]);

        if(isNaN(currentSum)) {
            numberWithMaxSumDigits = undefined;
            break;
        }

        if(maxSum < currentSum){
            maxSum = currentSum;
            numberWithMaxSumDigits = nums[i];
        }
    }

    console.log(numberWithMaxSumDigits);
}

findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits([33, 44, -99, 0, 2]);
findLargestBySumOfDigits(['hello']);
findLargestBySumOfDigits([5, 3.3]);