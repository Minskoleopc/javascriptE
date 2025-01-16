// map(),filter(),reduce(),forEach()
// find(), findIndex() ,every() ,some()


// program 1
//                0    1     2   3
let birthYear = [2000,2001,2002,2003]
// [25,24,23,22]
let ages = []

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2025 - birthYear[i])
    ages.push(2025 - birthYear[i])
}
console.log(ages)

//            0     1   2    3
birthYear = [2000,2001,2002,2003]
let ages2 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(ages2)

let ages3 = birthYear.map(el=>2025-el)
console.log(ages3)

let numbers = [11,22,33,44]
let ages4 = numbers.map(function(el){
    return el + 10
})
console.log(ages4)

// filter()

let marks = [11,24,55,66,22,34,55,66]
let above50 = []

for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)
let above502 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(above502)

let transactions = [11,22,33,44,55,77,88,99,-99,13,-78,66,77]
let deposit = transactions.filter((el)=> el > 0)
let withdrawl = transactions.filter((el)=> el < 0)
console.log(deposit)
console.log(withdrawl)

let withdrawlTotal = transactions.filter((el)=> el < 0).reduce((acc,el)=> el + acc)
console.log(withdrawlTotal)



// let numbersB = [11,22,33]
// let total = 0

// for(let i = 0 ; i < numbersB.length ; i++){
//     total = total + numbersB[i]
//     //       0    +     11  ===> 11
//     //      11    +     22  ===> 33
//     //      33    +     33  ===> 66
// }
// console.log(total)

// let total2 = numbersB.reduce(function(acc,el,index,arr){
//     return acc + el
// },0)
// console.log(total2)

// map(), filter(),reduce()

//forEach()

let city = ["pune","mumbai","banglore"]
city.forEach(function(el){
    console.log("welcome "+ el)
})

// find()
marks = [11,24,55,66,22,34,55,6]
console.log(marks.filter((el)=>el >50))
console.log(marks.find((el)=>el >50))

// findIndex()
console.log(marks.findIndex((el)=>el >50))
// some()

// every()
marks = [11,24,55,66,22,34,55,6]
let q22 = marks.every(function(el){
    return el > 10
})
console.log(q22)

let q2 = marks.some(function(el){
    return el > 60
})
console.log(q2)


