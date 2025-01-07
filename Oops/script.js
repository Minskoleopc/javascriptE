let amol = {
    fn:"amol",
    ln:"rao",
    age:12,
    rollNo:23

}
let chinmay = {
    fn:'chinmay',
    ln:'deshpande',
    age:12,
    rollNo:34
}


class Person {
    fn= undefined
    ln = undefined
    age = undefined
    rollNo = undefined
}

let amolB = new Person()
console.log(amolB)
amolB.fn = "amol"
amolB.ln ="rao"
amolB.age = 23
amolB.rollNo = 12
console.log(amolB)

// constructor