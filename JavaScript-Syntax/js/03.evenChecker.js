function evenNumber(value) {
    var isEven = false;

    if(value % 2 === 0){

        isEven = true;
    }

    return isEven;
}

console.info(evenNumber(3));
console.info(evenNumber(127));
console.info(evenNumber(588));
