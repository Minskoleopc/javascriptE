// let a = 10
// console.log(a)
// a = 100
// console.log(a)

const { buildCreateSlice } = require("@reduxjs/toolkit")

// const h = 1000
// console.log(h)
// h =  2000

// Arithmetic operation

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 8
let t = 4

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// function declaration 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)

// function expression 

let Calculator2 = function(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y) 
}
Calculator2(12,3)

// arrow function
let Calculator3 = (x,y)=>{
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y) 
}
Calculator3(12,3)


function addA(x,y){
    return x + y
}
let a1 = addA(12,4)
console.log(a)


let addB = function (x,y){
    return x + y
}
let a2 = addA(12,4)
console.log(a2)

let addC = x =>x + x
let a3 = addA(1)
console.log(a3)

// function declartion 
// function expression
// arrow function

// Type 

let a11 = 3
console.log(typeof a11)
// 10 , -10 ,-10.5 ,10.4,0.67

let a12 = true
console.log(typeof a12)

let a13 = "chinmay" // 'chinmay' ,`chinmay`
console.log(typeof a13)

// comparison operator 

console.log(typeof 10) // number
console.log(typeof '10') // string

// <, >,<= ,>=
// == ,!=   // value
// === ,!== // value and type

console.log(10 === 10)
console.log(10 !== '10')
console.log(10 !== 10)
console.log(10 != '10')
console.log(10 != 10)
console.log(10 == '10')
console.log(10 > 3)
console.log(10 < 3)
console.log(10 >= 3)
console.log(10 == 3)
console.log(10 >= 10)
console.log(10 <= 10)


// && 

// true   &&    true  -----> true
// true   &&    false  -----> false
// false  &&    true  -----> false
// false   &&    false  -----> false


// ||

// true   ||    true  -----> true
// true   ||    false  -----> true
// false  ||    true  -----> true
// false  ||    false  -----> false




//!
// !true - false
// !false - true

console.log(!(7 == 7))
console.log(!(7 != 7))


// conditional statements 

numt = 10

// if(numt > 0 && numt <= 5){
//     console.log("5% discount")
// }
// if(numt > 5 && numt <= 10){
//     console.log("10% discount")
// }
// if(numt > 10){
//     console.log("15% discount")
// }


// if(numt > 0 && numt <= 5){
//     console.log("5% discount")
// }
// else if(numt > 5 && numt <= 10){
//     console.log("10% discount")
// }
// else if(numt > 10){
//     console.log("15% discount")
// }
// else {
//     console.log("incorrect input ")
// }


let j = 10
let k = 5

// if(j > k){
//     console.log('j is greater')
// }
// else {
//     console.log('k is greater')
// }

j > k ? console.log("j is greater"):console.log('k is greter')
let age = 13
let r2 = age >= 18 ?"candrive":"cannotdrive"
console.log(r2)


// switch

let marks = 92

switch(marks){
    case marks >= 90:
        console.log("Grade A")
        break
    case marks >= 75:
        console.log("Grade B")
        break
    case marks >= 65:
        console.log("Grade C")
        break
    default:
        console.log("please try again")
}

// for 

for(let i = 0 ; i <= 3 ; i++){
    console.log(i)
}

for(let i = 0 ; i <= 3 ; i++){
    if(i == 2){
        break
    }
    console.log(i)
}
for(let i = 5 ; i >= 1 ; i--){
    console.log(i)
}



// while 

let i1 = 1
while(i1 <= 5){
    console.log(i1)
    i1 = i1 + 1
}

// Array -- 23 

