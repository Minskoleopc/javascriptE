// // object literal 
// let amol = {
//     firstName:"amol",
//     lastName:'rao',
//     age:24,
//     rollNo:34
// }
// let chinmay = {
//     firstName:"chinmay",
//     lastName:'deshpande',
//     age:23,
//     rollNo:36
// }
// // 1 object ====> 5 lines 
// // 500 object =====> 2500 lines

// class Person {
//     firstName= undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined
// }
// let amolB = new Person()
// console.log(amolB)
// amolB.firstName = "amolB"
// amolB['lastName'] = "raoB"
// amolB.age = 45
// amolB.rollNo  = 77
// console.log(amolB)

// // program 3
// // Setting the values at time of object creation

// class PersonC {
//     constructor(fn,ln,ag,rollNo){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = ag
//         this.rollNo = rollNo
//     }
// }

// let amolC = new PersonC("amolC","raoC",23,56)
// let amolD =  new PersonC("amolD","raoD",21,52)
// console.log(amolC)
// console.log(amolD)

// // using setMethod 

// // using set and get Keyword


// let amol = {
//     fn:"amol",
//     ln:"rao",
//     age:23,
//     rollNo:34
// }

// let chinmay = {
//     fn:"chinmay",
//     ln:"deshpande",
//     age:45,
//     rollNo:33
// }

// class Person {
//     fn = undefined
//     ln = undefined
//     age = undefined
//     rollNo = undefined
// }
// let amol1 = new Person()
// console.log(amol1)
// amol1.fn = "amol!"
// amol1.ln= "rao!"
// amol1.age = 23
// amol1.rollNo = 56

// // constructor

// class PersonR {
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age  = ag 
//         this.rollNo = rn
//     }
// }
// let amolR  = new PersonR("amolR","raoR",34,55)
// console.log(amolR)

// let amolR2  = new PersonR("amolR2","raoR2",34,55)
// console.log(amolR2)


class PersonJ {
    setFn(fn){
        this.firstName = fn
    }

    setLn(ln){
        this.lastName = ln
    }

    setAge(ag){
        this.age = ag
    }

    setRollNo(rn){
        this.rollNo = rn
    }
}

let amolK = new PersonJ()
console.log(amolK)
amolK.setFn("amolK")
amolK.setLn("raoR")
amolK.setRollNo(44)
amolK.setAge(24)
console.log(amolK)


let info = {
    firstName:"amol",
    lastName:'rao'

}
info.firstName = "amolR"
info.city = "pune"

// using set and get keyword
class PersonG {
    set firstN(fn){
        this.firstName = fn
    }
    get firstN(){
        return this.firstName
    }

    set lastN(ln){
        this.lastName = ln
    }
    get lastN(){
        return this.lastName
    }
    
}
let amolN = new PersonG()
console.log(amolN)
// setting property
amolN.firstN = "amolG"
console.log(amolN.firstN)
console.log(amolN)

amol.lastN = 'raoG'
console.log(amol.lastN)