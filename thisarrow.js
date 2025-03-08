const user = {
    username: "vibhor",
    price : 90,

    welcomeMessage : function() {
        console.log(`${this.username} welcome to website`)
    }

    
// this is used to make current context -> inside of object
}

user.welcomeMessage()
user.username = "sam"

user.welcomeMessage()

//in node environment if u only run this, then it points to an empty object 

//console.log(this)

function xyz() {
    //console.log(this)
}

xyz()

const addnums = (num1 , num2) => {
    return num1 + num2
}

console.log(addnums(3,4))

{
    //write return keyword 
    /* another method of arrow func no need for return keyword
    const addnumbers = (num1 , num2) => (num1 + num2)
    used heavily in react.

    this is implicit return 
    
    */
    // when curly brackets are used then we do explicit return. 

}

//when arrow func used with  objects.



