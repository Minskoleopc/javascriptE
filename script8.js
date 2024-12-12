// slice()
//             0        1         2         3
let cities = ["pune","mumbai","bangalore","kolkata"]
//             -4      -3         -2         -1

//cities.slice(startIndex, endIndex(not included))

// console.log(cities.splice(1))
//console.log(cities.slice(1,3))
//console.log(cities.slice(0,-1))
//console.log(cities.slice(-4,3))
//console.log(cities.slice(-4,-2))
//console.log(cities.slice(-1,-4))

// splice()
//              0         1       2     3
let names = ["chinmay","sarika","ram","sham"]
// names.splice(startIndex,numberOfelements)
// names.pop()
// names.shift()
//names.splice(1,2)
// names.splice(2,1)
names.splice(2,2,"amolA","amolB")
console.log(names)

// at()
//              0        1       2       3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits.at(2))
console.log(fruits.indexOf("banana"))

// concat()

let numbersA = [11,22,33]
let numbersB = [44,55,66]
let numbserC  = numbersA.concat(numbersB)
console.log(numbserC)

// join()

let info =  ["chinmay","gmail.com"]
let q1 = info.join('-')
console.log(q1)

// fill()
//              0  1 2  3  4  5
let numbers = [11,22,33,44,55,66]
numbers.fill("#",2,5)
console.log(numbers)

// flat()

//                   0                  1                     2
//              0       1          0         1           0       1        
let states = [["Pune","Nagpur"],["Jaipur","Udaipur"],["Bhopal","Indore"]]
console.log(states[0][1])
console.log(states[2][1])
console.log(states[1][1])

console.log(states.flat())