// if
const isUSerLoggedIn = true
if(2=="2"){
    console.log("executed")
}

const score = 200

// if (score>100) {
//     const power = "rage"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)
// // when using if we should remember scope

const balance = 1000
if (balance>500) console.log("test"),
console.log("test2");
// we can not use the curly braces in if this is known as imlicit sccope but this is not recommended as it reduces readability

const debitCard = true

if(isUSerLoggedIn && debitCard){
    console.log("allow shopping")
}

// we can also use multiple ifelses to check multiple conditions 