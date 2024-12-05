
let birthYear = [2000,2001,2002,2003]
let ages = []
for(let i = 0 ; i < birthYear.length ; i++){
    let ag = 2024 - birthYear[i] 
    ages.push(ag)
}
console.log(ages)

// push() , pop() , shift() , unshift()
// reverse() , indexof() , includes()

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(q1)

// program 2

let numbers  = [11,22,33]
// [13,24,35]
let q2 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q2)

// program 3
let marks  = [77,89,88,44,66,77]
let above70 = [] // [77,89,88,77]
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 70){
        above70.push(marks[i])
    }
}
console.log(above70)

let q3 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(q3)

// program 4
// for each
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+ cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5
let numbersB = [11,22,33]
let total = 0

for(let i = 0 ; i < numbersB.length ; i++){
    total = total + numbersB[i]
}
console.log(total)

let q4 = numbersB.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(q4)