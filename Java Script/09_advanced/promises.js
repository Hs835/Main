// const promiseOne = new Promise(function(resolve,reject){
//     // can do async tasks like
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task completed")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async 2 Completed")
//         resolve()
// },1000)}).then(function(){
//     console.log("Promise Consumed 2")
// })

// const promiseThree = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         resolve({username:"harsh", email: "harsh@google.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
//     console.log(user.username)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({newUser:"harsh", password:"12345678"})
//         }else{
//             reject('ERROR: something went worng')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.newUser
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })

// // so the resolve is for when the works done reject is for errors and finally is kindoff a default case

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({language:"Java", password:"12345678"})
//         }else{
//             reject('ERROR: Java went worng')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error)
//     }
// }
// // we cannot use catch here so we cannot handle errors here so we can use try catch block
// consumePromiseFive()

// async function getdata(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("ERRR",error)
//     }
// }

// getdata()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log('ERROR: Something went wrong.'))