// for of 
//for cases like array of strings/objects
// ["", "" , ""]
// [{}, {}, {}]
// it automatically detects the length and works accordingly
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

let map = new Map()
map.set(1,'a')
map.set(2,'b')
map.set(3,'c')
map.set(4,'d')
// map is used - only has unique values and remembers the order of entries
console.log(map)

// normally when using for of in map it returns key value pair in arrays seperately to avoid that we use [] which destructures it
for (const key of map) {
    console.log(key);
}
for (const [key , value] of map) {
   // console.log(key,":- ", value);
}


// let myObj = {
//     a:1,
//     b:2,
//     c:3, 
// }
// // we cannot iterate objects with for of 
// for (const [key , value] of myObj) {
//     console.log(key,":- ", value);
// }


