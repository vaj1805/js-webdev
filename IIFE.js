//immediately invoked function
//used to instantanoeusly run a function
//used in eg : db connectivity

(function bhai() {
    console.log(`DB connected`);
})();    //if not semicolon then will show error.

(function codebhai() {
    console.log(`DB connected 2`)
})()

//(definition of function)(execution call )

//due to pollution of global scope . so to remove that we use IIFE.

