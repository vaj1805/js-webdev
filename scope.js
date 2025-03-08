let a = 300;
const b = 23
var c = 30

// when {} comes with if else , for while , switch etc it is called scope.
//dont confuse with object.

//var is not used since it does not know what scope is 

if(true) {
    let a = 10
    const b = 20
    //console.log("Inner : " , a);
    
}

//console.log(a)



//global defined can be accessed anywhere but inside scope declared vars cannot be used outside the scope entity.


function one() {
    const username = "vibhor" 

    function two() {
        const website = "youtube"

    }
}

if(true) {
    const username = "vajra"
    if(username === "vajra") {
        const website = " instagram"
        //console.log(username + website);
        
    }

    //console.log(website)
}

//console.log(usrname)

console.log(addone(5))

function addone(num) {
    return num+1
}


addTwo(5)
//since function is held by a variable hence it shows error since accessed before initialization.

const addTwo = function(num) {
    return num+2
}







