// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);             // this will give you result in boolean value.



// console.log("2" >  1);
// console.log("02" > 1);

// when comparing both data type should be same
// typescript won't allow you to compare different data types.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* 
This reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.
*/   

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);     // all three values will produce false result.


