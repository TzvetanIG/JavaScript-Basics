function soothsayer(value) {
    function getRandomIndex() {
        return Math.floor(Math.random() * 5);
    }

    var number = value[0][getRandomIndex()];
    var language = value[1][getRandomIndex()];
    var city = value[2][getRandomIndex()];
    var car = value[3][getRandomIndex()];

    return [number, language, city, car];
}

var result = soothsayer([
    [3, 5, 2, 7, 9],
    ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']
]);

console.info('You will work ' + result[0] + ' years on ' + result[1] + '. You will live in ' + result[2] + ' and drive ' + result[3] + '.');



