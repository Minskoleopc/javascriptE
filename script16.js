// Destructure

//               0        1       2
let names = ["chinmay", "sarika", "poorva"]
// let a = names[0]
// let b = names[1]
// let c = names[2]

let [a, b, c] = names
console.log(a)
console.log(b)
console.log(c)

// program 2
//              0        1       2
let fruits = ["apple", "mango", "banana"]
let [f1, , f2] = fruits
console.log(f1)
console.log(f2)

// program 3

let states = [["nagpur", "pune"], ["indore", "bhopal"], ["jaipur", "udiapur"]]
let [[c11, c12], [c21, c22], [c31, c32]] = states
console.log(c11)
console.log(c31)

// program 4

let info = {
    firstName: 'chinmay',
    lastName: 'deshpande',
    age: 35
}

let { firstName: p1, lastName: p2, age: p3 } = info


console.log(p1)
console.log(p2)
console.log(p3)

// console.log(firstName)
// console.log(lastName)
// console.log(age)



// let p1 = info.firstName
// let p2 = info.lastName
// let p3 = info.age

// console.log(p1)
// console.log(p2)
// console.log(p3)

// program 5
let students = {
    studentOne: {
        fn:"chinmay",
        ln:"deshpande"
    },
    studentTwo: {
        fn:"amol",
        ln:"rao"
    }
}
let {studentOne:{fn:f11,ln:l11},studentTwo:{fn:f22,ln:l22}} = students
console.log(f11)
console.log(l11)
console.log(f22)
console.log(l22)

// program 6
let students2 = [
    {
        fn:"chinmay",
        ln:"deshpande"
    },
    {
        fn:"sarika",
        ln:"pansare"
    }
]
let [{fn:ff1,ln:ll1},{fn:ff2,ln:ll2}] = students2
// console.log(obj)
// console.log(obj2)
console.log(ff1)
console.log(ll1)

// program7


let amol = {
    fn:"amolR",
    ln:"raoR",
    skills:["sql","python"]
}
let {fn,ln,skills:[s1,s2]} = amol
console.log(s1)
console.log(s2)

