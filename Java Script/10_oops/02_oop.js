// const user = {
//     username: "harsh",
//     loginDevices:2,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("got user details")
//         console.log(this.loginDevices)
//     }
// }
// so a object is just a object literally it has properties (variables), and methods(function)

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function user(username, loginDevices, signedIn) {
    this.username = username;
    this.loginDevices = loginDevices;
    this.signedIn = signedIn;
    // this is by default returned so it will work even if you dont return this
    return this
}

const userOne = new user("harsh1", 4, false)
const userTWo = new user("harsh2", 3, true)
// if we dont use new here the new user we are declaring will overwrite the previous one 
console.log(userOne)
console.log(userTWo)
console.log(userTWo.constructor)
// when we use new an empty object is made called instance and then the constructor function is called due to new and it packs the arguments in them and "this" injects the arguments in the variables and then it returns 