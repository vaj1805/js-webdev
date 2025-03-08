const mySym = Symbol("key1")


//this is example of literals type object
const JsUser = {
    name : "Vibhor",
    "full name": "Vibhor Jain",
    [mySym]: "mykey1",
    age: 18,
    location: "ahmedbad",
    email: "vibhor@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "vibhor.jain@chatgpt.com"
Object.freeze(JsUser)

JsUser.email = "vibhorjain@microsoft.com"
console.log(JsUser.email)

JsUser.greeting = function() {
    console.log("hello JS user")
}

JsUser.greeting2 = function() {
    console.log(`Hello JsUser, ${this.name}`); //since we re referencing a object we use this
    
}

