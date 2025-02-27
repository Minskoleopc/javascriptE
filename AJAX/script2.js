// function addA(){
//     console.log('A is called')
// }
// function addB(){
//     console.log('B is called')
// }
// addA()
// addB()

// function addC(){
//     setTimeout(function(){
//         console.log("c is called")
//     },2000)
// }
// function addD(){
//     setTimeout(function(){
//         console.log("d is called")
//     },1000)
// }
// addC()
// addD()


// function getInfo() {

//     setTimeout(function () {
//         console.log("usercreate")
//     }, 3000)

//     setTimeout(function () {
//         console.log("get info")
//     },2000)

//     setTimeout(function () {
//         console.log("get id")
//     },1000)

// }
// getInfo()




// function getInfo() {
//     setTimeout(function () {
//         console.log("usercreate")
//         setTimeout(function () {
//             console.log("get info")
//             setTimeout(function () {
//                 console.log("get id")
//             }, 1000)

//         }, 2000)

//     }, 3000)
// }
// getInfo()

// Promise 
// Pending , resolve ,reject 

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 15
//     if(a === b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }

// })


// pro
// .then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
//     return "hello2"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log(str)
// })





// function getInfo() {
//     setTimeout(function () {
//         console.log("usercreate")
//         setTimeout(function () {
//             console.log("get info")
//             setTimeout(function () {
//                 console.log("get id")
//             }, 1000)

//         }, 2000)

//     }, 3000)
// }
// getInfo()

function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user creater")
        }, 3000)
    })
}

function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user id")
        }, 2000)
    })

}

function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get info")
        }, 1000)
    })

}


// async await function 

async function getInfo() {
    try {
        let a1 = await createUser()
        console.log(a1)
        let a2 = await getId()
        console.log(a2)
        let a3 = await getInfo()
        console.log(a3)
    }
    catch {
        console.log("error...")

    }
}
getInfo().then(function(str){
    console.log("error")
})




// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("Error")
// })
// .finally(function(){
//     console.log("i will always execute")
// })

