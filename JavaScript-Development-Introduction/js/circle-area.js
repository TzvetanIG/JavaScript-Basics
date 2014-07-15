function getCircleArea(radus) {
    var area = Math.PI * radus * radus;
    return area;
}

function printResult(radius, area, isNewRow) {
    document.body.innerHTML += 'r = ' + radius + '; area = ' + area + (isNewRow == true ? '<br/>' : '');
}

printResult(7, getCircleArea(7), true);
printResult(1.5, getCircleArea(1.5), true);
printResult(20, getCircleArea(20));