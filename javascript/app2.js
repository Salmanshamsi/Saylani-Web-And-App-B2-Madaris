console.log("hello world");

// unfimiliar operators :

var num = 1; // output : 1
var result   =  ++num      //  result =  (num =     1)  + 1 /output : 2
var result2  =  ++result   //  resul2 =  (result =  2)  + 1 /output : 3
var result3  =  ++result2  //  result3 = (result =  3)  + 1 /output : 4
var result4  =  ++result3  //  result4 = (result3 = 4)  + 1 /output : 5
var nresult  =  --result4  //  result4 =   5|  - 1 = 4
var nresult2 =  --nresult  // nresult =    4|  - 1 = 3
var nresult3 =  --nresult2 // nresult2 =   3|  - 1 = 2
var nresult4 =  --nresult3 // nresult3 =   2|  - 1 = 1


var n = 1
var p = n++


console.log(p)
console.log(n)

// Mathmetical expression;

//0. 2**3 = 8 ===  2^3
//1. ( )
//2.  /
//3.  *
//4.  +
//5.  -


var exmpExpression = 8 + (3 * 2) - (4 ** 2 / 2) ; // 8 + 6 - 8  = 6
console.log(exmpExpression)
