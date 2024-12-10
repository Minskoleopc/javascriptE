// map() , filter() , reduce() , forEach()
// every(), some(), find() , findIndex()

//                0     1   2    3
let birthYear = [1989,1990,1992,1993]
// [35,34,33,32]

let qwerty = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2024 - el
})
console.log(qwerty)

// program 2

let numbers = [100,50,13,25,12]
let arr = numbers.filter(function(el,index,arr){
    return el < 25
})
console.log(arr)

// program 3
let numbersA = [11,22,33]
let acc = numbersA.reduce(function(acc,el,index,arr){
    return el + acc 
},0)
console.log(acc)

// program 4
//forEach
let cities  = ["pune","mumbai","banglore","kolkata","chennai"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
// program 5
//           0  1  2  3  4  5
let marks = [11,22,33,44,55,66]
// let arr2 = marks.filter(function(el,index,arr){
//     return el > 30
// })
// console.log(arr2)

// let val = marks.find(function(el,index,arr){
//     return el > 30
// })
// console.log(val)

// let val3 = marks.findIndex(function(el,index,arr){
//     return el > 30
// })
// console.log(val3)

marks = [11,22,33,44,55,66]

let arr2 = marks.every(function(el,index,arr){
    return el > 10
})
console.log(arr2)


let arr3 = marks.every(function(el,index,arr){
    return el > 20
})
console.log(arr3)

let arr4 = marks.some(function(el,index,arr){
    return el > 60
})
console.log(arr4)

let arr5 = marks.some(function(el,index,arr){
    return el > 600
})
console.log(arr5)