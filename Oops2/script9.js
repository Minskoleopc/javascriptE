// same class same methodname , different signature - overloading 
// different class , same method name , same signature - overriding

class Calculator {

    // addition(x, y) {
    //     console.log(x + y)
    // }
    // addition(x, y, z) {
    //     console.log(x + y + z)
    // }

    // addition(x, y, z, a) {
    //     console.log(x + y + a + z)
    // }

    addition(x = undefined, y = undefined, z = undefined, a = undefined) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }

    }

}
let a = new Calculator()
a.addition(12, 3)
a.addition(12, 3, 3)
a.addition(12, 3, 3, 2)

// Overriding 

class WorldBank {

    save(){
        console.log('world bank save method...')
    }
    loan(){
        console.log('world bank loan method')
    }

}

class SBI extends WorldBank {

    save(){
        console.log('SBI bank save method...')
    }
    loan(){
        console.log('SBI bank loan method')
    }

}
let sbiObj = new SBI()
sbiObj.loan()
sbiObj.save()

// Duck typing 

class Dog {
    talk(){
        console.log("Bow Bow")
    }
}
class Cat{
    talk(){
        console.log("meow meow")
    }
}
class Human{
    talk(){
        console.log("Hi Hello")
    }
}

function call_talk(obj){
    obj.talk()
}
let a1 = new Dog()
let c2 = new Cat()
let d3 = new Human()

call_talk(a1)
call_talk(c2)
call_talk(d3)