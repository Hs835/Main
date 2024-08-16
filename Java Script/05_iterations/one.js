// for (let i = 1; i <=10; i++) {
//     for (let j = 1; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);;
        
//     }
    
// }

// let myarray = ["Flash", "Superman", "Batman", "Dr. Strange"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
    
// }

for (let index = 0; index <= 10; index++) {
    if (index==5) {
        console.log("5 detected")
        break

    }
    console.log(index)
    
}

// so the difference between break and continue is break pulls you out of the loop and continue only pulls you out of the current iteration

for (let index = 0; index <= 10; index++) {
    if (index==5) {
        console.log("5 detected")
        continue

    }
    console.log(index)
    
}


