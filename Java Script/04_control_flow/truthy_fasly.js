const userEmail = "h@google.com"
if (userEmail) {
    console.log("got user email")
} else {
    console.log("dont have user email");
}

// there are values which are assumed to be false and true in js

// falsy values

// false, 0, -0, 0n in bigint, ""(empty string), null, undefined, NaN

// truthy values
// "0", "false", " "(space), [], {}, function(){}

// to detect if array or object is empty

const arr =[]
if(arr.length === 0){
    console.log("array is empty")
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty")
}

// Nullish Coalescing Operator ?? : Null Undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20
//NCA operator basically works as a preventive measure against null and undefined in cases when you get them from anywhere else and want to perform a security check
console.log(val1)

// Ternary operator

const price = 100
price >= 80 ? console.log("more than 80") : console.log("less than 80")

// condition ?true : false
