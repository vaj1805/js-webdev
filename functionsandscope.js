function addTwoNumbers(number1 , number2) {
    console.log(number1 + number2);
    
}

//const result = addTwoNumbers(3 , 5);

function userMessageLogin(username) {
    if(username == undefined) {
        //also written as !username in if paarams.
        console.log("Please enter a username");
        return
    }
    return `hello ${username} , you have just logged in.`
}

//console.log(userMessageLogin()) //when u dont pass anything in function , then undefined is returned.

function calculateCartPrice(val1 , val2 , ...num1) {    //... can be defined as rest and spread operator.
    return num1
}

//console.log(calculateCartPrice(200 , 400 , 500, 47874 , 84848,4848493));

const user = {
    username : "vibhor",
    price : 2000
}

function handleObject(any_object) {
    console.log(`username is ${any_object.username} and price is ${any_object.price}`)
    return any_object
}

handleObject({
    username : "vaj",
    price : 300
})


const arr = [34,56,4,2,78,6]

function returnValue(arr) {
    return arr[1];
}

console.log(returnValue(arr))
