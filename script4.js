//            0           1       2
let names = ["chinmay","sarika","pooja"]
console.log(names[0])
console.log(names[2])

// length -1 is always lastIndex
//              0        1        2        3
let fruits = ["papaya","mango","banana","grapes"]
console.log(fruits[1])

// update 
fruits[1] = "orange"

// program 2
//              0       1          2          3       4
let cities = ["pune","mumbai","bangalore","kolkata","chennai"]

// for 

for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log(cities[i])
}
// while
let i = 0
while(i < cities.length){
    console.log(cities[i])
    i = i + 1
}


// reverse - for loop
//          0       1         2           3         4
cities = ["pune","mumbai","bangalore","kolkata","chennai"]
for(let i = cities.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(cities[i])
}

// program 3

// js everthing is object 
// properties and method 

// gym() 
// action - exercise
// return - health

let animals = ["tiger","lion","rabbit"]
console.log(animals.length)



// push()
// action - add the element to end of array
// return - new length of array
let q1 = animals.push("snake")
console.log(animals)
console.log(q1)

// unshift()
// action - add the element at start of array
// return - new length of array
animals = ["tiger","lion","rabbit"]
let q2 = animals.unshift("snake")
console.log(animals)
console.log(q2)

// pop()
animals = ["tiger","lion","rabbit"]
let q3 = animals.pop()
console.log(animals)
console.log(q3)

// shift()
animals = ["tiger","lion","rabbit"]
let q4 = animals.shift()
console.log(animals)
console.log(q4)

// push() , unshift() , pop(), shift() , indexOf()

// indexOf()
animals = ["tiger","lion","rabbit"]
let q5 = animals.indexOf('Tiger')
console.log(q5)

// includes()
animals = ["tiger","lion","rabbit"]
let q6  = animals.includes("Tiger")
console.log(q6)

// reverse()
animals = ["tiger","lion","rabbit"]
let q7 = animals.reverse()
console.log(q7)

