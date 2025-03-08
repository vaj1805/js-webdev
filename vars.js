let score = "33abc"

// supposing score = "33abc"
// still we get number.

//console.log(typeof(score));

let ValueInNumber = Number(score)

//console.log(typeof(ValueInNumber));

//console.log(ValueInNumber);

//NaN not a number.

// a problem with js thats why ts is used.
// if score = null, then we get output = 0.

/* 
"33" -> 33
"33abc" -> NaN

1 -> true 0 -> false.
"" -> false , "data" -> true.


*/

let isLoggedIn = "vibhor"

let booleanisLoggedIn = Boolean(isLoggedIn)  

//console.log(booleanisLoggedIn)

let someNumber = 33
let StringNumber = String(someNumber)

console.log(StringNumber)

console.log(typeof(StringNumber))
// looks like number 33 but is converted to string.

