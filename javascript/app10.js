var product = 9.999995;
var taxRate = 6.5;
var total = product + (product * taxRate);

// console.log("product total amount is :", "$" + total.toFixed(5));

var str = product.toString(); //string 74.66910000000001

if (str.charAt(str.length - 1) === "5") { //1 === 5

    str = str.slice(0, str.length - 1) + "6"; 

}
num = Number(str);
prettyNum = num.toFixed(2);

console.log(prettyNum);


// dates ..

//"Mon Nov 25 2024 15:15:48 GMT+0500 (Pakistan Standard Time)"

var date = new Date("feb 20, 2045"); // date object and current date //date string
// var time = ((date.getTime())/(1000*60*60)).toFixed()
console.log(date);
// console.log(date.getMilliseconds());
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear());
// console.log(date.getTimezoneOffset())

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)

// var day = date.toString().slice(0,4); 
// var month = date.toString().slice(4,8); 
// var _date = date.toString().slice(8,11); 
// var year = date.toString().slice(11,16); 
// var year = date.toString().slice(16,25); 

// console.log(date); // Day Month Date (year Hours Minutes:24) Seconds GMT 
// console.log(day); // Day
// console.log(month); // month 
// console.log(_date); // date 
// console.log(year); // date 





