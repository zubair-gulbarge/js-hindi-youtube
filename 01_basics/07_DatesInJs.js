// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);     // Object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());        // 5 - in date dunction month start from 0 [0 = jan, 1 = feb]
console.log(newDate.getDay());


// Important Very Usefull.

newDate.toLocaleString('default', {
    weekday: "long"                         // CTRL + Space for suggesion, this is to modify date further.
})