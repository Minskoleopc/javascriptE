// single  inheritance
// multi-level
// herarchical inheritance 
// Why inheritance ??
// Child reference varaibles ---> parent methods and properties 

// class Student {
//     constructor(fn,ln,age){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = age
//     }

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends Student {
//     salary  = 1000
//     displaySalary(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// //let amolT = new Teacher("chinmay","deshpande",23)

// program 2
// parent constructor - child constructor 

class Student {

    constructor(fn,ln,age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age 
    }
    displayName(){
        console.log(this.firstName +this.lastName)
    }
}
class Teacher extends Student {
    constructor(fn,ln,age,salary){
        super(fn,ln,age)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}
let amolG = new Teacher('amit',"rao",34,1000)
console.log(amolG.firstName)
console.log(amolG.lastName)
console.log(amolG.age)
console.log(amolG.salary)
amol.displayName()
amol.displaySalary()


// multi-level

class GrandFather {
    constructor(fn,ln){
        this.firstName = fn 
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
        console.log(this.fname+this.lastName)
    }
}
class Son extends Father{
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

// program 4
// herarchical inheritance 


class Mother {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName+this.lastName)
    }
}
class Daughter extends Mother {
    constructor(fn,ln,ddn){
        super(fn,ln)
        this.dname = ddn
    }
    displayDName(){
        console.log(this.dname + this.lastName)
    }
}
class SonB extends Mother {

    constructor(fn,ln,ssn){
        super(fn,ln)
        this.sname = ssn
    }
    displaySname(){
        this.sname + this.lastName
    }


}
let chinmayA = new Son("kanchan","deshpande","chinmay")
let gauri  = new Daughter("kanchan","deshpande","gauri")
chinmayA.displayName()
chinmayA.displaySName()
gauri.displayName()
gauri.displayDName()


















