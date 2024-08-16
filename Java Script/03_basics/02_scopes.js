// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    var c = 30

}

// console.log(a)
// console.log(b)
console.log(c)

// so as we know there are block scope and global scope but var doesn't follow those and creates problem like in this case var declared in a block should not have been accessible outside the block like let and const thus it is recommended to not use it

function one(){
    const username = "harsh"
    function two(){
        const editor = "vscode"
        console.log(username)
    }
    // console.log(editor)
    two()
}
// this is also called closure where the child block can use the elements of parent block but the parent element can't do the same
one()


// ***********************************************

console.log(addone(5))
// here we can access the function before initialization
function addone(num){
    return num +1
}


// console.log(addtwo(6))
// we cannot the function before intialization in this case we used a variable to hold the value of the function and in the previous case it was done normally

const addtwo = function (num){
    return num+2
}

