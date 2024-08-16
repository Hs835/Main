/* there are basically two data types in js based on how they are stored and accessed
1.Primitive (call by value)

under primitive there are 7 types-
string, Number, Boolean, Undefined, Null, Symbol,BigInt

2.Nonprimtive/reference (call by refrence)

Arrays, Objects, Function

JavaScript is a dynamically typed language as we don't need to specify data type when declaring a variable

*/
// declaring symbol

const id = Symbol('123')
const anotherId = Symbol('123')

// symbol's return type is symbol too

console.log(id === anotherId)

// we use symbol when we want make same strings/components unique note that in above ex. we have the same string but when we compare them it returns false  

// when we declare a number and we put n at last of it it becomes bigInt

const bigNumber = 23468789468972698n


// Arrays, Objects, Function

const heros = ["shaktiman","batman","superman"]

let myObj = {
    myName : "harsh",
    age : 18,
}

function greet() {
    console.log("Hello World");
}

greet()

const greet2 = function() {
    console.log("Hello World");
}

let empty = null;
console.log(typeof(empty)); 
// type of null is object

// *****************Memory**************

// Stack (Primitive) , Heap (Reference)

// In stack copy of a variable is made when using it elsewhere and changes made there are done on the copy and the original stays intact

let userId = "user@google.com"
let userId2 = userId

userId2 = "harsh@google.com"

console.log(userId)
console.log(userId2)

//  But in heap the data is stored in a heap and the variable is given its reference and if you use the variable elsewhere the same reference is used so if you make any changes it reflects on the orignal

let dob = {
    date: "01" ,
    month: "01" ,
    year: "2000",
}

let dob2 = dob

dob.date = "02"

console.log(dob);
console.log(dob2);
