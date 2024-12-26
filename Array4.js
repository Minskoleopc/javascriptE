// slice()
//             0          1        2         3      4        5
let names = ["chinmay","sarika","shraddha","raj","sameer","satish"]
//             -6        -5        -4       -3       -2       -1
//names.slice(startIndex,endIndex(not inclued))
console.log(names.slice(2))
console.log(names.slice(1,5))
console.log(names.slice(1,-1))
console.log(names.slice(-6,-1))
console.log(names.slice(-5,5))
console.log(names.slice(-5))
console.log(names.slice(-1,-5))

// flat()
//                   0                   1                  2
//               0      1          0          1        0         1
let states = [["Pune","nagpur"],["Udaipur","Jaipur"],["Bhopal","Indore"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let r1 = states.flat()
console.log(r1)

// sort() // numbers

let cities = ["jaipur","bhopal",'udaipur',"chandrapur","sangamner"]
let q2 = cities.sort()
console.log(q2)

let numbers = [11,66,77,88,33,45]
let q3 = numbers.sort((a,b) => a-b)
console.log(q3)

let q4 = numbers.sort((a,b) => b-a)
console.log(q4)

// concat()

let numberA = [11,22,33]
let numberB = [44,55,66]
let q1 = numberA.concat(numberB)
console.log(q1)

let q22 = numberB.concat(numberA)
console.log(q22)

// fill()
// fill("-",startIndex,Endindex(not included))
//               0  1 2  3  4  5
let numbersB = [11,22,33,44,55,66]
let q44 = numbersB.fill('@',1,5)
console.log(q44)

// at()
//              0         1           2            3
let country = ["india","pakistan","bangladesh","srilanka"]
let f1 = country.at(9)
console.log(f1)

// indexOf()
//           0         1            2          3
country = ["india","pakistan","bangladesh","srilanka"]
let f3 = country.indexOf('Pakistan')
console.log(f3)

