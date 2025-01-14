// object literal 
let amol = {
    firstName:"amol",
    lastName:'rao',
    age:24,
    rollNo:34
}
let chinmay = {
    firstName:"chinmay",
    lastName:'deshpande',
    age:23,
    rollNo:36
}
// 1 object ====> 5 lines 
// 500 object =====> 2500 lines

class Person {
    firstName= undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}
let amolB = new Person()
console.log(amolB)
amolB.firstName = "amolB"
amolB['lastName'] = "raoB"
amolB.age = 45
amolB.rollNo  = 77
console.log(amolB)

// program 3
// Setting the values at time of object creation

class PersonC {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag
        this.rollNo = rollNo
    }
}

let amolC = new PersonC("amolC","raoC",23,56)
let amolD =  new PersonC("amolD","raoD",21,52)
console.log(amolC)
console.log(amolD)

// using setMethod 

// using set and get Keyword


