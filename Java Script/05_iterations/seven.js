const myNumbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]
// map
// const newNums = myNumbers.map( (num) => num + 10)

// chaining
// the result that goes into second method is the one that is gets from first method not the orignal

const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num > 40)
console.log(newNums)