function checkDigit(num) {

    var numAsString = num.toString();

    if(numAsString[numAsString.length - 3] == 3){
        return true;
    } else {
         return false;
    }
}

console.info(checkDigit(1235));
console.info(checkDigit(25368));
console.info(checkDigit(123456));

