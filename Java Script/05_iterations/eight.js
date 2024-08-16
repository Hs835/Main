const myNums = [1, 2, 3, 4, 5]
// all in all reduce can be used to give a total more efficiently
const myTotal = myNums.reduce(function (acc,currval){
    console.log(`accumalator: ${acc} current value: ${currval}`)
    return acc + currval
},0)

console.log(myTotal)

const items = [
    {
        course: "js",
        price: 999,
    },
    {
        course: "py",
        price: 3999,
    },
    {
        course: "mobile dev",
        price: 9999,
    },
    {
        course: "cyber security",
        price: 15999,
    },
]

const priceToPay = items.reduce( (acc, currprice) => acc + currprice.price,0)
console.log(priceToPay);