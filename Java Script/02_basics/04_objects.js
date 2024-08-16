// const tinderUSer = new Object()

const tinderUSer = {}

tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false

console.log(tinderUSer)

const regularUser = {
    email: "someone@google.com",
    Fullname: {
        userFullName:{
            firstname: "Harsh",
            lastname: "Singh",
        }
    }
}

console.log(regularUser.Fullname.userFullName.firstname)


const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj3 = {5:'a', 6:'b'}

// const obj4 = Object.assign(obj1,obj2)

// console.log(obj4);
// console.log(obj1);

// assign gives the merged object to the first object in () so you should use a {} to copy the object into an empty object and not modify obj1's value 

// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    }
]

// most of the time when data comes from databases it comes in array of objects we can access it by
users[1].email

console.log(tinderUSer)
console.log(Object.keys(tinderUSer))
console.log(Object.values(tinderUSer))
console.log(Object.entries(tinderUSer))
console.log(tinderUSer.hasOwnProperty("isLoggedIn"))

// we can also use keys and values seperately

const user = {
    username: "harsh",
    age: 10
}

// user.name
// instead of writing the whole syntax everytime we can use
// this is also known as de-structuring
const {username: usrnm} = user
console.log(usrnm)
