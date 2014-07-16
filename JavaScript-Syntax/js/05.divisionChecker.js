function divisionBy3(value) {
    var numberAsString = value.toString();
    var sum = 0;

    for (var i = 0; i < numberAsString.length; i += 1) {
        sum += parseInt(numberAsString[i]);
    }

    var result;

    if(sum % 3 === 0){

       result = 'the number is divided by 3 without remainder' ;
    } else {

       result = 'the number is not divided by 3 without remainder';
    }

    return result;
}

console.info(divisionBy3(12));
console.info(divisionBy3(189));
console.info(divisionBy3(591));