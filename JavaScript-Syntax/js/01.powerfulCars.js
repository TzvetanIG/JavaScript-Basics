function convertKWtoHP(powerKW){
    var powerHP = powerKW / 0.746;
   return  powerHP.toFixed(2);
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));