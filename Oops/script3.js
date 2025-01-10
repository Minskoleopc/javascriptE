
// // object literal

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:24,
//     rollNo:34
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:25,
//     rollNo:35

// }

// // User defined data type 
// // program 2
// class Person {
//     firstName= undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined
// }
// let amolE = new Person()
// console.log(amolE)

// amolE.firstName = 'amolE'
// amolE.lastName = 'raoE'
// amolE.age = 12
// amolE.rollNo = 34
// console.log(amolE)

// // Setting the object value at the time of object creation

// class PersonD {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln 
//         this.age = age
//         this.rollNo = rollNo  
//     }
// }
// let amolD = new PersonD("amolD","raoD",34,55)
// let sarikaD = new PersonD("sarikaD","PansareD",34,56)

// console.log(amolD)
// console.log(sarikaD)

// amolD.firstName = "AmolDE"

// // program 3
// // setting the values using SET method
// class PersonE  {
//     setFirstName(fn){
//         this.firstName = fn
//     }
//     setLastName(ln){
//         this.lastName = ln
//     }
//     setAge(age){
//         this.age = age
//     }
//     setRollNo(rn){
//         this.rollNo = rn
//     }
// }
// let amolEE = new PersonE()
// console.log(amolEE)
// amolEE.setFirstName("amolDD")
// amolEE.setAge(12)
// amolEE.setRollNo(22)
// amolEE.setAge(23)
// console.log(amolEE)


let vehicle = {
    color:"red"
}
vehicle.color = "blue"
vehicle.logo = "circle"

// setting the values using get and set keyword

class PersonF{
    set FirstN(fn){
        this.firstName  = fn
    }

    get FirstN(){
        return this.firstName
    }

    set LastN(ln){
        this.lastName = ln
    }

    get LastN(){
        return this.lastName
    }

}
let amolT = new PersonF()

amolT.FirstN = "amolGG"