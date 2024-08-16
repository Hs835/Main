let myHeros = ["thor", "spiderman"]

let herosPower = {
    thor: "thunder",
    spiderman: "sixth sense"
}

Object.prototype.myPower = function(){
    console.log('I AM EVERYWHERE')
}

Array.prototype.sayMyName = function(){
    console.log('Hello Harsh')
}

// herosPower.myPower()
myHeros.myPower()
myHeros.sayMyName()
// herosPower.sayMyName()

// here first when we had given object the function everyone else can use it(arrays, strings) since they are object at base level but the function we give to array or string wont trasnfer to obejct 

const user= {
    username: "harsh",
    email: "harsh@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport= {
    isAvailable: false
}

const taSupprort = {
    makeAssignments: 'JS assignments',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// modern syntax :-

Object.setPrototypeOf(teachingSupport, teacher)

let username = "harsh   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.trim().length}`)
}

username.trueLength()

"harsh          ".trueLength()
