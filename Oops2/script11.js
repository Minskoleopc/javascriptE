// let add  = function(x,y){
//     return x + y
// }

// function addition(fn,x,y){

//     // let fn = function(x,y){
//     //     return x + y
//     // }
//     //let x = 10
//     //let y = 5

//     let r = fn(x,y)
//     return r
// }
// let ra = addition(add,10,5)
// console.log(ra)

// // function as return type 

// function add(x,y){
//     return function(x,y){
//         return x + y
//     }
// }
// let x1 = add(12,3)
// console.log(x1)
// x1()


// // let x1 = function(x,y){
// //     return x + y
// // }

// lexical scope

function additionA() {

    let a = 10
    let b = 5
    console.log(a + b)

    function additionB() {
        let c = 100
        let d = 50
        //console.log(e)
        console.log(a + b + c + d)
        function addtionC() {
            let e = 10
            console.log(a + b + c + d + e)
        }
        addtionC()
    }
    additionB()
}
additionA()









