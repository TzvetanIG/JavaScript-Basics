function calcCylinderVol(radius, height) {
    var volume = Math.PI * radius * radius * height;
    return volume;
}

console.log(calcCylinderVol(2, 4).toFixed(3));
console.log(calcCylinderVol(5, 8).toFixed(3));
console.log(calcCylinderVol(12, 3).toFixed(3));