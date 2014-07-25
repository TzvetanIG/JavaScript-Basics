Array.prototype.removeItem = function removeItem(item){
    do {
       var index = this.indexOf(item);
        if(item === this[index]) this.splice(index,1);
    } while(index > -1)
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);
console.log(arr);

arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');
console.log(arr);

