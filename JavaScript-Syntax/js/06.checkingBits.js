
function bitChecker(value) {
    var bit3 = (value >> 3) & 1;
    var result = (bit3 === 1);
    return result;
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));