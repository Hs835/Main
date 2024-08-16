class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    sayMyName(){
        console.log(`Hello ${this.username}`)
    }
}

const newUser = new teacher("Harsh", "harsh@google.com", 1234)
// since teacher is inheriting it will have methods of user as well
newUser.sayMyName()
newUser.logMe()

const user2 = new User("#Harsh")
user2.logMe()
// when we make a variable from class it is a instance of it not a exact copy
console.log(newUser instanceof teacher)
console.log(newUser instanceof User)