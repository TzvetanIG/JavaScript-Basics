function variablesTypes() {
    var name = arguments[0][0];
    var age = arguments[0][1];
    var isMale = arguments[0][2];
    var foods = arguments[0][3];

    var resultString  = 'My name: ' + name +  ' //type is ' + typeof (name) + '\n' +
    'My age: ' + age + ' //type is '  + typeof (age) + '\n' +
    'I am male: ' + isMale + ' //type is ' +  typeof (isMale) + '\n' +
    'My favorite foods are: ' + foods.toString() + ' //type is ' +  typeof (foods);

    return resultString;
}

console.info(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));