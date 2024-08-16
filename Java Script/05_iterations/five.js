// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })

coding.forEach( (item)=> {
    //console.log(item)
})

function printMe (item){
    console.log(item)
}

// coding.forEach(printMe)
// for each also has access to index and whole array and in the arguments its in order current item > index > whole array
coding.forEach( (item, index, array)=>{
   // console.log(item, index , array)
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})