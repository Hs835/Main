class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static cerateID(){
        return `1234`
    }
}

// if you even make a child who inherets it wont be able to access static method

const newUser = new User("harsh")
console.log(newUser.cerateID())
