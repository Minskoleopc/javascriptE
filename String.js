// String 

let firstName = "chinmay"
let lastName = 'deshpande'
let middleName = `shirish`

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)


// number + number =====> number 
// string + number =====> string 
// number + string =====> string 
// string + string =====> string 


let a = 10
let b = 5
let c = "hello"

console.log(a+b+c)
// number + number + string
    // 15 + "hello"
        // "15hello"

console.log(c+a+b)

// string + number + number
    //"hello"+ 10
        // hello10" + 5
        // "hello105"

console.log(a+c+b)
// 10 + hello + 5
//  '10hello5'


// program 3

let fn = "chinmay"
let ln = "deshpande"

// My firstName is chinmay and lastName is deshpande
console.log("My firstName is "+fn+" and  my lastName is "+ln)
console.log(`My firstName is ${fn}  and my lastName is ${ln}`)

// String stores the value by index ??

// program 4
let a1 = "pune"
console.log(a1[0])
// 0  1  2  3
// P  u  n   e
console.log(a1[0])
console.log(a1[1])

let city2 = "chandrapur"
// 0  1  2  3  4  5  6  7  8  9
// c  h  a  n  d  r  a  p  u  r

for(let i = 0 ; i < city2.length; i++){
    //console.log(i)
    console.log(city2[i])
}

let i2 = 0
while(i2 < city2.length){
    console.log(city2[i2])
    i2 = i2 + 1
}

// Javascript object 
// properties and method 
let namee = "Ram"
console.log(namee.length)

let q1 = namee.toUpperCase()
console.log(q1)

let q2 = namee.toLowerCase()
console.log(q2)














