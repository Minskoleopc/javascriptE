// Program 1

// class Person {
//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// amol = new Person()
// console.log(amol)
// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.age = 90
// console.log(amol)
// amol.displayName()

// Program 2
// constructor

class Person {
    constructor(fn, ln, age) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
let chinmay = new Person("chinmay", "deshpande", 23)
let amol = new Person("amol", "rao", 33)
let sarika = new Person("sarika", "pansare", 32)
console.log(chinmay)
console.log(amol)
let arr = [11, 22, 33]
let names = ["chinmay", "shirish", "sanjay"]
let booleanValues = [true, false, true]
let personObj = [chinmay, amol, sarika]

personObj.forEach(function (el) {
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
})

// program 3
// get and set method 

class PersonC {
    // constructor(fn,ln,age){
    //     this.firstName = fn 
    //     this.lastName = ln
    //     this.age = age
    // }

    setFn(fn) {
        this.firstName = fn
    }
    setLn(ln) {
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
}

let minal = new PersonC()
console.log(minal)
minal.setFn("minal")
minal.setLn("dani")
console.log(minal)


// program 4
// get and set method


let info = {
    fn:"chinmay",
    ln:"deshpande"
}
info.fn = "ram"
info.age = 23

class PersonE {
    // as property
    set FirstN(fn){
        this.firstName = fn
    }
    set LastN(ln){
        this.lastName = ln
    }

    get FirstN(){
        return this.firstName
    }
    get LastN(){
        return this.lastName
    }
}

let amolF = new PersonE()
amolF.FirstN = "amolF"
console.log(amol.FirstN)

amolF.LastN = "raoE"
console.log(amolF['FirstN'])



