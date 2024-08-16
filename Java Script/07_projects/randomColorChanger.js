const randomColor= function(){
    const coding = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0;i<6;i++){
        let random = Math.floor(Math.random()*16)
        color += coding[random]
    }
    return color;
}
let intervalId;
const colorChanging = function () {
    // if(!intervalId){
    //     intervalId = setInterval(changeBg,1)
    // }
    // we can use if to have check if our code does not work after flushing intervalId but it works sooo.. 
    intervalId = setInterval(changeBg,1)
    function changeBg(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChanging = function(){
    clearInterval(intervalId)
    intervalId = null
    // we can flush out the 
}

document.querySelector('#start').addEventListener('click',colorChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)