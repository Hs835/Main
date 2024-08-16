function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return `${this._email.toLowerCase()}`
        },
        set: function(value){
            this._email = value
        }
    })
}

const newUser = new user("HARSH@GOOGLE.COM",1234)
console.log(newUser.email)