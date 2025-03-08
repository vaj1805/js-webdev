//for of loop 

/*
["" , "", ""]
[{}, {}, {}] 
for of is used to iterate over objects and strings
etc.
*/

const arr = [1,2,34,4,5]



for(const num of arr) {
    //console.log(num)
}

const myObject = {
    game1 : 'NFS',
    game2 : 'gta-5',
    game3 : 'blackmyth'
}

//for in loops : mostly for iterating objects.

for(const key in myObject) {
    //console.log(myObject[key]); // 
}

const programs = ['js' , 'java', 'cpp', 'python']

for(const key in programs) {
    //console.log(programs[key]);
}

//map cannot be iterated in this fashion.

const coding = ['js', 'ruby', 'c++', 'java', 'python']

//forEach requires a callback func in input.
//parameter is iterator since it knows it is running in array.
coding.forEach(function (val) { 
    //console.log(val);
}) 

const myCoding = [
    {
        languageName : "javascript",
        langauageFileName : "js"
    },
    {
        languageName : "python",
        langauageFileName : "py"
    },
    {
        languageName : "c++",
        langauageFileName : "cpp"
    }
    
]

myCoding.forEach( (item) => {
    //console.log(item.languageName);
})

//by default array had keys numbered from 0 to n, tahts why Object came so as to store any type of key.
 

const map = new Map()
map.set('IN', "India") 
map.set('USA', "United States") 
map.set('Fr', "France") 
map.set('JK', "JammuK") 

for(const key in map) {
    //console.log(key); wont run since not iteratable.
    
}
