//Promises 
//represents eventual completion or failure of an async operation and its resulting value.
/*
eg : of such operations, 
    password encrypt.
    db in different region,
    event completes in future.
    eg : in mobile dev camera or sound access mean future promises.

    3 states : pending , fulfilled , rejected
*/

const promiseOne =  new Promise(function(resolve , reject) {
    //do an async task , db calls , cryptography , n/w calls.

    setTimeout(function() {
        console.log('async task is complete');
        resolve()
    } , 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve , reject) {
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    } , 1000)
}).then(function() {
    console.log("Async task resolved");
})

const Promisethree = new Promise(function(resolve , reject) {
    setTimeout(function() {
        resolve({username : "Vibhor" , email: "vajra@gmail.com"});
    } , 1000);

})

Promisethree.then(function(user) {
    console.log(user);
})

const PromiseFour = new Promise(function(resolve , reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username : "vajra" , password : "1234"})
        } else {
            reject('Error : something went wrong')
        }
    } , 1000)   
})

PromiseFour
.then((user) => {
    console.log(user)  
    return user.username;
})
.then((username) => {
    console.log(username)
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log(" the promise is either resolved or rejected");
})
 
//promise always has a time limit (documentation) 
//we use finally to get what actually happened with the code.
//finally is default.

const PromiseFive = new Promise(function(resolve , reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username : "vajra-js" , password : "1234"})
        } else {
            reject('Error : JS went wrong')
        }
    } , 1000)
})

async function consumePromiseFive() {
    const response = await PromiseFive;
    console.log(reponse);
}
//consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error :" , error);
        
//     }

// }

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


//dumy api
// https://jsonplaceholder.typicode.com/users