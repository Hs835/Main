myObj = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
}
// here when we do myobj[key] it is for values
for (const key in myObj){
    console.log(key + " - " + myObj[key])
}
// we can use for in for arrays but not for maps
// the difference in for in compared from for of is - the value which they return and on which data type they can iterate