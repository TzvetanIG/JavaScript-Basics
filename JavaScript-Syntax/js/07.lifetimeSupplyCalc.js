function calcSupply(age, maxAge, amountPerDay) {

    var foods = ['tomatoes', 'chocolate', 'soup', 'nuts', 'bread'];
    var totalAmount = (maxAge - age) * 365 * amountPerDay;
    var randomIndex = parseInt(Math.random() * 4);
    var result = totalAmount + ' kg of ' + foods[randomIndex] + ' would be enough until I am ' + maxAge + ' years old.';
    return result;
}

console.log(calcSupply(38, 118, 0.5));
console.log(calcSupply(20, 87, 2));
console.log(calcSupply(16, 102, 1.1));