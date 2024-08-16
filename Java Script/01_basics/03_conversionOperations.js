let score = "33"

// if we pass a string/not pure no. and convert it into number it will be converted but the actual value inside will be NaN 
// for null it is 0
// for undefined it is NaN 
// for boolean true is 1 false is 0

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));


let valueForBool = ""
valueInBool = Boolean(valueForBool)
console.log(valueInBool)

// when we convert empty string in boolean its false


let valueForString = 123
let valueInString = String(valueForString)
console.log(valueInString)
console.log(typeof(valueInString));




/******************operations*************** */


let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);


let str1 = "hello"
let str2 = " everyone"
let str3 = str1+str2
console.log(str3);


console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(+true) // 1 because of conversion
console.log(+""); // 0

