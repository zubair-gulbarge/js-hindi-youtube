const name = "sanji"
const repoCount = 50

// console.log(name + repoCount + " Value");        // outdated version

// Modern Way of writing it

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); // Important try to use this method.

// const character = "Robin"
// console.log(typeof(character))
// console.log(character)

// const islandName = new String('East Blue')
// console.log(typeof(islandName))
// console.log(islandName)

// console.log(islandName[1]);
// console.log(islandName.__proto__);

// console.log(islandName.length);
// console.log(islandName.toLocaleUpperCase());

// console.log(islandName.charAt(2));
// console.log(islandName.indexOf('s'));


const navyMarine = new String('Monkey-D-Garp')

const newString = navyMarine.substring(0, 4)
console.log(newString);

const anotherString = navyMarine.slice(-13, 4)
console.log(anotherString);

const newStringOne = "    Franky    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Jimbe.com/First%20Son%20Of%20the%20Sea"
console.log(url.replaceAll('%20', '-'))
// console.log(url.replace('%20', '-'))        // Replaces single Value

console.log(url.includes('Son'))

console.log(url.split('%20'));