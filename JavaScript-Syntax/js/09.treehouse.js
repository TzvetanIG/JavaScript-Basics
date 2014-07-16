function treeHouseCompare(a, b) {

    var houseArea = a * a + a * a / 3;
    var treeArea = b * b / 3 + Math.PI * (2 * b / 3) * (2 * b / 3);
    var result;

    if (houseArea > treeArea) {
        result = 'house/' + houseArea.toFixed(2);
    } else {
        result = 'tree/' + treeArea.toFixed(2);
    }

    return result;
}

console.info(treeHouseCompare(3, 2));
console.info(treeHouseCompare(3, 3));
console.info(treeHouseCompare(4, 5));