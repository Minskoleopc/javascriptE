// 
let amol = {
    firstName:'amol',
    lastName:'rao',
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}


// program 2



function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let ch = new Person("chinmay","deshpande")
let am = new Person("amol","rao")



console.log(ch)
console.log(am)

// Every object has __proto__ == Parent prototype
console.log(ch.__proto__ == Person.prototype)
console.log(am.__proto__ == Person.prototype)

Person.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"
ch.displayName()
am.displayName()

console.log(am.firstName)
console.log(am.lastName)
console.log(am.country)
console.log(ch)
console.log(am)

let e = am.hasOwnProperty('country')
console.log(e)
console.log(am.hasOwnProperty('firstName'))

// Es6 

class PersonE {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    displayName(){
        console.log(this.firstName+this.lastName)
    }

}

let ninad  = new PersonE("ninad","dani")
let vijeet  = new PersonE("vijeet","dani")

console.log(ninad)
console.log(vijeet)

ninad.displayName()
vijeet.displayName()

// program 3 
// Object create

let obj = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    displayName:function(){
        console.log(this.firstName+ this.lastName)
    }
}

let sarika = Object.create(obj)
console.log(sarika)
sarika.init("sarika","pansare")
sarika.displayName()





