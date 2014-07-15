function isPrime(value) {

    var maxDivider = parseInt(Math.sqrt(value));
    var isPrime = true;

    for(var divider = 2; divider <= maxDivider; divider += 1){

        if(!(value % divider)){

            isPrime = false;
            break;
        }
    }

    return isPrime;
}

console.info(isPrime(7));
console.info(isPrime(254));
console.info(isPrime(587));