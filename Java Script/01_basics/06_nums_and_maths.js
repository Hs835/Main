const score = 200
console.log(score);

const balance = new Number(900)
console.log(balance);

console.log(balance.toString())
console.log(balance.toFixed(2))

const otherNumber = 123.8932
console.log(otherNumber.toPrecision(4))

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-IN"))



// +++++++++++++++++++Maths+++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.2));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(4,2,5,3,6));
console.log(Math.max(4,2,5,3,6));

console.log(Math.random())
// gives random value between 0 and 1
console.log((Math.random()*10)+1)
// you can choose the multiplier based on the value you want and +1 is to avoid the 0.00 cases

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min)
// you can generate random numbers according to you by using the above line
