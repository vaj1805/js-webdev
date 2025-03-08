/* const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
     
    default:
        console.log("default case matched")
        break;
} */

const userEmail = "vajra.ai"

if(userEmail) {
    console.log("hello user");
     
} else {
    console.log("dont have user email");
}

// falsy values : false , 0, -0, null , NaN , undefined, "", BigInt, 0n

//truthy values : "0" , 'false', " ", [] , {}, function() {}

//Nullish Coalescing Operator (??): null , undefined

// used when u call from databases , use firebase etc..then u could get 2 values , response could
// be null or undefined which could hamper code structure.

let val1;
val1 = 5 ?? 10

console.log(val1);  

val2 = null ?? 267
console.log(val2);  //* this is numeric but in real code there could be a function return value.
//where one return value could be null or undefined.

//ternary operator : condition ? true : false