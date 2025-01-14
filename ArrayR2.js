

// program 1
//              0          1        2       3      4
let names  = ["chinmay","sarika","poorva","rani","mayuri"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 // 1 // 2 // 3 // 4
    console.log(names[i])
}

// program 2
//             0         1        2         3         4
let cities2 = ["pune","mumbai","bangalore","kolkata","chennai"]
cities2[0] = "raipur"
console.log(cities2)

for(let i = 0 ; i < cities2.length; i++ ){
    //console.log(i)
    console.log(cities2[i])
}

let i1 = 0
while(i1 < cities2.length){
    //console.log(i1)
    console.log(cities2[i1])
    i1 = i1 + 1
}

// type --- properties and methods 
//Method 
// Gym 
// action - excercise
// return  - health

//push()
//              0        1        2       3        4
let fruits = ["apple","mango","banana","orange","grapes"]
let q1 = fruits.push("chikoo")
console.log(fruits)
console.log(q1)

// unshift()
let fruits2 = ["apple","mango","banana"]
let q2 = fruits2.unshift("papaya")
console.log(q2)
console.log(fruits2)
// pop()

fruits2 = ["apple","mango","banana"]
let q3 = fruits2.pop()
console.log(fruits2)
console.log(q3)


// shift()
fruits2 = ["apple","mango","banana"]
let q4 = fruits2.shift()
console.log(q4)
console.log(fruits2)

// push(), unshit(),pop(), shift()
// includes()
let cities3 = ["mumbai","banglore","chennai"]
let q5 = cities3.includes("Mumbai")
console.log(q5)

// indexOf()
cities3 = ["mumbai","banglore","chennai"]
let q6 = cities3.indexOf("Chennai")
console.log(q6)

//at()
//             0        1         2
cities3 = ["mumbai","banglore","chennai"]
//            -3          -2         -1
let q7 = cities3.at(-1)
console.log(q7)


