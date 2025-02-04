// object 

// let amol = {
//     fn:"amol",
//     ln:"rao",
//     displayName:function(){
//         console.log(this.fn + this.ln)
//     }
// }

// let chinmay = {
//     fn:"chinmay",
//     ln:"deshpande",
//     displayName:function(){
//         console.log(this.fn + this.ln)
//     }
// }

// function constructor 

function Person(fn, ln) {
    this.fn = fn
    this.ln = ln
    // this.displayName = function () {
    //     console.log(this.fn + this.ln)
    // }
}
let chinmay = new Person("chinmay","deshpande")
let amol = new Person("amol","rao")


console.log(chinmay)
console.log(amol)

// every object has one __proto__ == Parent.prototype
console.log(amol.__proto__ == Person.prototype)
console.log(chinmay.__proto__ == Person.prototype)
Person.prototype.country = "india"

Person.prototype.displayName = function(){
    console.log(this.fn + this.ln)
}

chinmay.displayName()
amol.displayName()

console.log(amol)
console.log(amol.ln)
console.log(amol.fn)
console.log(amol.country)


// Program 1


let names = ["chinmay","deshpande","shirish"]
console.log(names)

// Array.prototype.hello = function(){
//     console.log("Minskole")
// }

console.log(names.__proto__ == Array.prototype)
names.push("kanchan")
names.hello()























// program // Revision example

// function Person(fn, ln) {
//     this.fn = fn
//     this.ln = ln
//     // this.displayName = function () {
//     //     console.log(this.fn + this.ln)
//     // } 

// }


// let aa = new Person("aa","bb")
// let bb = new Person("cc" ,"cc")

// console.log(aa)
// console.log(bb)

// console.log(aa.__proto__ == Person.prototype)
// console.log(bb.__proto__ == Person.prototype)

// Person.prototype.displayName = function(){
//     console.log(this.fn + this.fn)
// }

// aa.displayName()
// bb.displayName()


