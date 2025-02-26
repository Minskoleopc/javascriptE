
// // sync

// function addA(){
//     console.log("A")
// }

// function addB(){
//     console.log("B")
// }
// addA()
// addB()

// // async 

// function addC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },3000)
// }
// function addD(){
//     console.log("D is called")
// }
// addC()
// addD()

// program 2

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//     }, 3000)

//     setTimeout(function () {
//         console.log("Get id ")
//     }, 2000)


//     setTimeout(function () {
//         console.log("Get info")
//     }, 1000)
// }
// getInfo()

// program 3
// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("Get id ")
//             setTimeout(function () {
//                 console.log("Get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// program 4 
// promises asyn code ------ execute sync
// promise ----->  pending , resolve , reject


// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 5

//     if(a == b){
//         relsove("a is called")
//     }
//     else {
//         reject("b is called")
//     }

// })

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2

// let pro2 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 50
//     if(a > b){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-22,-33])
//     }

// })
// pro2
// .then(function(a){
//     console.log(a[0])
// })
// .catch(function(a){
//     console.log(a[0])
// })

// program 3

// let pro3 = new Promise(function(resolve,reject){
//     let fn = "Chinmay"
//     if(fn.startsWith("c")){
//         resolve("chinmay")
//     }
//     else {
//         reject("negative")
//     }
// })

// pro3
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will be always execute")
// })


let pro4 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 100
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

pro4
.then(function(str){
    console.log(str)
    return "hello2"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("finally executed")
})