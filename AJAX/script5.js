// Promises combinators parallel 
// Promise.all() -----> resolves when all promises are resolved else reject
// Promise.allSettled() ----> resolves with all state even if the some call are fail
// Promise.race() ----> resovle / rejects as soon as promise is consumsed
// Promise.any() --- ignores all reject state and shortcircuit with first resolve

// Program 


function AsyncTask(name,delay,shouldReject=false){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(shouldReject){
                reject(`${name} falied`)
            }
            else{
                resolve(`${name} passed`)
            }
        },delay)
    })
}

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


Promise.any([
    AsyncTask("walking",5000,true),
    AsyncTask("coding",3000,true),
    AsyncTask("reading",4000),
    AsyncTask("cooking",2000)
])
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})
