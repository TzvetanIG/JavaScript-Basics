var numberAsString = prompt('Enter a number.');

if (numberAsString != null) {

    var decimalNumber = parseInt(numberAsString);

    if (isNaN(decimalNumber)) {
        alert('Your input is not a number!');
    } else {
        alert(decimalNumber.toString(16).toUpperCase());
    }
}
