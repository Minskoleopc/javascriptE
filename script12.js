// //              0          1        2        3
// let names  = ["chinmay","poorva","samarth","raj"]

// // update
// names[0] = "ram"
// // add
// names.push("ninad")
// names.unshift("mohan")
// // delete 
// names.pop()
// names.shift()
// // retrive 
// console.log(names[0])

// Object 


// let info = ["chinmay","deshpande",23,34]

info2 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:23
}
console.log(info2[0])

// Does it allows to store duplicate keys 

info3 = {
    // property:value
    // key:value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:23,
    age:44
}
console.log(info3)

info4 = {
    firstName:"chinmay",
    lastName:"deshpande"
}

// retrive  (dot notation and bracket notation)
console.log(info4.firstName)
console.log(info4['firstName'])
// update (dot notation and bracket notation)
info4.firstName = "tanmay"
info4.lastName = "samay"
console.log(info4)
// add (dot notation and bracket notation)
info4.city = "pune"
info4['language'] = "marathi"
console.log(info4)
// delete (dot notation and bracket notation)
delete info4.firstName
delete info4['lastName']
console.log(info4)

vehicle  = {
    color:"red",
    type:"sedane"

}


// retrive  (dot notation and bracket notation)
console.log(vehicle.color)
console.log(vehicle['color'])

// update (dot notation and bracket notation)
vehicle.color = "red"
vehicle['color']= "blue"

// add (dot notation and bracket notation)

vehicle.regNo = 123
vehicle['compnayName'] = "audi"

// delete (dot notation and bracket notation)

delete vehicle.color
delete vehicle['color']

// loop

info5 = {
    firstName:"ram",
    lastName:"dani",
    age:23
}
// dot notation does not work inside loop (only bracker notation)
for(let key in info5){
    console.log(key,info5[key])
}
let e = info5.hasOwnProperty('FirstName')
console.log(e)


// property
