// console.log("hello world");

// //constructor........

function User (id, name , email, land_line ,cell) {
    this.id = id
    this.name = name;
    this.email = email;
    this.contact = {
        land_line: land_line, 
        cell : cell
    }
    this.greet = function () {
        console.log("hello from ",this.name);
    }

    // return { 
    //     id:"5",
    //     name: "salman",
    //     email: "salman@gmail.com"
    // } //as a default object

}

function Car (id, name) {
    this.id = id
    this.name = name;
    this.start = function () {
        console.log(this.name + "car has been started !");
    }
}

var user = new User();

user.id = Symbol("user_id"); //unique identified value
user.name = "salman";
user.email = "test@gmail.com";
user.contact.land_line = "9282929229"
user.greet();

// var car = new Car();

// car.name = "toyota";
// car.id = Symbol("car_id");
// car["car_id"] = 1


// console.log("car : ", car);
// // var InputCarKey = prompt("Enter Car Key no");
// (car.car_id == Number(InputCarKey)) ? car.start() : console.log("car has been locked enter right key");
 
// console.log("users : ", user);

//optional chaining........
// console.log( "user :", user.contact.land_line ? user.contact.land_line : "user dont have any landline number" )
// // console.log("user :", user?.land_line); //nullcheck

  
//JSON => javascript Object notation

console.log("user js object :" , user);
console.log("user jSON :" , JSON.stringify(user));
// console.log("user jSON :" , JSON.parse(user));