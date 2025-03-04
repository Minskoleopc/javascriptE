function getUsers(pageNumber){
   return  fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response
    })

}

function getSingle(id){
    return fetch(`https://reqres.in/api/user/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function renderHtml(el){
    document.write(`<h1>${el.name}</h1>`)

}


// getUsers(2)
// .then(function(response){
//     let id = response.data[0]['id']
//     return getSingle(id)
// })
// .then(function(user){
//     //console.log(user)
//     console.log(user)
//     renderHtml(user)
// })

async function renderUser (pageNumber){
    let response = await getUsers(pageNumber)
    let id = response.data[0].id
    let user  = await getSingle(id)
    renderHtml(user)
    
}
renderUser(1)










// async function getUsersInfo(){
//     let page2 = await getUser(2)
//     console.log(page2)
//     let page3 = await getUser(3)
//     console.log(page3)
// }
// getUsersInfo()

// getUser(2)
// .then(function(body){
//     console.log(body)
// })
// getUser(3).then(function(body){
//     console.log(body)
// })