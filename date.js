let myTimeStamp = Date.now();

console.log(myTimeStamp);

let nEwDate = new Date()
console.log(nEwDate);
//has more moethods get date get month etc.

nEwDate.toLocaleString('default' , {
    weekday: "long",
    timeZone: "" // check for urself specific time zone.
}); // we can define an object here

