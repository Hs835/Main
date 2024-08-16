const myArr = [1,2,3,4,5]
const myArr2 = new Array(5,6,7,8,9)

console.log(myArr[3])

// Array methods

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(newArr)
console.log(typeof(newArr))
// join converts array into string seprated by commas

// slice, splice


console.log(myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log(myArr)


console.log(myArr2)
const myn2 = myArr2.splice(1,3)
console.log(myn2)
console.log(myArr2)

