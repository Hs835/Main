// Immediately Invoked Function Expressions(IIFE)
// we use iife in case like - we want the database to be connected immediately , to not let the global functions pollute the value inside a function
// to do this we simply wrap the function in () and put () in the end of function and put a ; after them

(function status(){
    //named iife
    console.log(`DB connected`)
})();

((name)=> {
    console.log(`DB connected two ${name}`)
})("harsh")