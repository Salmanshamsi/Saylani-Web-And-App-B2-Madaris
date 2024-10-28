//concatination

var firstName = "salman";
var lastName = "imran";
var fullName = firstName + " " + lastName

console.log(fullName)

var num = "10";
var char = '10';

console.log(num * char)


// prompt..

    // var num1 = Number(prompt("enter 1st number !"));
    // console.log(num1,typeof(num1));

    //type casting

    // console.log(num1,typeof(String(num1)));
    // console.log(num1,typeof(Boolean(num1)));

//condition 
// case true 
// case true 
// case true 

    if(false){
        
    }else if(true){

    }


    if(true && false){
        console.log("hello world 1") 
    }else{
        console.log("hello world 2") 
        if(true && false){
            console.log("hello world 2") 
        }else{
            console.log("hello world 1") 
        }
    }

    // calculators


var num1 = Number(prompt("enter 1st number !"));
var opr = prompt("enter operator !");
var num2 = Number(prompt("enter 2nd number !"));
var result;    

if(opr === "+"){
    result = num1 + num2; 
}else if(opr === "-"){
    result = num1 - num2; 
}else if(opr === "*"){
    result = num1 * num2; 
}else if(opr === "/"){
    result = num1 / num2; 
}else{
    console.log("re-try operator are incorrect");
}

// result  => true/false == (result === undefine) => true/false

if(result){
    console.log("your calculated result is :" + " " ,result);
}else{
    console.log("no result found ! ");
}


