// contact()
let arr1 = [11,22,33]
let arr2   = [44,55]
let q1 = arr1.concat(arr2)
console.log(q1)

let q2 = arr2.concat(arr1)
console.log(q2)


// reverse()
let cities = ["pune","mumbai","banglore","kolkata"]
cities.reverse()
console.log(cities)

// sort()
let names = ["chinmay","bimal","sanjay","pranay"]
names.sort()
console.log(names)

// splice()
//          0         1       2        3
names = ["chinmay","bimal","sanjay","pranay"]
// names.pop()
// names.shift()
//names.splice(startIndex,numberOfElements)
//names.splice(startIndex,numberOfElements,rep1,rep2)

//names.splice(2,1)
// names.splice(2,1,"ram")
// console.log(names)

// slice()
// 
//                0       1     2       3       4        5
let names2 = ["chinmay","ram","sham","sachin","ramesh","raj"]
//             -6        -5     -4     -3        -2      -1
//names2.slice(startIndex,endIndex(not included))
console.log(names2.slice(2))
console.log(names2.slice(1,5))
console.log(names2.slice(-6,5))
console.log(names2.slice(1,-2))
console.log(names2.slice(-2))
console.log(names2.slice(-1,-3))

// join()

let info2 = ["chinmay","deshpande",7709192441]
console.log(info2.join('-'))
console.log(info2.join('@'))
console.log(info2.join(' '))

// flat()
//                   0                    1                     2
//               0         1         0         1          0          1
let states = [["nagpur","wardha"],["jaipur","udaipur"],["kanpur","lucknow"]]
console.log(states[0][0])
console.log(states[1][0])
console.log(states[2][0])
let r4 = states.flat()
console.log(r4)


// fill()
let marks = [11,22,33,44,55,66,77,88]
marks.fill('-',3,marks.length)
console.log(marks)


let q11 = [11,22,33,44]
let a = q11.map(function(el,index,arr){
    return el + 1
})
console.log(a)

q11 = [11,22,33,44]
let b = q11.filter(function(el,index,arr){
    return el > 20
})
console.log(b)

q11 = [11,22,33,44]
let c = q11.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(c)

q11 = [11,22,33,44]
q11.forEach(function(el){
    console.log(el * 2)
})

q11 = [11,22,33,44]
let rr = q11.find(function(el){
    return el > 30
})
let r2 = q11.findIndex(function(el){
    return el > 30
})

q11 = [1,22,33,44]

let y = q11.every(function(el){
    return el > 10
})
console.log(y)

let z = q11.some(function(el){
    return el > 10
})
console.log(z)