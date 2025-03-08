const coding = ["js" , "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
} )

console.log(values);
//printed but return is undefined . no return value for function.

// foreach does not return value.

const Nums = [1,2,3,4,5,6,7,8,9,1001]

const newNums = []

Nums.forEach( (num) => {
    if(num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);
//or u can use filter. 
//chaining :we can use multiple .map() , .filter .reduce functions one after another without an issue. 