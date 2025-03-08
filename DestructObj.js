const course = {
    coursename : "js in hindi",
    price : 999,
    coursetutor : "hitesh"

}

//course.tutor

const {coursetutor : instructor} = course 

//console.log(coursetutor);

console.log(instructor);

//jab apna kaam kisi or ke sar pe dalna ho use API kehete he 
//eg : how google verifies ur email id , ordering from restaurant we arent bothered about how the food will be prepared.

//values from API come in json format. is an object only.

/*
{
    name : 'Vibhor',  //'name'
    course : 'js in hindi',  //"course"
    price : 'free'  //"price"
}*/
//error since it is not object.
//both key and value both are string.

//APIs also come in form of Array.

/* 
[
    {},
    {},
    {}
]


*/
//javascript object notation.