const name = "harsh"
const repoCount = 3

console.log(name + repoCount + " value")

// this is usually outdated instead of this use backtick that uses string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// we can also declare string like this

const gameName = new String('harsh')

// by doing this we can also use methods, prototype and here they are made in key value pair

//  we can see all these methods in the chrome console if we enter the above line under prototypes

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,3) // here the last number is not included so the numbers printed will be 0,1,2
console.log(newString);

const anotherString = gameName.slice(-4,3)
// we can also pass negative values in slice in this case the last index is -1 then second last is -2 and so on
console.log(anotherString);

const newStringOne = "    harsh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://harsh.com/harsh%20singh"
console.log(url.replace("%20","-"))

console.log(url.includes("sh"))

const sentence = "the quick brown fox jumpes"
console.log(sentence.split(' ',3))