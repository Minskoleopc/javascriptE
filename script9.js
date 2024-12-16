// objects
//              0         1        2       3
let names = ["chinmay","sarika","poorva","raj"]
// names.push("emdo")
// names.unshift("rohit")
// names.pop()
// names.shift()
// names.splice(1,1,"rahul","raj")

// names[1] = "rahul"
// console.log(names)


let info = ["chinmay","deshpande",13,44]

let info2 = {
    // property:value
    // key  : value
    firstName:"chinmay",
    lastName:"deshpande",
    age:44,
    rollNo:13
}

// Object does not stores the value by index
//console.log(info2[0])
info2 = {
    // property:value
    // key  : value
    firstName:"chinmay",
    lastName:"deshpande",
    age:44,
    rollNo:13
}

// retrive  //dot notation and bracket notation
console.log(info2.firstName)
console.log(info2['firstName'])

// updatem //dot notation and bracket notation
info2.firstName = "tanmay"
info2['lastName'] = "dani"
console.log(info2)
// add   //dot notation and bracket notation
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)

// delete // dot notation and bracket notation
delete info2.firstName
delete info2['lastName']
console.log(info2)


// program 3

let vehicle = {
    color:"red",
    type:"sedane"
}

console.log(vehicle.color)
console.log(vehicle['color'])

vehicle.color = "blue"
vehicle['color'] = "green"

vehicle.regNo = 123
vehicle['regNo'] = 456
console.log(vehicle)

delete vehicle.color
delete vehicle['type']