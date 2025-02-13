
// number as a parameter and number as a return type 

function add(x,y){
    return x + y
}
let q1 = add(12,3)
console.log(q1)

// string as a parameter and string as return type

function greet(name){
    return "hello "+ name
}
let q2 = greet("chinmay")
console.log(q2)

// boolean as parameter and boolean as return type 

function canDrive(age,haveVehicle){
    if(age >= 18 && haveVehicle ){
        return true
    }
    else {
        return false
    }
}
let q3 = canDrive(18,true)
console.log(q3)

// array  as parameter and array as return type 

let cities = ["nagpur","wardha","mumbai","pune"]
function addCity(lst){
     lst.push('goa')
     return lst
}
let q5 = addCity(cities)
console.log(q5)

// obj as parameter and obj as return type 

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}

function addCity(obj){
    obj['city'] = "nagpur"
    return obj
}
let q6 = addCity(info)
console.log(q6)

// map as parameter and map as return type 

let roles = new Map([
    [1,"role"],
    [2,"admin"],
    [3,"customer"]
])

function deleteRole(info){
    info.delete(1)
    return info
}
let q7 = deleteRole(roles)
console.log(q7)

// set as parameter and set as return type 

let s = new Set([11,22,33])

function addValue(lstB){
    lstB.add(13)
    return lstB
}
let q8 = addValue(s)
console.log(q8)

// type of functions in js 
// function declartion 
function addA(x,y){
    return x + y
}
let q11 = addA(12,3)
console.log(q11)

// function expression 
let addB = function(x,y){
    return x + y
}
let q12 = addB(12,4)
console.log(q12)

// arrow function 

let addC = (x,y)=>{
    return x + y
}
let q13 = addC(12,4)
console.log(q13)

// function as parameter

let sub = function(x,y){
    return x - y
}

function subtraction(fn,x,y){
    // let fn = function(x,y){
    //     return x - y
    // }
    // x - 4
    // y - 2

    let q = fn(x,y)
    return q
}
let q14 = subtraction(sub,4,2)
console.log(q14) // 2


// function as return type 

// lexical scope
