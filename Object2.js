//const InstaUser = new Object() //this is a singleton lecture


const InstaUser = {}   //this is non singleton object.

InstaUser.id = "123abc"
InstaUser.name = "Vibhor Jain"
InstaUser.isLoggedIn = false;

const RegularUser = {
    email:"vibhor@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Vibhor",
            lastname : "jain"
        }
    }

}

//console.log(RegularUser.fullname.userfullname.firstname);    
//continued nesting to access inside.
// ** if a variable DNE then we add ? after variable. used when API responses come. else we would have to use if else statements.

//console.log(InstaUser);

const Obj1 = {1 : "a"  , 2 : "b"}
const Obj2 = {3 : "c" , 4 : "d"}

const obj3 = {Obj2 , Obj1}
//console.log(obj3);  //has problem of object inside object. so use ,

const OBJ3 = Object.assign(Obj1 , Obj2)

//console.log(OBJ3) //gives concat result 

//Object.assign(target , source) provide an empty object if u have to concat more than 2 objects
//eg : const returnObj = Object.assign({} , Obj1 , Obj2 , Obj3)  otherwise all will concat in memory of Obj1
//in above syntax the result will  be stored in {} this.


//but best syntax below 

const oBJ3 = {...Obj1 , ...Obj2}
//console.log(oBJ3);

//from databases

/*const users  = {
    {
        id: 1,
        email: "abc@gmail.com"

    }
}
*/

//console.log(InstaUser)

console.log(Object.keys(InstaUser))
console.log(Object.values(InstaUser))

console.log(InstaUser.hasOwnProperty('isLoggedIn'))


//const Obj3 = {...Obj1 , ...Obj2}
