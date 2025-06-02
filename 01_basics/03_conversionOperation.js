let score = "55"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let digit = "43ABC"
let temperature = null
let changeInNumber = Number(digit)
let changeInValue = Number(temperature)
console.log(typeof changeInNumber);
console.log(changeInNumber)
console.log(changeInValue)

// try to check for boolean [true - 1, false - 0] value and pure string without any number [NaN].

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// " " => false
// "string" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);