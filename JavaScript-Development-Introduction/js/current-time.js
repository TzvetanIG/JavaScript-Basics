var currentDate = new Date();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
console.log(hours + ':' + minutes);

