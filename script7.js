// map()

let birthYear = [2000,1999,1998,1997]
let ages = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(ages)

let numbers = [11,22,33,44,55]
let q1 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q1)

// filter()
let numbers2  = [22,33,44,55,33,44,55,66,77,22]
let q2 = numbers2.filter(function(el,index,arr){
    return el > 50
})
console.log(q2)

let transactions = [12,45,66,77,33,4,-66,-77,88,100]

let withdrawls  = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawls)

let deposit  = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)


// reduce()

let numbersC = [11,22,33]
let q4 = numbersC.reduce(function(acc ,el,index,arr){
    return acc + el
},5)
console.log(q4)


// forEach()

let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log('welcome '+ el)
})


// find()
//           0   1 2  3  4  5  6  7 8  9
let marks = [55,66,33,44,55,66,77,9,99,100]
let q6 =marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q6)

let q7 =marks.find(function(el,index,arr){
    return el > 60
})
console.log(q7)



// findIndex()

let q8 =marks.findIndex(function(el,index,arr){
    return el > 60
})
console.log(q8)




// every()

let marksC = [11,22,33,44,112]
let q5 = marksC.every(function(el,index,arr){
    return el > 11
})
console.log(q5)

// some()
let q11 = marksC.some(function(el,index,arr){
    return el > 111
})
console.log(q11)

// sort()

let cities2 = ["chandrapur","mumbai","kolkata","agra"]
let e3 = cities2.sort()
console.log(e3)