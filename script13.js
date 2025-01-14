// array , string , object , userDefinedData
// Map , string

// object 

let info = {
    // property:value
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:23,
    age:34
}

let mapA = new Map()
console.log(mapA)
mapA.set('firstName',"chinmay")
mapA.set('lastName','deshpande')
mapA.set('rollNo',23)
mapA.set('age',34)
console.log(mapA)

let mapB = new Map()
mapB.set(1,"admin")
mapB.set(2,"customer")
mapB.set(3,"support")
mapB.set(4,"manager")
console.log(mapB)


let mapC = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"support"],
    [4,"manager"],
    [6,["1a","2a","3b"]],
    [7,{firstName:"chinmay",lastName:"deshpande"}]
])
console.log(mapC)

console.log(mapC.size)

// set()
mapC.set(5,'supervisior')
console.log(mapC)

// get()
console.log(mapC.get(1))
console.log(mapC.get(7).firstName)

// has()
console.log(mapC.has(2))
console.log(mapC.has(88))

// clear()
// mapC.clear()
// console.log(mapC)

//delete
mapC.delete(2)
console.log(mapC)

mapC.forEach(function(vl,ky){
    console.log(vl,ky)
})

for(let key of mapC.keys()){
    console.log(key)
}

for(let val of mapC.values()){
    console.log(val)
}


for(let [k,v] of mapC.entries()){
    console.log(k,v)
}



