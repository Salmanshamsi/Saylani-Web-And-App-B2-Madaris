var obj ={
    id: "123",
    name: "salman",
    contact:"21892893"
}

// console.log(Object.values(obj));


// normal object

// {
//    key : value 
//    key : value 
//    key : value 
// }              

//map object

// var obj = new Map([
//     ["key", "value"],
//     ["key", "value"],
//     ["key", "value"],
//     ["key", "value"],
// ]);

// MAP 

let map = new Map(); //map object..

// any type of keys...

map.set("str","string");
map.set(1,"numeric");
map.set(true,"boolean");

// console.log(" size  ",map.size); //3
// console.log(" KEYs ",map.keys()); // "str" 1 true 
// console.log(" values ",map.values()); // "string" "numeric" "boolean"
// console.log(" entries ",map.entries()); // "str" 1 true

var obj = map.entries();
var keys = [];
var values = [];

for(var val of obj){
    keys.unshift(val[0])
    values.unshift(val[1])
}

// console.log(keys);
// console.log(values);

var userOBJ = {
    id: "45678",
    name: "salman"
}


// console.log(Object.entries(userOBJ)); // ==>  [ ["id" , "45678"] , ["name" , "salman"] ];

// Set.....

// var userMapOBJ = new Set(Object.entries(userOBJ));
// var userSetOBJ = new Set([
//     ["id", "12345"],
//     ["name", "salman"],
// ]);
// console.log(" map obj ", userMapOBJ.add(["contact","12344545"]));



// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);

//   console.log(prices.banana);

// console.log(map.get(true));


// var userSetOBJ = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// userSetOBJ.add(john);
// userSetOBJ.add(pete);
// userSetOBJ.add(mary);
// userSetOBJ.add(john);
// userSetOBJ.add(mary);

// for(var user of userSetOBJ){
//     console.log( " user : ", user.name)
// }

// console.log(userSetOBJ);

var users = ["salman","abdullah","usman","subhan"];

// var salman = users[0];
// var abdullah = users[1];


// Array Destructuring....

var [salman, abdullah] = users;

console.log(salman, abdullah);
