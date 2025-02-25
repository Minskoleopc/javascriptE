
// function addA(){
//     console.log("A is executed")
// }
// function addB(){
//     console.log("B is executed")
// }
// addB()
// addA()
// function addC(){
//     setTimeout(function(){
//         console.log('C is called')
//     },2000)
// }
// function addD(){
//     console.log("D is called")
// }
// addC()
// addD()

// program 1

// 3 apis 
// userCreate  -----> getId  -----> userinfo

// function userInfo(){

//     setTimeout(function(){
//         console.log('user create')
//     },5000)

//     setTimeout(function(){
//         console.log('user id')
//     },4000)

//     setTimeout(function(){
//         console.log('user info')
//     },3000)

// }
// userInfo()


// call back hell -- 
// not readable
// not reusable 
// Es6 -----> promise
function userInfo() {
    setTimeout(function () {
        console.log('user create')
        setTimeout(function () {
            console.log('user id')
            setTimeout(function () {
                console.log('user info')
            }, 3000)
        }, 4000)
    }, 5000)
}
//userInfo()

// Promise 
// 1 month --- 1k pending
// 1k ----- received - resolved
// 1k ----  not received - reject 

let pro = new Promise(function (resove, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resove("resolved")
    }
    else {
        reject("rejected")
    }
})

pro.then(function (str) {
    console.log(str)
},function (str) {
    console.log(str)
})