// let x = 10
// console.log(x)

// let names = ["chinmay","sarika","poorva","shraddha"]
// let numbers = [11,22,33,44,55,66,77,88]
// let info = ["chinmay","deshpande",7709192441,true]
// console.log(names)
// console.log(numbers)
// console.log(info)

// // program 2
// // Array store the value by index
// //              0        1       2        3
// let fruits = ["apple","mango","banana","grapes"]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])


// // program 3
// // for loop - print every element of array
// // index starts with zero
// // length - number of element  - 4
// // length - 1 is always the last index
// console.log(fruits.length)

// for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
//     //console.log(i) // 0 // 1 // 2 // 3
//     console.log(fruits[i])
// }
// //                   0          1          2            3
// let vegetables = ["brinjal","cabbage","cauliflower","ladyfinger"]

// for(let i = 0 ; i < vegetables.length ; i++){
//     //console.log(i)
//     console.log(vegetables[i])
// }

// // while loop print every element of array
// //              0      1          2          3         4
// let cities = ["pune","mumbai","bangalore","kolkata","chennai"]
// let i1 = 0
// while(i1 < cities.length){
//     //console.log(i1)
//     console.log(cities[i1])
//     i1  = i1 + 1
// }

// // Methods
// // Gym()
// // action ---- excercise
// // return ---- health

// // add the element at last
// let country = ["india","china","cuba","srilanka","chennai"]
// let q1 = country.push('pakistan')
// console.log(q1)
// console.log(country)

// // add the element at first
// country = ["india","china","cuba","srilanka","chennai"]
// let q2 = country.unshift('pakistan')
// console.log(q2)
// console.log(country)


// country = ["india","china","cuba","srilanka","chennai"]
// let q3 = country.pop()
// console.log(q3)
// console.log(country)

// country = ["india","china","cuba","srilanka","chennai"]
// let q4 = country.shift()
// console.log(q4)
// console.log(country)

// // push()
// // unshit()
// // pop()
// // shift()


// // includes()
// let state = ["MH","RJ","UP","MP"]
// let q11 = state.includes('MH')
// let q12 = state.includes('MH2')
// console.log(q11)
// console.log(q12)

// // reverse()
// state = ["MH","RJ","UP","MP"]
// state.reverse()
// console.log(state)

// // join()
// let info2 = ["chinmaydeshpande010","gmail.com","hello"]
// let q22 = info2.join(' ')
// console.log(q22)

// // at()
// //          0   1   2   3
// numbers = [111,222,333,444]
// console.log(numbers.at(2))

// // indexof()
// let q122 = numbers.indexOf(2222)
// console.log(q122)

// fruits = ["apple","mango","banana"]
// if(fruits.indexOf("Banana") >= 0){
//     console.log('element found')
// }
// else {
//     console.log("element not found")
// }


// program 1

//                0     1    2    3
let birthYear = [2000,2001,2002,2003]
let ages = [] // [24,23,22,21]
// [24,23,22,21]
for(let i = 0 ; i < birthYear.length; i++){
   // console.log(i)
    //console.log(birthYear[i])
    //console.log(2024 - birthYear[i])
    ages.push(2024 - birthYear[i])
}
console.log(ages)

let numbers  = [11,22,33,44,55]
let addFive  = []
for(let i = 0 ; i < numbers.length ; i++){
    // console.log(i)
    // console.log(numbers[i])
    //console.log(numbers[i] + 5)
    addFive.push(numbers[i] + 5)
}
console.log(addFive)


// program 2
let marks = [34,22,33,44,55,66,22,33]
// [44,55,66]
let above40 = []
for(let i = 0 ; i < marks.length ; i++){
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 40){
        above40.push(marks[i]) 
    }
}
console.log(above40)

let transactions = [11,22,33,-66,77,88,55,66,-77,-30]
let withdrawls = []
let deposits = []
for(let i = 0 ; i < transactions.length ; i++){
    if(transactions[i] < 0){
        withdrawls.push(transactions[i])
    }
    else {
        deposits.push(transactions[i]) 
    }
}
console.log('wr')
console.log(withdrawls)
console.log('dp')
console.log(deposits)

let numbers2 = [11,22,33]
let total = 0

for(let i = 0 ; i < numbers2.length ; i++){
    total = total + numbers2[i]
    //       0    +    11 ===> 11
    //       11   +    22 ===> 33
    //        33  +    33 ====> 66
}
console.log(total)

//              0        1        2        3
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome "+cities[i])
}