const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));                // mostly used in ecommerce application.


const otherNumber = 1133.8966

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



//  +++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(7.3));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.7));
console.log(Math.min(4, 3, 6, 8, 10));
console.log(Math.max(4, 3, 6, 8, 10));


console.log(Math.random());
console.log(Math.random()*10 + 1);      // not the best practice because of BODMAS Rule

console.log((Math.random()*10) + 1);      // Best practice to use

console.log(Math.floor(Math.random()*10) + 1);      // For Single Digit Value

const min = 10
const max = 20

Math.random() * (max - min + 1)                 // for not getting 'Zero' value
Math.random() * (max - min + 1) + 10
console.log(Math.random() * (max - min + 1))
console.log(Math.random(Math.random() * (max - min + 1)) + min)         // For getting values more than 10
