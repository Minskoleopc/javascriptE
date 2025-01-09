// new
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     rollNo:23
// }

// let amol = {
//     firstName:"amol",
//     lastname:"deshpande",
//     age:45,
//     rollNo:44
// } 

// user ddefined data type

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}
let amol = new Person()
console.log(amol)
// object --- dot notationa and bracket notation
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 23
amol.rollNo = 33
console.log(amol)

// program 2
// creating a object from class using constructor

class PersonB{
    constructor(fn,ln,rollNo,age){
        this.firstName = fn
        this.lastName = ln 
        this.rollNo = rollNo
        this.age = age
    }
}
let amolB = new PersonB("amol","rao",34,45)
let chinmayB = new PersonB("chinmay","deshpande",34,45)
console.log(amolB)
console.log(chinmayB)

chinmayB.language = "marathi"
console.log(chinmayB)
console.log(amolB)

// Setting the value using set  method

class PersonD {

    setFirstName(fn){
        this.firstName = fn
    }

    
    setLastName(ln){
        this.lastName = ln
    }

    
    setAge(ag){
        this.age = ag
    }

    
    setRollNo(rn){
        this.rollNo = rn
    }
}

let amolD = new PersonD()
console.log(amolD)
amolD.setFirstName("amold")
amolD.setLastName('raod')
amolD.setRollNo(23)
amolD.setAge(23)
console.log(amolD)