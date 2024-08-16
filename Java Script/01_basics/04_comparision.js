console.log("2">1);
console.log("02">1);
// here the string is converted into number and then compared

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// when comparing equal and greater than/less than work differnet then others they convert the null character to zero thats why 1st and second are false but 3rd is true
// and everything is false for undefined


// ===

console.log("2" == 2);
console.log("2" === 2);

// checks if the values are equal or not but more strictly as it also checks the data type of them