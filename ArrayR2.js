let birthYear = [2000,2001,2002,2003]
let ages = []
for(let i = 0 ; i < birthYear.length ; i++){
    // console.log(i)
    // console.log(birthYear[i])
    // console.log(2024 - birthYear[i])

    ages.push(2024-birthYear[i])
}
console.log(ages)

let arr = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(arr)

let numbers  = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let arr2 = numbers.map(function(el,index,chinmay){
    return el * 2
})
console.log(arr2)

// program 2

let marks = [78,89,33,44,55,66,89,22]
let above60 = []

for(let i = 0 ; i < marks.length ; i++){
    console.log(i)
    console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

let arr3 = marks.filter(function(el,index,arr){
    return  el > 60
})
console.log(arr3)

let transactions = [33,44,656,-90,67,88,-90,77,-66]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

// program 3

let numberB = [11,22,33]
let total = 0

for(let i = 0 ; i < numberB.length ; i++){
    total = total + numberB[i]
//           0    +     11
//           11   +     22
//           33   +     33
}
console.log(total)
let e = numberB.reduce(function(acc,el,index,arr){
    return acc + el  // 66
},5)
console.log(e)

// program 4 

let cities = ["pune","mumbai","bangalore"]

for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+cities[i])
}

cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
