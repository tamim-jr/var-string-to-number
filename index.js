var promise = "I will work Heard to became a programer";
console.log(promise.toUpperCase());
console.log(promise.toLowerCase());
console.log(promise.indexOf("will"));
console.log(promise.indexOf("work"));

//string to integer number convert

var number1 = 15;
var number2 = "15.5";
number2 = parseFloat(number2);
console.log(number1 + number2);

var number3 = 43;
var number4 = "12.4";
number4 = parseFloat(number4);
console.log(number3 + number4);

var number5 = "32";
var number6 = "15.8";
number5 = parseInt(number5);
number6 = parseFloat(number6);
console.log( number5 + number6);

var number7 = .1;
var number8 = .2;
var total= number7 + number8;
total = total.toFixed(5);
console.log(total);
