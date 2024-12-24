// push()
// pop()
// shift()
// unshift()
// indexOf()
// at()
// reverse()
// includes()


// map()

let birthYear = [1989,1990,1991,1992]
let ages = birthYear.map(function(el,index,arr){
    return 2024 - el
})
console.log(ages)

// filter()
let marks = [89,90,33,44,55,66,77,88,45,]
let above70 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(above70)


// reduce()
let numbers = [11,22,33]
let total = numbers.reduce(function(acc,el,index,arr){
    return acc + el
},9)
console.log(total)

// forEach()
let cities = ["pune","mumbai","bangalore","kolkata","chennai"]
let q1 = cities.forEach(function(el,index,arr){
    console.log(`welcome `+ el)
})
console.log(q1)

// find()
//              0  1   2 3  4  5   6  7 8
let numbers2 = [22,33,44,55,66,77,33,44,55]
let arr2 = numbers2.filter(function(el,index,arr){
    return el > 40
})
console.log(arr2)

let abc = numbers2.find(function(el,index,arr){
    return el > 40
})
console.log(abc)


// findIndex()
let cde = numbers2.findIndex(function(el,index,arr){
    return el > 40
})
console.log(cde)

// every() -- boolean  --- true or false

let numbersC = [11,22,33,44,55,66]

let r2 = numbersC.every(function(el,index,arr){
    return el > 10
})
console.log(r2)
// some() --- boolean  -- true or false

numbersC = [11,22,33,44,550,66]
let q2 = numbersC.some(function(el,index,arr){
    return el > 200
})
console.log(q2)

// join()
let info = ["chinmay","deshpande",7709192441]
e = info.join(" ")
console.log(e)


// splice()
//               0         1          2          3
let country = ["india","pakistan","srilanka","bangladesh"]
//country.pop()
// country.shift()
// console.log(country)

// country.splice(startIndex,numberOfElementsToBeDeleted)
// country.splice(startIndex,numberOfElementsToBeDeleted,rep1,rep2)

// country.splice(1,2)
//country.splice(3,1)
country.splice(1,2,"cuba","china")
console.log(country)



// slice()
// flat()
// sort() // numbers
// concat()
// fill()
// at()
// indexOf()





