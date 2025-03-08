console.log(Array.isArray("Vibhor"));

console.log(Array.from("Vibhor"));

console.log(Array.from({name : "Vibhor"})) //new case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))

const marvel_heroes = ["ironman " , "spiderman" , "daredevil"]
const dc_heroes = ["batman" , "flash" , "wonderwoman"]

const all_new_heroes = [...marvel_heroes , ...dc_heroes];

console.log(all_new_heroes)

// for flattening multiple arrays inside arrays use .flat("specify level") defaultly do infinity.

