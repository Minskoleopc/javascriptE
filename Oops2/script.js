
// Javascript 

// Object -

// object literal 
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(chinmay)
console.log(chinmay.firstName)
console.log(chinmay.lastName)
chinmay.display()


let amol = {
    firstName:"amol",
    lastName:"rao",
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(amol.firstName)
console.log(amol.lastName)
console.log(amol.display)
amol.display()


// function constructor 

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let sarika = new Person("sarika","pansare")
let rasika = new Person("rasika",'ubale') 
console.log(sarika)
console.log(rasika)
console.log(sarika.firstName)
console.log(rasika.lastName)
sarika.display()
rasika.display()

function Vehicle(ty,cl){
    this.type = ty
    this.color = cl
    this.updatColor = function(cl){
        this.color = cl
    }
}

let audi = new Vehicle("sedane","red")
let bmw =  new Vehicle("sedane","blue") 
console.log(audi)
console.log(bmw)
bmw.updatColor("purple")
console.log(bmw)


// ES6 class 

class PersonG {
    fn = undefined
    ln = undefined
    display(){
        console.log(this.fn + this.ln)
    }
}
let mayuri = new PersonG()
console.log(mayuri)

mayuri.fn = "mayuri"
mayuri.ln = "rao"
console.log(mayuri)
mayuri.display()


class PersonD{
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let achinmay = new PersonD("chinmay","deshpande")
console.log(achinmay)
achinmay.displayName()

// Object literal 
// function constructor
// Es6 class

// Object.create

let ram = Object.create({})
console.log(ram)
ram.firstName = "ram"
ram.lastName = "dani"
ram.display = function(){
    console.log(this.firstName+this.lastName)
}
console.log(ram.firstName)
console.log(ram.lastName)
ram.display()

// Prototype inheritance