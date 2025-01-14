// // let  city = ["pune","mumbai","banglore","kolkata"]
// // let q1 = city.push("nagpur")
// // console.log(q1)
// // console.log(city)

// // city =  ["pune","mumbai","banglore","kolkata"]
// // let q2 = city.unshift("jaipur")
// // console.log(q2)
// // console.log(city)

// // city3 = ["pune","mumbai","banglore","kolkata"]
// // let q22 = city3.pop()
// // console.log(q22)

// // city3 = ["pune","mumbai","banglore","kolkata"]
// // let q23 = city3.shift()
// // console.log(q23)



// // program 2
// //         0        1         2          3
// cities = ["pune","mumbai","banglore","kolkata"]
// let r1 = cities.includes("Pune")
// console.log(r1)

// // program 3

// cities = ["pune","mumbai","banglore","kolkata"]
// let r22 = cities.indexOf("Pune")
// console.log(r22)

// //         0       1         2          3
// cities = ["pune","mumbai","banglore","kolkata"]
// //         -3        -2          -2          -1
// let r24 = cities.indexOf("pune")
// console.log(r24)

// let q1 = cities.at(2)
// console.log(q1)


// map() , filter() , reduce() , forEach()
// every() , some(), find() , findIndex()



// program 1
//                0     1   2    3
// let birthYear = [1989,1990,1991,1992]
// let ages = []
// //[36,35,34,33]

// for(let i = 0 ; i <  birthYear.length ; i++){
//     //console.log(i)
//     //console.log(2025 - birthYear[i])
//     //console.log(2025 - birthYear[i])
//     let ag = 2025 - birthYear[i]
//     ages.push(ag)
// }
// console.log(ages)



// program 2
// filter 
//            0   1  2 3  4  5  6
// let marks  = [22,78,77,76,75,74,66]
// let above75  = []
// // [78,77,76]
// for(let i = 0 ; i < marks.length ; i++){
//    // console.log(i)
//    //console.log(marks[i])
//    if(marks[i] > 75){
//      above75.push(marks[i])
//    }
// }
// console.log(above75)

// program 3
// let numbers = [11,22,33]
// let total = 0
// for(let i = 0 ; i < numbers.length ; i++){
//     //console.log(i)
//     //console.log(numbers[i])
//     total = total + numbers[i]
//     //       0    +    11    ------------> 11
//     //       11   +    22    -------------> 33
//     //       33    +   33     ------------> 66
// }
// console.log(total)

// program 4

let cities = ["chennai","pune","banglore"]

for(let i = 0 ; i < cities.length ; i++){
    //console.log(i)
    console.log("welcome"+cities[i])
}















