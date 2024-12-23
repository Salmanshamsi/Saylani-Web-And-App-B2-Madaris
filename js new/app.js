// object refrencing and cloning..

// var a = "abdullah";
// var b = "salman";

// var b = "subhan";

// console.log(a);
// console.log(b);


var user  = {
    name: "John",
    age: 30,
    greetings () {
        console.log(this.name);
    }
}

user.greetings();
console.log(user);


// var obj2 = structuredClone(obj1);


// // cloning Manually

// for(var key in obj1){
//     obj2[key] = obj1[key];
// }

// obj2.a = "c"


// cloning by their method...

// Object.assign(obj2, obj1);

// obj2.b.X = "c"

// console.log("ob1 :",obj1);
// console.log("ob2 :",obj2);






