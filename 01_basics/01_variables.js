const accountId = 12345
let accountEmail = "zubair@google.com"
var accountPassword = "124578"
accountCity = "Pune"        // don't declare it like this - this is not considered the best practice.
let accountState;

// accountId = 123567       // not allowed to change.
accountEmail = "goku@microsoft.com"     // this value is going to replace the previous one.
accountPassword = "9875432"             // this value is going to replace the old value.
accountCity = "Delhi"                   // this value is going to replace the old value.

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.log([accountEmail, accountId, accountPassword, accountCity])
console.log(accountEmail, accountId, accountPassword, accountCity)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/