/*console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
*/

/* 
== is different from >= , <= , > < . comparisons convert null to number , treating it as 0.
therefore, null >= 0 is true since null is converted to 1.

problem with js , typescript is similar just has stricter rules.

comparison bw == , === and logical ops is different.

*/

//console.log("02" > 1);


//primitive

//7 types : String , Number , Boolean , null , undefined , Symbol , BigInt.

// reference type : reference in memory can be allocated directly. 
// arrays , Objects , Functions

const id = Symbol('2123')
const anotherId = Symbol('2123')

console.log(id === anotherId)

