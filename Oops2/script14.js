
// closures 
// function getAddtion(){
//     let x = 10 
//     let y = 5
//     return function(){
//         console.log(x+y)
//     }
// }

// let q1 = getAddtion()
// console.log(q1)
// // let q1 = function(){
// //     console.log(x+y) // 15
// // }
// q1()

var firstName = "ninad"
var lastName = "dani"


// let info = {
//     firstName: 'chinmay',
//     lastName: 'deshpande',
//     display: function () {
//         // this ----> info
//         console.log(this.firstName + this.lastName) // chinmay deshpande
//         //          info.firstName + info.lastName
//         function display2(){
//             console.log(this.firstName + this.lastName) //ninad dani
//             // this ----> info X this ---- window          
//         }
//         display2()
//     }
// }
// info.display()

// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//         let display2 = ()=>{
//             console.log(this.firstName+this.lastName)
//         }
//         display2()
//     }
// }
// info2.displayName()


let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:()=>{
        console.log(this.firstName+ this.lastName)
        // this => window
        let display2 = ()=>{
            // this => window
            console.log(this.firstName+this.lastName)
        }
        display2()
    }
}
info2.displayName()



