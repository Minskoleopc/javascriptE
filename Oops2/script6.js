// parent has structure and child does not have constructor (single interance)
class Student {
    constructor(fn,ln,adharNo){
        this.firstName = fn 
        this.lastName = ln 
        this.adharNo = adharNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student{

    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}
let amol = new Teacher("amol",'rao',123)
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.adharNo)
console.log(amol.salary)
amol.displayName()
amol.displaySalary()

// single 
// parent constructor and child also constructor

// class StudentA {
//     constructor(fn,ln,age){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = age
//     }
//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class TeacherA extends StudentA {
//     constructor(fn,ln,age,salary){
//         super(fn,ln,age)
//         this.salary = salary
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amoT = new  TeacherA("amolT","raoT",23,1000)
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.age)
// console.log(amoT.salary)
// amoT.displayName()
// amoT.displaySalary()

// multi-level 
class GrandFather {
    constructor(fn,ln){
        this.firstName  = fn 
        this.lastName = ln
    }

    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends GrandFather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
       super(fn,ln,ffn) 
       this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.fname)
console.log(chinmay.sname)
chinmay.displaySName()
chinmay.displayFName()
chinmay.displayGName()









// Not a correact approach
// class Teacher {
//     constructor(fn,ln,adharNo,salary){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.adharNo = adharNo
//         this.salary = salary
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }


// let chinmay = new Student("chinmay","lastName",123)
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.adharNo)
// chinmay.displayName()