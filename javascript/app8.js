// var cities = ["karachi","lahore","islamabad","multan","sukkar"];
// var userCity = prompt("Enter your city name !");
// var isFound = false;

//imput multan

// for(var i = 0; i < cities.length;  i++){
//     if(cities[i] === userCity.toLowerCase()){
//         isFound = "yes"
//         break;
//     }else{
//         isFound = "no"
//     }
// }   

// if(isFound){
//     console.log(" congrats your city has been founded !");
// }else{
//     console.log(" sorry your city has not  been founded !");
// }

// slice
//slice copy or extract the you selected

//           0123456789101112....
var quote = "A little folks jumps over the lazy dog";

console.log(" Original  :",quote)
console.log(" Extracted or Copied  :",quote.slice(-30))

//indexOf
// return index of the value


//       012    2     3
quote = "A little folks jumps over the jumps dog";
var isFound = quote.indexOf("x")

// console.log(" indexedOf  :",quote.indexOf("l"))
console.log(" Lastindexed  :",quote.lastIndexOf("jumps"))

console.log(isFound)

// usercity = multan

//     cities[i] === usercity
// 1   cities[0] === multan  /false   
// 2   cities[1] === multan  /false   
// 3   cities[2] === multan  /false   
// 4   cities[3] === multan  /true   
// 5   cities[4] === multan  /false   