var a  =  "a little folks jumps over a lazy dog !";
// console.log("index", a.length - 1)
// console.log("charAt(0) :", a.charAt(a.length - 1));


// var inputChar = prompt("input char to find !");
var foundChar = null;
var foundCharIndex = null;

for(var i = 0; i < a.length; i++ ){
    // if(inputChar === a[i]){
    //    foundChar = true;
    //    foundCharIndex = i;
    //    break; 
    // }
}

// console.log(a);

if(foundChar){
    // console.log("char has been found at index :", foundCharIndex );
}else{
    // console.log("char has not been found !");
}


///replace......................

// console.log("before", a)
// console.log("after :", a.replace(/a/g,"b"));

//MATH

var num = 9.2; // Int or Number 12 -12 12.12
// if  decimal <= 4 current number oterhwise next same as negative .  

console.log("round : ", Math.round(num) ); // nearst
console.log("floor : ", Math.floor(num) ); // lowest
console.log("ceil : ", Math.ceil(num) );  // highest




// for(var i = 0; i < 5; i++){
//     var random = Math.round(Math.random() * 10000000).toString();
//     if( random.length <= 7 ){
//         console.log("new random numbre generated !","index is :",i, "generated number : ", random, "generated number : ", random.length)
//     }
// }

// var random = Math.round(Math.random() * 6)
// var ludo = 1;

// if(ludo !== 0){
//      ludo = random
//      console.log("new turn :", random );
// }

var inputNumber = prompt("Enter number !");
const typedCastedNumber = parseInt(inputNumber);
const floatCastedNumber = parseFloat(inputNumber);
console.log("output :", typedCastedNumber, floatCastedNumber,  typeof(typedCastedNumber))




