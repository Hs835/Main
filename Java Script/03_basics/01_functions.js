function sum(num1,num2){
    console.log(num1 + num2)
}

sum(3,"a")

function loginUserMessage(username = "sam"){
    // this situation is for when is an empty string is passed we can also give username a default value like above
    if(!username/*username===undefined*/){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())

function calculateCartPrice(...val1){
    return val1
}
// the three dots here are the rest operator is puts all the incoming values in an array it can be used in places like shopping cart
console.log(calculateCartPrice(200,349,1839,37895))


const user = {
    username: "harsh",
    price: 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

const newArray = [200,400,3000,700]

function secondElement(anyarray){
    return anyarray[1]
}

console.log(secondElement(newArray))