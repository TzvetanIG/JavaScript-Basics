function clone(obj){
    var stringJSON = JSON.stringify(obj);
    var newObj = JSON.parse(stringJSON);
    return newObj;
}

function compareObjects(obj, objCopy) {
    var isEqualReference = obj == objCopy;
    console.log('a == b --> %s',isEqualReference);
}



var a = {name: 'Pesho', age: 21, clone: clone};
var b = clone(a);
compareObjects(a, b);

var a = {name: 'Pesho', age: 21} ;
var b = a;
compareObjects(a, b);
