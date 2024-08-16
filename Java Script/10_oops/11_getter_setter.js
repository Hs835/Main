class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `Encrypted Password: ${this._password}`
    }

    set password(value){
        this._password = value
    }
}

const newUser = new User("harsh@google.com", 1234)
console.log(newUser.password)

