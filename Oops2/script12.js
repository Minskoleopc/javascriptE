// Assignment

let a = 10
a = 1000
console.log(a)

// const j = 10000
// j = 9999

var e = 10
e = 1000
console.log(e)

// let is block scoped
let a1 = 100
{
    let a1 = 2000
    console.log(a1) // 2000
}
console.log(a1) //100

let b1 = 100
{
    b1 = 3000
    console.log(b1) // 3000
}
console.log(b1) // 3000

// program 1
const h = 10000
{
    const h = 40000
    console.log(h) // 40000
}
console.log(h) // 10000


const h1 = 10000
{
     h1 = 40000
    console.log(h1) 
}
console.log(h1) 





//const is block scoped

// var is function scoped