
// objects 
//               0          1       2     3
// let names  = ["chinmay","shirish","ram","sham"]
// // retrive
// console.log(names[0])
// // update
// names[1] = "satish"
// console.log(names)
// // delete
// names.pop()
// names.shift()
// // add 
// names.push('sachin')
// names.unshift('ramesh')

// C R U D 
// create
// retrive 
// update 
// delete

// object ??
//             0          1       2   3
let info = ["chinmay","deshpande",12,34]

info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:34,
    age:13
}
//console.log(info2[0])
// does object stores duplicate values 
console.log(info2)

// object 
// object stores the value - (prop-val) (key-val)

info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:34
}

// retrive (dot notation and bracket notation)
console.log(info2.age)
console.log(info2['lastName'])

// update (dot notation and bracket notation)
info2.age = 23
info2['lastName'] ="dani"
console.log(info2)

//add(dot notation and bracket notation)
info2.city = "pune"
info2['language'] = "marathi"
console.log(info2)
// delete (dot notation and bracket notation)

delete info2.city
delete info2['age']
console.log(info2)

let q1 = info2.hasOwnProperty('rollNo')
let q2 = info2.hasOwnProperty('city')
console.log(q1)
console.log(q2)

// loops
//                 0         1        2        3
let vegetables = ["onion","potato","tomato",'brinjal']
for(let i = 0 ; i < vegetables.length ; i++){
   // console.log(i)
    console.log(vegetables[i])
}

let vehicle = {
    color:"red",
    type:"sedane"
}
for(let key in vehicle){
    console.log(key,vehicle[key])
}

// array ----> 8:30pm
// ganesh ko bol class h imp call h
