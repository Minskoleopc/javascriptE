//              fn        ln      age/roll  age/roll
let info = ["chinmay","deshpande",23,45]
let obj = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45,
    age:44
}
console.log(obj)
//console.log(obj[0])

// program 2

let vehicle = {
    // property:value
    // key:value
    color:"red",
    type:"sedane",
    companyName:"audi"
}
// retrive  (dot notation and bracket notation)
console.log(vehicle.color)
console.log(vehicle['color'])
// udpate   (dot notation and bracket notation)
vehicle['color'] = "blue"
vehicle.color = "purple"
// add   (dot notation and bracket notation)
vehicle.regNo = 123
vehicle['wheel'] = 4
console.log(vehicle)
// delete  (dot notation and bracket notation)
delete vehicle.color
delete vehicle['regNo']
//             0  1  2  3  4  5  6
let numbers = [11,22,33,44,55,66,77]

for(let i = 0 ; i < numbers.length ; i++){
   // console.log(i)
    console.log(numbers[i])
}

// program 3
let vehicle2 = {
    // property:value
    // key:value
    color:"red",
    type:"sedane",
    companyName:"audi"
}
// .notation will not work inside loop
for(let key in vehicle2){
    console.log(key,vehicle2[key])
}

// object literal 
let amol = {
    fn:"amol",
    ln:"rao",
    age:44,
    rollNo:66
}

let chinmay = {
    fn:"chinmay",
    ln:"deshpande",
    age:43,
    rollNo:64
}

class Person {
    fn = undefined
    ln = undefined
    age = undefined
    rollNo = undefined
}
let amol2 = new Person()
console.log(amol2)
amol2.fn  = "amol2"
amol2.ln  = "rao2"
amol2.age  = "22"
amol2.rollNo  = "44"
console.log(amol2)

// program 4
class PersonB {
    constructor(fn,ln,age,rollno){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age 
        this.rollNo = rollno
    }
}
let amolC = new PersonB("amolB","raoB",35,25)
let chinmayD = new PersonB("chinmayD","DeshpandeD",33,24)
console.log(amolC)
console.log(chinmayD)

class PersonE {
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
let amolG = new PersonE()
console.log(amolG)
amolG.setFirstName("amolG")
amolG.setLastName("rao")
console.log(amolG)