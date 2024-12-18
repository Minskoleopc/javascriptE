//              0        1     2       3
let names = ["chinmay","ram","sham","satish"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

// update array
names[0] = "ramesh"
console.log(names)

// looping through array
//             0         1       2          3
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    console.log(cities[i])
}

//               0        1      2       3
let fruits  = ["apple","mango","banana","orange"]
console.log(fruits.length)
for(let i = 0 ; i < fruits.length; i++){
    //console.log(i)
    console.log(fruits[i])
}

let i1 = 0
while(i1 < fruits.length){
    console.log(fruits[i1])
    i1 = i1 + 1
}

// methods of array

// push() , // pop() , // shit(), unshift() ,shift()

let country = ["india","srilanka","bangladesh","china"]
let q1 = country.push("nepal")
console.log(country)
console.log(q1)


country = ["india","srilanka","bangladesh","china"]
let q2 = country.unshift("pakistan")
console.log(q2)
console.log(country)


country = ["india","srilanka","bangladesh","china"]
let q3 = country.pop()
console.log(q3)
console.log(country)

country = ["india","srilanka","bangladesh","china"]
let q4 = country.shift()
console.log(q4)
console.log(country)

country = ["india","srilanka","bangladesh","china"]
let q5 = country.includes("india")
let q6 = country.includes("India")
console.log(q5)
console.log(q6)

// push()- new length, unshift()-new length,pop()-same element
//,shift()- same element ,includes() - true or false