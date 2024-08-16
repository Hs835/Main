// we can use two ways to declare objects as lierals or as constructor
// when we declare using literals it is not singleton(here multiple instances are made) and when we declare using constructor it is a singleton(unique)
// Object.create (constructor method)

// literals
const mysym = Symbol("key1")
const jsUser = {
    name: "Harsh",
    age: 18,
    location: "Jaipur",
    email: "harsh@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Wednesday","Friday"],
    [mysym]: "key1",//using symbol as key
    "Full name": "Harsh Singh"
}

console.log(jsUser.name);
console.log(jsUser["Full name"]);
console.log(jsUser[mysym]);
console.log(jsUser);

jsUser.email = "harsh@microsoft.com"
// Object.freeze(jsUser) // here this freezes the current objet so that no further changes can be made
jsUser.email = "harsh@chatgpt.com"
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello User")
}

jsUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())