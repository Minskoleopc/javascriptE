let x = 10
console.log(x)

let names = ["chinmay","sarika","poorva","shraddha"]
let numbers = [11,22,33,44,55,66,77,88]
let info = ["chinmay","deshpande",7709192441,true]
console.log(names)
console.log(numbers)
console.log(info)

// program 2
// Array store the value by index
//              0        1       2        3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])


// program 3
// for loop - print every element of array
// index starts with zero
// length - number of element  - 4
// length - 1 is always the last index
console.log(fruits.length)

for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(fruits[i])
}
//                   0          1          2            3
let vegetables = ["brinjal","cabbage","cauliflower","ladyfinger"]

for(let i = 0 ; i < vegetables.length ; i++){
    //console.log(i)
    console.log(vegetables[i])
}

// while loop print every element of array
//              0      1          2          3         4
let cities = ["pune","mumbai","bangalore","kolkata","chennai"]
let i1 = 0
while(i1 < cities.length){
    //console.log(i1)
    console.log(cities[i1])
    i1  = i1 + 1
}

// Methods
// Gym()
// action ---- excercise
// return ---- health

// add the element at last
let country = ["india","china","cuba","srilanka","chennai"]
let q1 = country.push('pakistan')
console.log(q1)
console.log(country)

// add the element at first
country = ["india","china","cuba","srilanka","chennai"]
let q2 = country.unshift('pakistan')
console.log(q2)
console.log(country)


country = ["india","china","cuba","srilanka","chennai"]
let q3 = country.pop()
console.log(q3)
console.log(country)

country = ["india","china","cuba","srilanka","chennai"]
let q4 = country.shift()
console.log(q4)
console.log(country)

// push()
// unshit()
// pop()
// shift()


// includes()
let state = ["MH","RJ","UP","MP"]
let q11 = state.includes('MH')
let q12 = state.includes('MH2')
console.log(q11)
console.log(q12)

// reverse()
state = ["MH","RJ","UP","MP"]
state.reverse()
console.log(state)

// join()
let info2 = ["chinmaydeshpande010","gmail.com","hello"]
let q22 = info2.join(' ')
console.log(q22)

// at()
//          0   1   2   3
numbers = [111,222,333,444]
console.log(numbers.at(2))

// indexof()
let q122 = numbers.indexOf(2222)
console.log(q122)

fruits = ["apple","mango","banana"]
if(fruits.indexOf("Banana") >= 0){
    console.log('element found')
}
else {
    console.log("element not found")
}
