const user = {
    _email : "HARSH@GOOGLE.COM",
    _password : 1234,

    
        get email(){
            return `${this._email.toLowerCase()}`
        },
        set email(value){
            this._email = value
        }
    
}
const newUser = Object.create(user)
console.log(user.email)
console.log(newUser.email)
