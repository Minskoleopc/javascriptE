// Object  property will always be string 
let info = {
    firstName: "chinmay",
    lastname: "deshpande",
    1: "rollNo",
    2: 'age'
}
console.log(info)

let mapA = new Map()
mapA.set('firstName', "chinmay")
mapA.set('lastName', 'deshpande')
mapA.set(1, 'rollNo')
mapA.set(2, 'age')
mapA.set([11, 22, 33], 'marks')
mapA.set({ fn: 'chinmay', ln: 'deshpande' }, 'marks')
console.log(mapA)

// map
let mapB = new Map()
console.log(mapB)
mapB.set(1, "admin")
mapB.set(2, 'supervisior')
mapB.set(3, 'student')
mapB.set(4, 'customer')
console.log(mapB)


let mapC = new Map([
    [1, "admin"],
    [2, "supervisor"],
    [3, "student"],
    [4, "customer"]
]
)
console.log(mapC)
// Object - properties and methods 

mapC = new Map(
    [
        [1, "admin"],
        [2, "supervisor"],
        [3, "student"],
        [4, "customer"]
    ]
)

let a = mapC.size
console.log(a)

// set
mapC.set(5, 'manager')
console.log(mapC)

let b = mapC.get(5)
console.log(b)

let c = mapC.has(3)
console.log(c)

let d = mapC.delete(4)
console.log(mapC)

// mapC.clear()
// console.log(mapC)

mapC.forEach(function (v, k) {
    console.log(v, k)
})

let mapD = new Map([
    ["firstName", "chinmay"],
    ["lastname", "deshpande"],
    ["age", "23"],
    ["23", "45"],
    ["23", "46"]
])


for(let key of mapD.keys()){
    console.log(key)
}

for(let val of mapD.values()){
    console.log(val)
}

for(let [k,v] of mapD.entries()){
    console.log(k,v)
}
// SET
let setA = new Set([11,22,11,22,33,44,55])
console.log(setA)

console.log(setA.size)

// program 2

let setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)
console.log(setB)

let q1 = setB.has(3)
console.log(q1)

// setB.clear()
// console.log(setB)

setB.delete(2)
console.log(setB)

setB.forEach(function(k){
    console.log(k)
})

let setC = new Set([{fn:"chinmay"},{fn:"raj"}])
console.log(setC)
for(let key of setC.keys()){
    console.log(key)
}
for(let val of setC.values()){
    console.log(val)
}
for(let [k,v] of setC.entries()){
    console.log(k,v)
}