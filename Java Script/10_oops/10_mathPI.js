console.log(Math.PI)
Math.PI = 4
console.log(Math.PI)

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discriptor)

const user = {
    name: 'Harsh',
    id: 217,
    isAvailable: true,
}
console.log(Object.getOwnPropertyDescriptor(user, "name"))

Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(user, "name"))

for(let [key, value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}
