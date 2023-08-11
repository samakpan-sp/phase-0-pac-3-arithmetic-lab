function add(a,b){
    let result = a+b;
    return result;
}
function subtract(a,b){
    let result = a-b;
    return result;
}
function multiply(a,b){
    let result = a*b;
    return result;
}
function divide(a,b){
    let result = a/b;
    return result;
}

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}

function makeInt(string) {
    return parseInt(string, 10); // Parse as base 10 integer
  }
  
  function preserveDecimal(string) {
    return parseFloat(string); // Parse as floating-point number
  }
  

// function makeInt(n){
//     return parseInt("Nonesense!", 10)
// }

// function preserveDecimal(n) {
//     return parseFloat("2.222")
// }