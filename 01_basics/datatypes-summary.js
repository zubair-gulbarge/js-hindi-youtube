// primitive & non-primitive

// call by value or call by Reference

// How it's stored in memory 

// Primitive - 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference Type (Non primitive) : Array, Objects, Functions

// javascript objects, and browser web events or browser event to master javascript.

//  Is javascript dynamicallay typed language or statically typed language

const score = 100           // normal javascript
// const age:number = 55       // this is typescript method or syntax
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;                          // undefined

// ---

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 120943718927461641829437128394714931873409164n


const heroes = ["IronMan", "Batman", "Thor", "Hulk"];
let myObj = {
    name: "Ironman",
    age: 25,
}


const myFunction = function () {
    console.log("Hello World");
};

myFunction(); // 👉 This will print: Hello World


console.log(typeof bigNumber)
console.log(typeof outsideTemp);


// function throw type of funciton only but its called object function. non premitive object type object

// *********************************************************************************************************


// Stack (primitive), heap (non-primitive)

let myYoutubename = "monkeydluffydotcom"

let anotherName = myYoutubename

anotherName = "zorodotcom"

console.log(myYoutubename)

console.log(anotherName)


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nami@onepiece.com"

console.log(userOne.email);
console.log(userTwo.email);
