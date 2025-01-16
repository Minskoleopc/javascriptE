// destructing 

//             0      1     2      3
let names = ["amol","ram","sham","satish"]

// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [a,b,c,d]  = names
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// program 2
let fruits = ["apple","mango","banana", "orange"]
let [a1,,c1,d1] = fruits
console.log(a1)
console.log(c1)
console.log(d1)

// program 3

let states = [
    ["nagpur","wardha"],
    ["bhopal","indore"],
    ["jaipur","udaipur"]
]

let [[cc1,cc2],[cc3,cc4],[cc5,cc6]] = states
console.log(cc3)
console.log(cc6)

// program 4

let info = {
    firstName:'chinmay',
    lastName:'deshpande'
}

//let {firstName,lastName} = info
// console.log(firstName)
// console.log(lastName)
// let {firstName:fn,lastName:ln} = info
// console.log(fn)
// console.log(ln)

// program 4

let vehicle = {
    color:"red",
    company:"audi"
}
// let {color,company} = vehicle
// console.log(color)
// console.log(company)
let {color:cl,company:cn} = vehicle
console.log(cl)
console.log(cn)

// program 5
let vehicles = {
    vehiceOne:{
        color:"blue",
        type:"sedane"
    },
    vehicleTwo:{
        color:"red",
        type:"SUV"
    }
}
let {vehiceOne:{color:c11,type:t11},vehicleTwo:{color:c22,type:t22}}
 = vehicles
console.log(c11)
console.log(t22)

// program 5

let students = [
    {
        fn:"chinmay",
        ln:"deshpande"
    },
    {
        fn:"samay",
        ln:"dani"
    }
]
let [{fn:ff1,ln:l11},{fn:ff2,ln:ll2}] = students
console.log(ff1)
console.log(l11)
console.log(ff2)
console.log(ll2)