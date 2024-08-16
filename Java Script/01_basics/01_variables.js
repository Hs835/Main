const accountID = 19043
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// it is prefered to use let rather than var because of issue in block scope and funtional scope

// even if we can declare variables without stating their type its not advisable to do so

// accountID = 12700 not allowed as constant values cannot be changed in js

accountEmail = "hs@hs.com"
accountPassword = "04898"
accountCity = "Bengaluru"

console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity])

console.log(typeof(accountCity));