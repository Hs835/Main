// class userDetails{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `Encrypted: ${this.password}`
//     }
// }

// const user = new userDetails("harsh", "harsh@google.com", 1234)
// console.log(user)
// console.log(user.encryptPassword())


// behind the scenes

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword =function(){
    return `Encrypted: ${this.password}`
}

const user2 = new user("harsh2", "harsh2@google.com", 12234)
console.log(user2)
console.log(user2.encryptPassword())
