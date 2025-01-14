
let info = ["chinmay","deshpande",23,45]
// add
info.push("23")
info.shift('34')
// retrive 
console.log(info[0])
// Update 
info[0] = "tanmay"
// Delete
info.pop()
info.shift()
info.splice()

// y Object ?
//              fn         ln      rollNo , age
let info2 = ["chinmay","deshpande",35,66]


let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:35,
    rollNo:66,
    age:44
}
// object does not stores the value by index
console.log(info3[0])

// does object stores the duplicate keys 
console.log(info3)

let info4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:65
}
// retrive  (dot notations and bracket)
console.log(info4.firstName)
console.log(info4['lastName'])
// update  (dot notations and bracket)
info4.firstName = "tanmay"
info4['lastName'] = "dani"
console.log(info4)
// add (dot notations and bracket)
info4.city = "pune"
info4['language'] = "marathi"
console.log(info4)
// delete (dot notations and bracket)
delete info4.firstName
delete info4['lastName']

let arr = [11,22,33,44]
for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
}

info4 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:65
}

for(let key in info4){
    console.log(key,info4[key])
}
