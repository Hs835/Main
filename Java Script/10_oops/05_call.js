function setUsername(username){
    // db calls(checking if the name is avaiblable)
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)
    // we are using the call here to call the function because here using parenthisis will be only treated as giving reference
    // we are passsing this with call to help store the details in our function because as the set username is executed it will be removed from call stack deleting all its memory(variables and all data)
    this.email = email
    this.password = password
}

const user = new createUser("harsh", "harsh@google.com", "123")
console.log(user)