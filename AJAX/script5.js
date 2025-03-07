// Promises combinators parallel 
// Promise.all() -----> resolves when all promises are resolved else reject
// Promise.allSettled() ----> resolves with all state even if the some call are fail
// Promise.race() ----> resovle / rejects as soon as promise is consumsed
// Promise.any() --- ignores all reject state and shortcircuit with first resolve

// Program 


// function AsyncTask(name,delay,shouldReject=false){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             if(shouldReject){
//                 reject(`${name} falied`)
//             }
//             else{
//                 resolve(`${name} passed`)
//             }
//         },delay)
//     })
// }

// Promise.all([
//     AsyncTask("walking",5000),
//     AsyncTask("coding",6000),
//     AsyncTask("reading",7000,true)
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(error){
//     console.log(error)
// })



// Promise.allSettled([
//     AsyncTask("walking",5000),
//     AsyncTask("coding",6000),
//     AsyncTask("reading",7000,true)
// ])
// .then(function(response){
//     console.log(response)
// })


// Promise.race([
//     AsyncTask("walking",5000),
//     AsyncTask("coding",3000),
//     AsyncTask("reading",4000,true)
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(error){
//     console.log(error)
// })

// Promise.any([
//     AsyncTask("walking",5000,true),
//     AsyncTask("coding",3000,true),
//     AsyncTask("reading",4000),
//     AsyncTask("cooking",2000)
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(error){
//     console.log(error)
// })



function AsyncTask(name, delay, shouldReject = false) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (shouldReject) {
                reject(`${name} falied`)
            }
            else {
                resolve(`${name} passed`)
            }
        }, delay)
    })
}

async function PromiseAll() {
    try {
        let results = await Promise.all([
            AsyncTask("cooking", 1000),
            AsyncTask("walking", 2000, true),
            AsyncTask("talking", 1000),
        ])
        console.log(results)

    }
    catch (error) {
        console.log(error)
    }

}
//PromiseAll()

// async function PromiseAllSettle(){

//     let results =  await Promise.allSettled([
//         AsyncTask("cooking",1000),
//         AsyncTask("walking",2000,true),
//         AsyncTask("talking",1000),
//     ])
//     console.log(results)


// }

//PromiseAllSettle()

// async function PromiseRace(){

//     try {
//         let results =  await Promise.race([
//             AsyncTask("cooking",1000),
//             AsyncTask("walking",2000,true),
//             AsyncTask("talking",1000),
//         ])
//         console.log(results)

//     }
//     catch(error){
//         console.log(error)
//     }
// }

// PromiseRace()

// async function PromiseAny(){

//     let results =  await Promise.race([
//             AsyncTask("cooking",1000),
//             AsyncTask("walking",2000,true),
//             AsyncTask("talking",100),
//         ])
//         console.log(results)
// }
// PromiseAny()

// API - 

// https://reqres.in/api/users/1
// https://reqres.in/api/users/2
// https://reqres.in/api/users/3

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

function raiseError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a = 10
            let b = 10
            if (a == b) {
                resolve('error raise')
            }
            else {
                reject('no erroe')
            }
        },1)
    })
}

// Promise.any([
//     getUser(1),
//     raiseError(),
//     getUser(1),

// ])
// .then(function(response){
//     console.log(response)
// })



// async function PromiseAny2() {
//         let results = await Promise.any([
//             getUser(1),
//             raiseError(),
//             getUser(1),
//         ])
//         console.log(results) 
// }
// PromiseAny2()



// async function PromiseRace2() {
//     try {
//         let results = await Promise.race([
//             getUser(1),
//             raiseError()
//         ])
//         console.log(results)
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// PromiseRace2()



// Promise.race([
//         getUser(1),
//         raiseError()
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(error){
//     console.log(error)
// })
// .finally(function(){
//     console.log('I will always executed')
// })

// Promise.allSettled([
//         getUser(1),
//         getUser(2),
//         getUser(3)
// ])
// .then(function(response){
//     console.log(response)
// })

// async function promiseSettled2(){
//     let results = await Promise.allSettled([
//         getUser(1),
//         getUser(2),
//         getUser(3)
//     ])
//     console.log(results)
// }
// promiseSettled2()

// Promise.all
// Promise.all([
//     getUser(1),
//     getUser(2),
//     getUser(3)
// ])
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

// async function promiseAll2() {
//     try {

//         let results = await Promise.all([
//             getUser(1),
//             getUser(2),
//             getUser(3)
//         ])
//         console.log(results)
//     }
//     catch (error) {
//         console.log(error)
//     }

// }
// promiseAll2()