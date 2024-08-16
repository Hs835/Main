function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

// so everything(arrays, strings) in js is a object and for functions they behave as both functions and objects

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.printMe = function(){
    console.log(`the score is ${this.score}`)
}

// we can inject new methods in an existing function by creating it in its prototype 
// but when we use the method we made we wont be able to use it as its up in the air but when we use new we tell it to inject the preexisting properties of its like in this case include all its functionly properites but add the ones we just made as well 

// const user =  createUser("harsh",201)
const user = new createUser("harsh",201)
user.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/