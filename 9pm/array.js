
// map(),filter(),reduce(),forEach()
// every(),some(),find(),findex()

let birthYear = [1989,1990,1991,1992]
// [36,35,34,33]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    // console.log(2025 - birthYear[i])
    ages.push(2025 - birthYear[i])
}
console.log(ages)

birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(q1)

let numbersA  = [11,22,33]
let q2 = numbersA.map(function(el,index,arr){
    return el + 10
})
console.log(q2)

// program 2

let marks = [44,55,33,44,55,66,77]
let above50 = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)

marks = [44,55,33,44,55,66,77]
let q4 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)

let transations = [11,32,-23,44,-45,66]

let deposit = transations.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = transations.filter(function(el,index,arr){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

// program 3

let ne = [11,22,33]
let total = 0

for(let i = 0 ; i < ne.length ; i++){
    total = total + ne[i]
}
console.log(total)

let q5 = ne.reduce(function(acc,el,index,arr){
    return acc + el;
},5)
console.log(q5)

// program 4

let cities = ["pune","nagpur","chennai"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}
cities.forEach(function(el,index,arr){
    console.log("welcome " + el)
})

let q8 = cities.map(function(el,index,arr){
    return ("welcome " + el)
})
console.log(q8)

//       0  1  2  3  4  5  6
marks = [44,55,33,44,55,66,77]
let q22 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q22)

let q23 = marks.find(function(el,index,arr){
    return el > 50
})
console.log(q23)

let q24 = marks.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q24)