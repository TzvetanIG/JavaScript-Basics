function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};


Person.prototype.toString = function toString() {
    return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
};

function group(persons, key) {
    var groups = [];

    while (persons.length > 0) {

        var person = persons.pop(),
            index;

        switch (key) {
            case 'firstname':
                index = person.firstName;
                break;
            case 'age':
                index = person.age;
                break;
            case 'lastName':
                index = person.lastName;
                break;
            default :
                return persons;
            break;
        }

        if (!groups[index]) {
            groups[index] = [];
        }

        groups[index].push(person.toString());
    }

    return groups;
}


var persons = [];
persons.push(new Person("Scott", "Guthrie", 38));
persons.push(new Person("Scott", "Johns", 36));
persons.push(new Person("Scott", "Hanselman", 39));
persons.push(new Person("Jesse", "Liberty", 57));
persons.push(new Person("Jon", "Skeet", 38));


console.log(group(persons, 'firstname'));