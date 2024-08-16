const user = {
    username: "harsh",
    price: 150,
    welcomeMessage: function (){
        console.log(`${this.username} , welconme to website`)
        console.log(this)
    }
}
// we us this method in objects
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this)
// here this is empty because we are in node environment but in windows this is window object

function one(){
    username2 = "harsh"
    console.log(this.username2)
}
// here we get information related to our node
one()
// we can use this normal function but we cannot do so in arrow function
const two = () =>{
    let username = "harsh"
    console.log(this)
}
two()


// const addTwo = (num1, num2) =>{
//     return num1  + num2
// }
// we can write the arrow function without return and {} we can also replace {} with () and not use return
// const addTwo = (num1, num2) => num1+num2

// const addTwo = (num1, num2) => ( num1+num2 )

const addTwo = (num1, num2) => ({myName:"harsh"})
// here we used () to specify the object we are placing inside or we won't be able to do it
console.log(addTwo(3,5))