const Cal = require('./calculator');

var number1 = 20;
var number2 = 10;

mycal = new Cal(20,10);
console.log(mycal);
console.log("adding....");
console.log(mycal.Add());
console.log("Subtacting...");
console.log(mycal.Sub());
console.log("Mul...");
console.log(mycal.Mul());