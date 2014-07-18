function sortArray(arr) {

    function min() {

        var minValue = this[0];
        var i;

        for (i in this) {
            if (minValue > this[i]) {
                minValue = this[i];
            }
        }

        return minValue;
    }

    function remove(element) {
        var index = this.indexOf(element);
        if(index == -1){ return; }
        this.splice(index, 1);
    }

    Array.prototype.min = min;
    Array.prototype.remove = remove;

    var i;
    var newArray = [];
    var  minValue;

    while(arr.length  > 0){
        minValue = arr.min();
        newArray.push(minValue);
        arr.remove(minValue);
    }

    return newArray;
}

console.log(sortArray([5, 4, 3, 2, 1]).join(', '));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]).join(', '));
console.log(sortArray(['Pesho', 'Gosho', 'Gosho Goshev', 'Gosho Peshev']).join(', '));