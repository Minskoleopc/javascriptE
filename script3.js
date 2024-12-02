// program 1
// array of string
//             0          1       2       3
let names = ["chinmay","poorva","sham","sachin"]
console.log(names)

// retrive the element 
console.log(names[0])
console.log(names[1])

// update the value for particular element 
names [0] = "tanmay"
console.log(names)

// program 2
// numbers array
let numbers = [11,22,33,44,55]
console.log(numbers)
console.log(numbers[0])

// program 3
// mixed array 
let mixedArray = [11,22,"chinmay","rahul",true]
console.log(mixedArray)

// loops through array 

// program 4
//            0       1         2          3        4
let city = ["pune","mumbai","banglore","kolkata","chennai"]
console.log(city[0])

// Everything in js is object 
// Object will have properties and methods
// length

console.log(city.length)

// for loop 
for(let i = 0 ; i < city.length ; i++){ //1 // 2 // 3 // 4 // 5
    //console.log(i) // 0   // 1 // 2 // 3 // 4
    console.log(city[i])
}

//              0        1       2       3
let fruits = ["apple","mango","grapes","papaya"]
for(let i = 0 ; i < fruits.length ; i++){
   // console.log(i)
    console.log(fruits[i])
}

// while loop

let i1 = 0
while(i1 < fruits.length){
    //console.log(i1)
    console.log(fruits[i1])
    i1 = i1 + 1
}