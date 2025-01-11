// let fn = "chinmay"
// let ln = 'deshpande'
// let mn = `shirih`

// console.log(typeof fn)
// console.log(typeof ln)
// console.log(typeof mn)

// // program 2

// // string + string  ----> string 
// // number + string  ----> string 
// // string + number  ----> string 
// // number + number  ----> number 

// let  a = 10
// let  b = 5
// let  c = 'hello' 

// console.log(a + c + b)
// // 10 + 'hello' + 5
// // '10hello5'
// console.log(c+ a + b )

// // "hello" + 10 + 5
// // 'hello10'+ 5
// //  'hello105'
// console.log(a + b + c)
// // number + number + string
// //   10 + 5 + "hello"
// //     15 + "hello"
// //       "15 hello"

// // program 3
// // string concat

// let firstName = "chinmay"
// let lastName = 'deshpande'

// // My firstName is chinmay and my lastName is Deshpande

// console.log("My firstName is "+firstName+" and my lastName is "+lastName)
// console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)


// // program 4
// // Does string stores the value by index ??

// let city = "pune"
// // 0    1    2   3
// // p    u    n   e
// console.log(city[0])
// console.log(city[1])

// for(let i = 0 ; i < city.length ; i++){
//     //console.log(i)
//     console.log(city[i])
// }

// let city2 = "nagpur"
// // 0   1   2   3   4  5
// // n   a   g   p   u  r

// let i2 = 0 
// while(i2 < city2.length){
//     //console.log(i2)
//     console.log(city2[i2])
//     i2 = i2 + 1
// }

// // program 5
// // Object 
// // Object properties and methods 
// let fnn = "Chinmay"
// let q1 = fnn.toUpperCase()
// console.log(q1)

// fnn = "Chinmay"
// let q2 = fnn.toLowerCase()
// console.log(q2)

// // replace()
// info = "I am learning javascript"
// let q3 = info.replace("javascript","python")
// console.log(q3)

// // startsWith()
// let country = "india"
// let q4 = country.startsWith('I')
// let q5 = country.startsWith('ind')
// console.log(q4)
// console.log(q5)
// // endsWith()
// let country3 = "cuba"
// let q6 = country3.endsWith("a")
// let q7 = country3.endsWith("ba")
// console.log(q6)
// console.log(q7)
// // includes()
// let fruits = "apple"
// let q8 = fruits.includes('pp')
// console.log(q8)

// // trim()
// let city10 = ' goa '
// console.log(city10.length)
// let q9 = city10.trim()
// console.log(q9.length)
// // trimStart()
// city10 = ' goa'
// console.log(city10.length)
// let q11 = city10.trimStart()
// console.log(q11)
// console.log(q11.length)
// // trimEnd()
// city10 = ' goa '
// console.log(city10.length)
// let q12 = city10.trimEnd()
// console.log(q12)
// console.log(q12.length)

// split()

let info2 = ["chinmay","deshpande","7709192441"]
let q13 = info2.join('-')
console.log(q13)

// chinmay-deshpande-7709192441
let q34 = q13.split('-')
console.log(q34)
//["chinmay","deshpande","7709192441"]
//["chinm","y-deshp","nde-7709192441"]

let q3 = q13.split('a')
console.log(q3)




