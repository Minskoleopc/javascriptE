// map and object 

// object 

let info = {
    1:"admin",
    2:"manager",
    3:"supervisior",
}
console.log(info)

let mapA = new Map()
mapA.set(1,"admin")
mapA.set(2,"manager")
mapA.set(3,"supervisior")
console.log(mapA)

let a = [11,23,44,55]
let b = {fn:'chinmay',ln:"deshpande"}
mapA.set(a,"marks")
mapA.set(b,"info")
console.log(mapA)

let mapC = new Map([
    [[11,22,33],"marks"],
    [{fn:"chinmay",ln:"deshpande"},"info2"],
])
console.log(mapC)

// methods 

let mapD = new Map([
    [1,"admin"],
    [2,"manger"],
    [3,"student"],
    [4,"teacher"]
])

console.log(mapD.get(1))
//mapD.set(5,"customer")
//mapD.clear()
//mapD.delete(4)
//console.log(mapD.has(3))
//console.log(mapD.size)

// mapD.forEach(function(v,k){
//     console.log(k,v)
// })

// for(let key of mapD.keys()){
//     console.log(key)
// }
// for(let val of mapD.values()){
//     console.log(val)
// }

// for(let [k,v] of mapD.entries()){
//     console.log(k,v)
// }


// set 

let setA = new Set()
setA.add({fn:"chinmay"})
setA.add(1)
setA.add(11)
setA.add(12)
setA.add(13)
console.log(setA)

let setB = new Set([11,22,33,33,4,5,66,77])
// console.log(setB)
// setB.add(44)

// setB.delete(44)
// console.log(setB)

// setB.clear()
// console.log(setB)

// console.log(setB.has(11))
// console.log(setB.size)

setB.forEach(function(val){
    console.log(val)
})

// for(let key of setB.keys()){
//     console.log(key)
// }

// for(let val of setB.values()){
//     console.log(val)
// }
// for(let [k,v] of setB.entries()){
//     console.log(k,v)
// }

// DOM ---- document object --- 8 sessions
// React , Cypress , Playwright , Selenium


// let a = 10
// let n  = []
// let m = {}
// let h = true