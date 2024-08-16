const marvel_heros = ['ironman', 'thor', 'hulk']
const dc_heros = ['batman', 'superman', 'flash']
/*
marvel_heros.push(dc_heros)

console.log(marvel_heros)
// pushing an  array inside an array makes the whole array go inside the first as a single element 
// this tells us that array in js can have any datatype inside them
console.log(marvel_heros[3][1])
// in this case we can use concat it is different as it merges differently and also returns a new array so we need a new variable to hold the new array
*/

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

// we can also use spread which breaks the array into singular elements

const all_heros_new = [...marvel_heros, ...dc_heros]
console.log(all_heros_new)


const anotherArray = [1, 2, 3, 4, [5, 6, 6], 7, [1, 2, 3, [1, 2, 3]]]
const usableArray = anotherArray.flat(Infinity)
console.log(usableArray)


console.log(Array.isArray('harsh'))
console.log(Array.from('harsh'))
console.log(Array.from({name: 'harsh'}))// here it returns an empty value as it cannot fully convert the object


let score1 = 100
let score2 = 200
console.log(Array.of('harsh',score1, score2, 1))