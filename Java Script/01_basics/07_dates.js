let myDate = new Date()
// type of date is object
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());

let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023, 0,23,5,3)
// let myCreatedDate = new Date("2024-01-14")
// let myCreatedDate = new Date("14-01-2024")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))
// to compare the time in milliseconds for tasks like polls bidding etc last one is conveted to seconds

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long"
})

// you can customize the date formats to however you want accourding to your need
